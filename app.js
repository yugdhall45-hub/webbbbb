/**
 * ===================================================================
 * CORE APPLICATION LOGIC
 * Dynamic Rendering, Filter Engine, Modals, Forms & Interactivity
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Verify configuration is loaded
  const config = window.siteConfig;
  if (!config) {
    console.error('siteConfig is missing! Check js/config.js');
    return;
  }

  // State
  let currentFilter = 'All';
  let activeHeroProjectIndex = 0;
  let activeCaseStudyIndex = 0;
  let selectedBudget = '$1,500 – $3,000';
  let selectedFeatures = new Set(['Mobile-First Responsive', 'Clean On-Page SEO']);

  // -----------------------------------------------------------------
  // 1. INITIALIZE SITE BRANDING & STATS
  // -----------------------------------------------------------------
  function initBranding() {
    // Brand titles
    document.querySelectorAll('.js-brand-title').forEach(el => el.textContent = config.brand.brandTitle);
    document.querySelectorAll('.js-brand-name').forEach(el => el.textContent = config.brand.name);
    document.querySelectorAll('.js-brand-role').forEach(el => el.textContent = config.brand.role);
    document.querySelectorAll('.js-availability').forEach(el => el.textContent = config.brand.availability);
    
    // Status badge
    const statusEl = document.getElementById('navbar-status-badge');
    if (statusEl) statusEl.textContent = config.brand.statusBadge;

    // Hero metrics
    const metric1Val = document.getElementById('metric-satisfaction-val');
    if (metric1Val) metric1Val.textContent = config.brand.clientSatisfaction;

    const metric2Val = document.getElementById('metric-projects-val');
    if (metric2Val) metric2Val.textContent = config.brand.projectsCompleted;

    const metric3Val = document.getElementById('metric-speed-val');
    if (metric3Val) metric3Val.textContent = config.brand.speedScoreAverage;

    const metric4Val = document.getElementById('metric-exp-val');
    if (metric4Val) metric4Val.textContent = config.brand.yearsExperience;

    // Contact info
    const emailEls = document.querySelectorAll('.js-contact-email');
    emailEls.forEach(el => {
      el.textContent = config.contact.email;
      if (el.tagName === 'A') el.href = `mailto:${config.contact.email}`;
    });

    const waEls = document.querySelectorAll('.js-contact-whatsapp');
    waEls.forEach(el => {
      el.textContent = config.contact.whatsappDisplay;
      if (el.tagName === 'A') el.href = `https://wa.me/${config.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(config.contact.whatsappMessage)}`;
    });

    // Social links
    const liLink = document.getElementById('social-linkedin');
    if (liLink) liLink.href = config.contact.linkedin;
    const ghLink = document.getElementById('social-github');
    if (ghLink) ghLink.href = config.contact.github;
    const igLink = document.getElementById('social-instagram');
    if (igLink) igLink.href = config.contact.instagram;
  }

  // -----------------------------------------------------------------
  // 2. HERO INTERACTIVE PROJECT MOCKUP SWITCHER
  // -----------------------------------------------------------------
  function initHeroMockup() {
    const tabsContainer = document.getElementById('hero-browser-tabs');
    const previewImg = document.getElementById('hero-preview-img');
    const previewTitle = document.getElementById('hero-preview-title');
    const previewBadge = document.getElementById('hero-preview-badge');
    const previewActionBtn = document.getElementById('hero-preview-action-btn');

    if (!tabsContainer || !previewImg) return;

    // We feature up to 4 top projects in the hero switcher
    const heroProjects = config.projects.slice(0, 4);

    tabsContainer.innerHTML = '';
    heroProjects.forEach((proj, idx) => {
      const tab = document.createElement('button');
      tab.className = `browser-tab ${idx === 0 ? 'active' : ''}`;
      tab.setAttribute('aria-label', `View ${proj.title}`);
      tab.innerHTML = `
        <span class="tab-indicator"></span>
        <span>${proj.title.split('–')[0].split('—')[0].trim()}</span>
      `;
      tab.addEventListener('click', () => switchHeroProject(idx));
      tabsContainer.appendChild(tab);
    });

    function switchHeroProject(index) {
      activeHeroProjectIndex = index;
      const proj = heroProjects[index];
      if (!proj) return;

      // Update tabs
      const tabs = tabsContainer.querySelectorAll('.browser-tab');
      tabs.forEach((t, i) => t.classList.toggle('active', i === index));

      // Animate Image change
      previewImg.style.opacity = '0.4';
      previewImg.style.transform = 'scale(0.97)';
      setTimeout(() => {
        previewImg.src = proj.thumbnail;
        previewImg.alt = proj.title;
        previewImg.style.opacity = '1';
        previewImg.style.transform = 'scale(1)';
      }, 150);

      // Update labels
      if (previewTitle) previewTitle.textContent = proj.title;
      if (previewBadge) previewBadge.textContent = proj.badge || proj.category;

      if (previewActionBtn) {
        previewActionBtn.onclick = (e) => {
          e.preventDefault();
          openCaseStudyModal(proj.id);
        };
      }
    }

    // Initial project setup
    switchHeroProject(0);
  }

  // -----------------------------------------------------------------
  // 3. ABOUT PILLARS
  // -----------------------------------------------------------------
  function initAboutPillars() {
    const container = document.getElementById('about-pillars-grid');
    if (!container) return;

    container.innerHTML = config.about.pillars.map(pillar => `
      <div class="pillar-card">
        <div class="pillar-icon-box">${pillar.icon}</div>
        <h3 class="pillar-title">${pillar.title}</h3>
        <p class="pillar-desc">${pillar.description}</p>
      </div>
    `).join('');
  }

  // -----------------------------------------------------------------
  // 4. SERVICES RENDERING
  // -----------------------------------------------------------------
  function initServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    container.innerHTML = config.services.map(svc => `
      <div class="service-card" id="service-card-${svc.id}">
        <div>
          <div class="service-header">
            <span class="service-number">${svc.number}</span>
            <div class="service-icon-wrap">${svc.icon}</div>
          </div>
          <h3 class="service-title">${svc.title}</h3>
          <p class="service-desc">${svc.shortDesc}</p>
          <ul class="service-deliverables">
            ${svc.deliverables.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <a href="#contact" class="service-cta-link" onclick="selectServiceForContact('${svc.title}')">
          Inquire About This Service <span>→</span>
        </a>
      </div>
    `).join('');
  }

  // Helper when clicking "Inquire" on a service card
  window.selectServiceForContact = function(serviceTitle) {
    const selectEl = document.getElementById('form-website-type');
    if (selectEl) {
      for (let i = 0; i < selectEl.options.length; i++) {
        if (selectEl.options[i].text.toLowerCase().includes(serviceTitle.toLowerCase()) || 
            serviceTitle.toLowerCase().includes(selectEl.options[i].text.toLowerCase())) {
          selectEl.selectedIndex = i;
          break;
        }
      }
    }
  };

  // -----------------------------------------------------------------
  // 5. PROJECTS / PORTFOLIO WITH FILTERS
  // -----------------------------------------------------------------
  function initPortfolio() {
    const filterContainer = document.getElementById('portfolio-filters');
    const projectsContainer = document.getElementById('projects-grid');

    if (!filterContainer || !projectsContainer) return;

    const categories = ['All', 'Business', 'Portfolio', 'Landing Page', 'E-commerce', 'AI', 'Creative', 'Other'];

    filterContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.category;
        renderProjects();
      });
    });

    renderProjects();
  }

  function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    const filtered = currentFilter === 'All'
      ? config.projects
      : config.projects.filter(p => {
          if (p.category.toLowerCase() === currentFilter.toLowerCase()) return true;
          if (p.tags && p.tags.some(t => t.toLowerCase() === currentFilter.toLowerCase())) return true;
          return false;
        });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <h3>No projects found in this category yet.</h3>
          <p>More prototypes and case studies are currently in production.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(proj => {
      const isLiveLink = proj.liveWebsiteLink && proj.liveWebsiteLink !== '#';
      const isPrototypeLink = proj.prototypeLink && proj.prototypeLink !== '#';

      return `
        <article class="project-card" data-id="${proj.id}">
          <div class="project-card-media">
            <img src="${proj.thumbnail}" alt="${proj.title}" class="project-thumbnail" loading="lazy" />
            <div class="project-card-badges">
              <span class="badge badge-violet">${proj.category}</span>
              ${proj.badge ? `<span class="badge badge-emerald">${proj.badge}</span>` : ''}
            </div>
            <div class="project-card-actions-float">
              ${isLiveLink ? `
                <a href="${proj.liveWebsiteLink}" target="_blank" rel="noopener noreferrer" class="project-quick-btn" title="Open Live Website">
                  ↗
                </a>
                <button class="project-quick-btn" onclick="openPrototypeSimulator('${proj.liveWebsiteLink}', '${proj.title}')" title="Preview in Device Simulator">
                  📱
                </button>
              ` : ''}
            </div>
          </div>
          <div class="project-card-body">
            <div class="project-card-category">${proj.category}</div>
            <h3 class="project-card-title">${proj.title}</h3>
            <p class="project-card-desc">${proj.shortDesc}</p>
            <div class="project-tech-tags">
              ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="project-card-footer">
              <button class="btn-card-primary" onclick="openCaseStudyModal('${proj.id}')">
                Case Study <span>→</span>
              </button>
              <div style="display: flex; gap: 12px; align-items: center;">
                ${isLiveLink ? `
                  <a href="${proj.liveWebsiteLink}" target="_blank" rel="noopener noreferrer" class="btn-card-link">
                    Live Demo ↗
                  </a>
                ` : `
                  <button class="btn-card-link" onclick="openCaseStudyModal('${proj.id}')">
                    Details ↗
                  </button>
                `}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // -----------------------------------------------------------------
  // 6. CASE STUDY MODAL MANAGEMENT
  // -----------------------------------------------------------------
  window.openCaseStudyModal = function(projectId) {
    const modalBackdrop = document.getElementById('case-study-modal-backdrop');
    if (!modalBackdrop) return;

    const projIdx = config.projects.findIndex(p => p.id === projectId);
    if (projIdx === -1) return;

    activeCaseStudyIndex = projIdx;
    populateCaseStudyModal(config.projects[projIdx]);

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function populateCaseStudyModal(proj) {
    document.getElementById('cs-modal-category').textContent = `${proj.category} Case Study`;
    document.getElementById('cs-modal-title').textContent = proj.title;
    document.getElementById('cs-modal-img').src = proj.thumbnail;
    document.getElementById('cs-modal-img').alt = proj.title;

    // Stats bar
    const statsBar = document.getElementById('cs-modal-stats');
    if (statsBar && proj.stats) {
      statsBar.innerHTML = `
        <div class="modal-stat-item">
          <span class="modal-stat-val">${proj.stats.metric1}</span>
          <span class="modal-stat-lbl">${proj.stats.label1}</span>
        </div>
        <div class="modal-stat-item">
          <span class="modal-stat-val">${proj.stats.metric2}</span>
          <span class="modal-stat-lbl">${proj.stats.label2}</span>
        </div>
        <div class="modal-stat-item">
          <span class="modal-stat-val">${proj.stats.metric3}</span>
          <span class="modal-stat-lbl">${proj.stats.label3}</span>
        </div>
      `;
    }

    // Detail blocks
    document.getElementById('cs-modal-client').textContent = `${proj.caseStudy.client} • ${proj.caseStudy.businessType} (${proj.caseStudy.timeline})`;
    document.getElementById('cs-modal-objective').textContent = proj.caseStudy.objective;
    document.getElementById('cs-modal-problem').textContent = proj.caseStudy.problem;
    document.getElementById('cs-modal-solution').textContent = proj.caseStudy.solution;
    document.getElementById('cs-modal-approach').textContent = proj.caseStudy.designApproach;
    document.getElementById('cs-modal-results').textContent = proj.caseStudy.results;

    // Tech pills
    const techBox = document.getElementById('cs-modal-tech');
    if (techBox) {
      techBox.innerHTML = proj.technologies.map(t => `<span class="badge badge-violet">${t}</span>`).join('');
    }

    // Key features list
    const featBox = document.getElementById('cs-modal-features');
    if (featBox) {
      featBox.innerHTML = proj.caseStudy.keyFeatures.map(f => `<li>${f}</li>`).join('');
    }

    // Live link CTA
    const liveBtn = document.getElementById('cs-modal-live-btn');
    if (liveBtn) {
      if (proj.liveWebsiteLink && proj.liveWebsiteLink !== '#') {
        liveBtn.href = proj.liveWebsiteLink;
        liveBtn.style.display = 'inline-flex';
        liveBtn.textContent = 'Visit Live Website ↗';
      } else {
        liveBtn.style.display = 'none';
      }
    }

    // Inquire for similar project button
    const inquireBtn = document.getElementById('cs-modal-inquire-btn');
    if (inquireBtn) {
      inquireBtn.onclick = () => {
        closeCaseStudyModal();
        window.location.hash = '#contact';
        selectServiceForContact(proj.category);
      };
    }

    // Prev / Next Project buttons
    const prevBtn = document.getElementById('cs-modal-prev-btn');
    const nextBtn = document.getElementById('cs-modal-next-btn');

    const total = config.projects.length;
    const prevIdx = (activeCaseStudyIndex - 1 + total) % total;
    const nextIdx = (activeCaseStudyIndex + 1) % total;

    if (prevBtn) {
      prevBtn.onclick = () => {
        activeCaseStudyIndex = prevIdx;
        populateCaseStudyModal(config.projects[prevIdx]);
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        activeCaseStudyIndex = nextIdx;
        populateCaseStudyModal(config.projects[nextIdx]);
      };
    }
  }

  window.closeCaseStudyModal = function() {
    const modalBackdrop = document.getElementById('case-study-modal-backdrop');
    if (modalBackdrop) modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  // -----------------------------------------------------------------
  // 7. LIVE PROTOTYPE SIMULATOR MODAL
  // -----------------------------------------------------------------
  window.openPrototypeSimulator = function(url, title) {
    const simModal = document.getElementById('simulator-modal-backdrop');
    const simIframe = document.getElementById('simulated-iframe');
    const simTitle = document.getElementById('simulator-title');
    const simExtLink = document.getElementById('simulator-external-link');

    if (!simModal || !simIframe) return;

    simTitle.textContent = title || 'Live Preview';
    simIframe.src = url;
    if (simExtLink) simExtLink.href = url;

    simModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closePrototypeSimulator = function() {
    const simModal = document.getElementById('simulator-modal-backdrop');
    const simIframe = document.getElementById('simulated-iframe');
    if (simModal) simModal.classList.remove('open');
    if (simIframe) simIframe.src = 'about:blank';
    document.body.style.overflow = '';
  };

  window.setSimulatorDevice = function(device) {
    const simIframe = document.getElementById('simulated-iframe');
    const btns = document.querySelectorAll('.device-btn');
    if (!simIframe) return;

    btns.forEach(b => b.classList.toggle('active', b.dataset.device === device));
    simIframe.className = `simulated-iframe ${device}`;
  };

  // Keyboard shortcut: Escape to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudyModal();
      closePrototypeSimulator();
    }
  });

  // -----------------------------------------------------------------
  // 8. PROCESS TIMELINE
  // -----------------------------------------------------------------
  function initProcess() {
    const container = document.getElementById('process-timeline');
    if (!container) return;

    container.innerHTML = config.process.map(p => `
      <div class="process-card">
        <div class="process-step-num">${p.step}</div>
        <h3 class="process-name">${p.name}</h3>
        <div class="process-tagline">${p.tagline}</div>
        <p class="process-desc">${p.description}</p>
        <div class="process-deliverables-pill">
          <strong>Key Output:</strong> ${p.deliverables[0]}
        </div>
      </div>
    `).join('');
  }

  // -----------------------------------------------------------------
  // 9. WHY WORK WITH ME (8 Cards)
  // -----------------------------------------------------------------
  function initWhyMe() {
    const container = document.getElementById('why-grid');
    if (!container) return;

    container.innerHTML = config.whyMe.map(item => `
      <div class="why-card">
        <div class="why-icon">${item.icon}</div>
        <h3 class="why-title">${item.title}</h3>
        <p class="why-desc">${item.description}</p>
      </div>
    `).join('');
  }

  // -----------------------------------------------------------------
  // 10. TECHNOLOGIES & TOOLS
  // -----------------------------------------------------------------
  function initTechStack() {
    const container = document.getElementById('tech-grid');
    if (!container) return;

    const iconsMap = {
      'HTML5': '🌐',
      'CSS3 / Vanilla CSS': '🎨',
      'JavaScript (ES6+)': '⚡',
      'React': '⚛️',
      'Next.js': '▲',
      'WordPress': '📝',
      'Figma': '📐',
      'Canva': '🖼️',
      'GitHub': '🐙',
      'Vercel': '▲',
      'AI Tools & LLMs': '🤖',
      'Chatbots': '💬',
      'Automation Tools': '⚙️'
    };

    container.innerHTML = config.technologies.map(tech => `
      <div class="tech-card">
        <div class="tech-icon-box">${iconsMap[tech.name] || '💻'}</div>
        <div class="tech-info">
          <span class="tech-name">${tech.name}</span>
          <span class="tech-sub">${tech.category} • ${tech.level}</span>
        </div>
      </div>
    `).join('');
  }

  // -----------------------------------------------------------------
  // 11. TESTIMONIALS
  // -----------------------------------------------------------------
  function initTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    container.innerHTML = config.testimonials.map(t => `
      <div class="testimonial-card">
        <div>
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote">"${t.quote}"</p>
        </div>
        <div class="testimonial-author">
          <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy" />
          <div>
            <h4 class="author-name">${t.name}</h4>
            <div class="author-meta">${t.role}, ${t.company}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // -----------------------------------------------------------------
  // 12. LIVE DEPLOYMENTS SHOWCASE RENDERING
  // -----------------------------------------------------------------
  function initLiveShowcase() {
    const container = document.getElementById('live-showcase-grid');
    if (!container || !config.liveDeployments) return;

    container.innerHTML = config.liveDeployments.map(item => `
      <article class="live-card">
        <div class="live-terminal-bar">
          <div class="live-host-tag">
            <span class="live-ping-dot"></span>
            <span>${item.hostBadge}</span>
          </div>
          <span class="live-domain-badge">🔒 ${item.domain}</span>
        </div>

        <div class="live-card-media">
          <img src="${item.previewImg}" alt="${item.title}" class="live-card-thumb" loading="lazy" />
          <button class="live-card-overlay-btn" onclick="openPrototypeSimulator('${item.url}', '${item.title}')">
            <span>Simulator</span> <span>📱</span>
          </button>
        </div>

        <div class="live-card-content">
          <div class="live-card-cat">${item.category}</div>
          <h3 class="live-card-title">${item.title}</h3>
          <p class="live-card-desc">${item.description}</p>
          
          <div class="live-card-tech">
            ${item.techStack.map(t => `<span class="live-tech-badge">${t}</span>`).join('')}
          </div>

          <div class="live-card-actions">
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-live-launch">
              <span>Launch Live Site</span> <span>↗</span>
            </a>
            <button class="btn-live-sim" onclick="openPrototypeSimulator('${item.url}', '${item.title}')">
              <span>Test Device</span> <span>📱</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // -----------------------------------------------------------------
  // 13. FAQ ACCORDION
  // -----------------------------------------------------------------
  function initFaq() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    container.innerHTML = config.faqs.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''}">
        <button class="faq-question-btn" aria-expanded="${idx === 0}">
          <span>${faq.question}</span>
          <span class="faq-icon-indicator">+</span>
        </button>
        <div class="faq-answer-wrap" style="${idx === 0 ? 'max-height: 250px;' : 'max-height: 0;'}">
          <p class="faq-answer-text">${faq.answer}</p>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      const wrap = item.querySelector('.faq-answer-wrap');

      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        container.querySelectorAll('.faq-item').forEach(other => {
          other.classList.remove('active');
          other.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer-wrap').style.maxHeight = '0';
        });

        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          wrap.style.maxHeight = wrap.scrollHeight + 30 + 'px';
        }
      });
    });
  }

  // -----------------------------------------------------------------
  // 14. CONTACT INQUIRY FORM & WHATSAPP GENERATOR
  // -----------------------------------------------------------------
  function initContactForm() {
    // Budget pills
    const budgetPills = document.querySelectorAll('.budget-pill');
    budgetPills.forEach(pill => {
      pill.addEventListener('click', () => {
        budgetPills.forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        selectedBudget = pill.dataset.budget;
      });
    });

    // Feature tags multi-select
    const featureTags = document.querySelectorAll('.feature-tag-check');
    featureTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const feat = tag.dataset.feature;
        if (selectedFeatures.has(feat)) {
          selectedFeatures.delete(feat);
          tag.classList.remove('active');
        } else {
          selectedFeatures.add(feat);
          tag.classList.add('active');
        }
      });
    });

    // Form submission
    const form = document.getElementById('project-inquiry-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const phone = document.getElementById('form-phone').value.trim();
        const brand = document.getElementById('form-brand').value.trim();
        const type = document.getElementById('form-website-type').value;
        const description = document.getElementById('form-description').value.trim();
        const refUrl = document.getElementById('form-reference').value.trim();

        if (!name || !email) {
          showToast('Please provide your name and email address.', 'error');
          return;
        }

        // Show successful inquiry toast
        showToast(`Thank you, ${name}! Your project inquiry has been received. I will reply within 2 hours.`, 'success');
        form.reset();
      });
    }

    // Direct WhatsApp Chat Button
    const waBtn = document.getElementById('btn-send-whatsapp');
    if (waBtn) {
      waBtn.addEventListener('click', () => {
        const name = document.getElementById('form-name').value.trim() || 'Potential Client';
        const brand = document.getElementById('form-brand').value.trim() || 'My Business';
        const type = document.getElementById('form-website-type').value || 'Website Project';
        const desc = document.getElementById('form-description').value.trim() || 'I want to build a modern website.';
        const featuresArray = Array.from(selectedFeatures).join(', ');

        const text = `Hi Alex Rivera! My name is ${name} (${brand}).\n` +
          `I am interested in a ${type} with budget ${selectedBudget}.\n` +
          `Key features: ${featuresArray || 'Standard'}.\n` +
          `Details: ${desc}`;

        const waUrl = `https://wa.me/${config.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
      });
    }
  }

  // -----------------------------------------------------------------
  // 15. MOBILE DRAWER NAVIGATION
  // -----------------------------------------------------------------
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const backdrop = document.getElementById('mobile-nav-backdrop');

    if (!hamburger || !mobileNav) return;

    function toggleMenu() {
      const isOpen = mobileNav.classList.contains('open');
      hamburger.classList.toggle('active', !isOpen);
      mobileNav.classList.toggle('open', !isOpen);
      if (backdrop) backdrop.classList.toggle('open', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);
    if (backdrop) backdrop.addEventListener('click', toggleMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu();
      });
    });
  }

  // -----------------------------------------------------------------
  // 16. TOAST NOTIFICATIONS
  // -----------------------------------------------------------------
  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✅' : '⚠️'}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  // Run all module initializations
  initBranding();
  initHeroMockup();
  initAboutPillars();
  initServices();
  initPortfolio();
  initProcess();
  initWhyMe();
  initTechStack();
  initTestimonials();
  initLiveShowcase();
  initFaq();
  initContactForm();
  initMobileMenu();
});
