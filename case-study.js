/* ========================================
   CASE STUDY INTERACTIONS — V2
   Scroll-driven, parallax, magnetic,
   inspired by TrumpRx + YCombinator
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initSmoothPageLoad();
    initCircularProgressNav();
    initParallaxHero();
    initTextRevealOnScroll();
    initSectionVisibility();
    initSmoothScrollLinks();
    initCounterAnimation();
    initLightbox();
    initStickyFeatureScroll();
    initImageClipReveal();
    initMagneticCards();
    initCursorGlow();
    initMarqueeTicker();
    initSectionColorShift();
    initUniqueInteractions();
    // V3 — TrumpRx + YC inspired
    initComparisonBars();
    initMarqueeStrips();
    initBeforeAfterSliders();
    initBeforeAfterToggles();
    initMetricBarFills();
    initOutcomeRings();
    initHeroScrollCue();
    initSavingsStrikethrough();
    initMeasurementTimeline();
});

/* ========================================
   SMOOTH PAGE LOAD
   ======================================== */
function initSmoothPageLoad() {
    document.body.classList.add('cs-loading');
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            document.body.classList.remove('cs-loading');
            document.body.classList.add('cs-loaded');
        });
    });
}

/* ========================================
   FLOATING PROGRESS NAVIGATION
   ======================================== */
function initCircularProgressNav() {
    const nav = document.getElementById('caseStudyNav');
    if (!nav) return;

    const navLinks = nav.querySelectorAll('.nav-section-link');
    const navCurrentSection = nav.querySelector('.nav-current-section');
    const navCurrentLabel = nav.querySelector('.nav-current-label');
    const progressText = nav.querySelector('.progress-percentage');
    const progressCircle = nav.querySelector('.progress-ring-circle');
    const sections = [];

    navLinks.forEach((link, index) => {
        const sectionId = link.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        const label = link.querySelector('.nav-label');
        if (section) {
            sections.push({
                id: sectionId,
                element: section,
                link: link,
                index: index,
                label: label ? label.textContent : sectionId
            });
        }
    });

    if (sections.length === 0) return;

    let currentSectionData = sections[0];
    if (progressText) progressText.textContent = sections[0].index;

    const radius = 16;
    const circumference = radius * 2 * Math.PI;

    if (progressCircle) {
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;
    }

    function updateProgress() {
        const scrollTop = window.scrollY;
        const viewportHeight = window.innerHeight;
        let newCurrentSection = sections[0];
        const viewportMid = scrollTop + viewportHeight * 0.4;

        sections.forEach(section => {
            const sectionTop = section.element.offsetTop;
            const sectionBottom = sectionTop + section.element.offsetHeight;
            if (viewportMid >= sectionTop && viewportMid < sectionBottom) {
                newCurrentSection = section;
            }
        });

        const sectionTop = newCurrentSection.element.offsetTop;
        const sectionHeight = newCurrentSection.element.offsetHeight;
        const sectionScrollStart = sectionTop - viewportHeight * 0.3;
        const sectionScrollEnd = sectionTop + sectionHeight - viewportHeight * 0.7;
        const sectionProgress = Math.max(0, Math.min(1,
            (scrollTop - sectionScrollStart) / (sectionScrollEnd - sectionScrollStart)
        ));

        if (progressCircle) {
            const offset = circumference - (sectionProgress * circumference);
            progressCircle.style.strokeDashoffset = offset;
        }

        if (progressText) progressText.textContent = newCurrentSection.index;
        if (navCurrentLabel) navCurrentLabel.textContent = newCurrentSection.label;

        if (newCurrentSection !== currentSectionData) {
            navLinks.forEach(link => link.classList.remove('active'));
            newCurrentSection.link.classList.add('active');
            currentSectionData = newCurrentSection;
        }
    }

    function updateNavVisibility() {
        const scrollTop = window.scrollY;
        const heroSection = document.getElementById('overview') || document.querySelector('.cs-hero');
        const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;

        if (scrollTop > heroHeight * 0.5) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
            nav.classList.remove('expanded');
        }
    }

    if (navCurrentSection) {
        navCurrentSection.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('expanded');
        });
    }

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) nav.classList.remove('expanded');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('expanded'));
    });

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        updateProgress();
        updateNavVisibility();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => nav.classList.remove('expanded'), 150);
    }, { passive: true });

    updateProgress();
    updateNavVisibility();
}

/* ========================================
   PARALLAX HERO — Multi-layer depth
   ======================================== */
function initParallaxHero() {
    const hero = document.querySelector('.cs-hero');
    if (!hero) return;

    const badge = hero.querySelector('.hero-badge, .cs-project-badge');
    const title = hero.querySelector('.hero-title, .cs-title');
    const tagline = hero.querySelector('.hero-tagline, .cs-tagline');
    const mockup = hero.querySelector('.hero-mockup, .cs-hero-visual');
    const metaGrid = hero.querySelector('.hero-meta-grid, .cs-meta-grid');
    const blobs = document.querySelectorAll('.blob');

    function updateParallax() {
        const scrollY = window.scrollY;
        const heroHeight = hero.offsetHeight;
        if (scrollY > heroHeight * 1.5) return;

        const progress = scrollY / heroHeight;

        if (title) {
            title.style.transform = `translateY(${scrollY * 0.15}px)`;
            title.style.opacity = 1 - progress * 1.2;
        }
        if (tagline) {
            tagline.style.transform = `translateY(${scrollY * 0.1}px)`;
            tagline.style.opacity = 1 - progress * 1.4;
        }
        if (badge) {
            badge.style.transform = `translateY(${scrollY * 0.2}px)`;
            badge.style.opacity = 1 - progress * 1.5;
        }
        if (metaGrid) {
            metaGrid.style.transform = `translateY(${scrollY * 0.08}px)`;
            metaGrid.style.opacity = 1 - progress * 1.1;
        }
        if (mockup) {
            mockup.style.transform = `translateY(${scrollY * -0.05}px) scale(${1 - progress * 0.05})`;
        }
        blobs.forEach((blob, i) => {
            const speed = 0.08 + i * 0.04;
            blob.style.transform = `translate(${Math.sin(scrollY * 0.002 + i) * 20}px, ${scrollY * speed}px)`;
        });
    }

    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
}

/* ========================================
   TEXT REVEAL ON SCROLL — Word-by-word
   ======================================== */
function initTextRevealOnScroll() {
    const targets = document.querySelectorAll('.lead-text, .hmw-question, .solution-overview h3, .section-title');

    targets.forEach(el => {
        if (el.classList.contains('text-reveal-ready')) return;
        el.classList.add('text-reveal-ready');

        const text = el.innerHTML;
        // Split by words but preserve HTML tags
        const words = text.split(/(\s+)/);
        el.innerHTML = words.map((word, i) => {
            if (word.trim() === '') return word;
            // If word contains HTML tag, return as-is wrapped
            if (word.includes('<')) return word;
            return `<span class="reveal-word" style="--word-i:${i}">${word}</span>`;
        }).join('');

        el.classList.add('text-reveal-target');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('text-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('.text-reveal-target').forEach(el => observer.observe(el));
}

/* ========================================
   SECTION VISIBILITY ANIMATIONS
   ======================================== */
function initSectionVisibility() {
    const sections = document.querySelectorAll('.cs-section');
    if (sections.length === 0) return;

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const children = entry.target.querySelectorAll('.animate-on-scroll');
                children.forEach((child, i) => {
                    child.style.animationDelay = `${i * 0.1}s`;
                    child.classList.add('animated');
                });
            }
        });
    }, { root: null, rootMargin: '0px 0px -5% 0px', threshold: 0.05 });

    sections.forEach(section => sectionObserver.observe(section));
}

/* ========================================
   SMOOTH SCROLL FOR NAV LINKS
   ======================================== */
function initSmoothScrollLinks() {
    document.querySelectorAll('.nav-section-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                const offset = target.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });
}

/* ========================================
   COUNTER ANIMATION — Dramatic entrance
   ======================================== */
function initCounterAnimation() {
    const metrics = document.querySelectorAll('.metric-value, .outcome-value, .stat-value');
    if (metrics.length === 0) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counter-animating');
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });

    metrics.forEach(metric => counterObserver.observe(metric));
}

function animateCounter(element) {
    const text = element.textContent.trim();
    const isRange = /\d+\s*-\s*\d+/.test(text);
    if (isRange) return;

    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const hasMinus = text.startsWith('-');
    const hasSlash = text.includes('/');
    const hasS = text.includes('s') && !text.includes(' ');

    let numericValue = parseFloat(text.replace(/[^0-9.-]/g, ''));
    if (isNaN(numericValue)) return;

    const duration = 1600;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        let currentValue = numericValue * easeOutExpo;
        let formatted;

        if (hasSlash) {
            formatted = currentValue.toFixed(1) + '/5';
        } else if (Number.isInteger(numericValue)) {
            formatted = Math.round(currentValue).toString();
        } else {
            formatted = currentValue.toFixed(1);
        }

        if (hasPlus && numericValue > 0) formatted = '+' + formatted;
        if (hasMinus && !formatted.startsWith('-')) formatted = '-' + formatted;
        if (hasPercent) formatted += '%';
        if (hasS) formatted += 's';

        element.textContent = formatted;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.classList.remove('counter-animating');
            element.classList.add('counter-done');
        }
    }

    requestAnimationFrame(update);
}

/* ========================================
   IMAGE LIGHTBOX
   ======================================== */
function initLightbox() {
    const images = document.querySelectorAll('.cs-visual-placeholder img, .screen-visual img, .phase-image img, .feature-visual img, .flow-visual img, .design-system-image img, .mockup-image, .research-visual img, .design-system-full img, .screen-image img');
    if (images.length === 0) return;

    const lightbox = document.createElement('div');
    lightbox.className = 'cs-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <img src="" alt="" class="lightbox-image">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lbImage = lightbox.querySelector('.lightbox-image');
    const lbBackdrop = lightbox.querySelector('.lightbox-backdrop');
    const lbClose = lightbox.querySelector('.lightbox-close');

    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            lbImage.src = img.src;
            lbImage.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    lbBackdrop.addEventListener('click', closeLightbox);
    lbClose.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
}

/* ========================================
   STICKY FEATURE SCROLL
   Pin text while images scroll through
   (YC "during / now" style)
   ======================================== */
function initStickyFeatureScroll() {
    const featureBlocks = document.querySelectorAll('.solution-flow');
    if (featureBlocks.length === 0) return;

    featureBlocks.forEach(flow => {
        const steps = flow.querySelectorAll('.flow-step');
        if (steps.length < 2) return;

        steps.forEach(step => {
            const visual = step.querySelector('.flow-visual');
            if (!visual) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        step.classList.add('flow-step-active');
                        visual.classList.add('flow-visual-revealed');
                    }
                });
            }, { threshold: 0.3, rootMargin: '0px 0px -20% 0px' });

            observer.observe(step);
        });
    });
}

/* ========================================
   IMAGE CLIP REVEAL
   Images unveil with clip-path on scroll
   ======================================== */
function initImageClipReveal() {
    const revealImages = document.querySelectorAll(
        '.mockup-wrapper, .phase-image, .feature-visual, .flow-visual, .design-system-image, .design-system-full, .research-visual, .screen-image'
    );

    if (revealImages.length === 0) return;

    revealImages.forEach(el => el.classList.add('clip-reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('clip-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

    revealImages.forEach(el => observer.observe(el));
}

/* ========================================
   MAGNETIC CARD HOVER
   Cards subtly follow the cursor
   ======================================== */
function initMagneticCards() {
    const cards = document.querySelectorAll(
        '.pain-point-card, .pillar-card, .method-card, .insight-card, .feature-card, .learning-card, .outcome-card, .goal-item, .persona-card, .next-step-card, .cycle-step, .tldr-metric, .reflection-insight-card'
    );

    if (window.matchMedia('(pointer: coarse)').matches) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateX = (y / rect.height) * -8;
            const rotateY = (x / rect.width) * 8;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`;
            card.style.transition = 'transform 0.1s ease-out';

            // Dynamic shine
            const shine = ((x + rect.width / 2) / rect.width) * 100;
            card.style.setProperty('--shine-x', `${shine}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    });
}

/* ========================================
   CURSOR GLOW
   Soft ambient glow follows cursor
   ======================================== */
function initCursorGlow() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
        requestAnimationFrame(animateGlow);
    }

    animateGlow();

    // Show/hide based on sections with cards
    const cardSections = document.querySelectorAll('.cs-challenge, .cs-research, .cs-solution, .cs-reflection, .cs-conclusion');
    const glowObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                glow.classList.add('cursor-glow-visible');
            } else {
                glow.classList.remove('cursor-glow-visible');
            }
        });
    }, { threshold: 0.1 });

    cardSections.forEach(s => glowObserver.observe(s));
}

/* ========================================
   MARQUEE TICKER
   Auto-scrolling horizontal element
   (YC-style company scroll)
   ======================================== */
function initMarqueeTicker() {
    const metricsGrids = document.querySelectorAll('.tldr-metrics');

    metricsGrids.forEach(grid => {
        if (grid.classList.contains('marquee-ready')) return;
        grid.classList.add('marquee-ready');

        // Only apply marquee on smaller viewports where it makes sense
        // On desktop, the 3-column grid looks great already
        // The marquee CSS will handle the visual effect
    });

    // Add infinite horizontal scroll to outcome cards on hover
    const outcomeGrids = document.querySelectorAll('.outcomes-grid');
    outcomeGrids.forEach(grid => {
        const cards = grid.querySelectorAll('.outcome-card');
        if (cards.length < 3) return;

        // Add hover-pause functionality
        grid.addEventListener('mouseenter', () => grid.classList.add('marquee-paused'));
        grid.addEventListener('mouseleave', () => grid.classList.remove('marquee-paused'));
    });
}

/* ========================================
   SECTION COLOR SHIFT
   Background subtly changes between sections
   ======================================== */
function initSectionColorShift() {
    const sections = document.querySelectorAll('.cs-section');
    if (sections.length === 0) return;

    // Dark-theme-safe backgrounds — subtle tinted dark tones
    const colorMap = {
        'story':      '#1a1916',   // warm charcoal
        'challenge':  '#1a1617',   // deep red-black
        'research':   '#191720',   // muted violet-black
        'solution':   '#161a18',   // dark forest
        'design':     '#16181c',   // navy-black
        'reflection': '#161a1b',   // teal-black
        'conclusion': '#161a1b'    // teal-black
    };

    const defaultBg = '#171718';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const color = colorMap[sectionId] || defaultBg;
                document.body.style.transition = 'background-color 1.2s ease';
                document.body.style.backgroundColor = color;
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

/* ========================================
   UNIQUE INTERACTIONS PER PROJECT
   ======================================== */
function initUniqueInteractions() {
    const projectType = document.body.dataset.project;

    switch (projectType) {
        case 'pulse': initPulseInteractions(); break;
        case 'relocate': initRelocateInteractions(); break;
        case 'resonate': initResonateInteractions(); break;
        case 'syf': initSyfInteractions(); break;
    }

    initFloatingElements();
}

function initPulseInteractions() {
    const heroMockup = document.querySelector('.hero-mockup');
    if (heroMockup) heroMockup.classList.add('pulse-glow');

    document.querySelectorAll('.tldr-metric, .outcome-card').forEach((m, i) => {
        m.style.animationDelay = `${i * 0.2}s`;
        m.classList.add('heartbeat-hover');
    });
}

function initRelocateInteractions() {
    document.querySelectorAll('.persona-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const emoji = card.querySelector('.persona-emoji');
            if (emoji) emoji.classList.add('spin-once');
        });
        card.addEventListener('mouseleave', () => {
            const emoji = card.querySelector('.persona-emoji');
            if (emoji) emoji.classList.remove('spin-once');
        });
    });

    document.querySelectorAll('.feature-card').forEach((card, i) => {
        card.style.setProperty('--drop-delay', `${i * 0.1}s`);
        card.classList.add('pin-drop');
    });
}

function initResonateInteractions() {
    document.querySelectorAll('.section-header').forEach(h => h.classList.add('sound-wave-border'));
    document.querySelectorAll('.feature-block').forEach(b => b.classList.add('note-float'));
}

function initSyfInteractions() {
    document.querySelectorAll('.flow-step').forEach((step, i) => {
        step.style.setProperty('--step-index', i);
        step.classList.add('growth-reveal');
    });

    document.querySelectorAll('.metric-card, .comparison-row:not(.header)').forEach((m, i) => {
        m.style.setProperty('--peak-delay', `${i * 0.15}s`);
        m.classList.add('peak-rise');
    });

    // Animate SYF metric rings on scroll
    const metricRings = document.querySelectorAll('.syf-metric-ring .ring-fill');
    if (metricRings.length > 0) {
        const ringObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const ring = entry.target;
                    const offset = ring.style.getPropertyValue('--ring-offset') || '42';
                    ring.style.strokeDashoffset = offset;
                    ringObserver.unobserve(ring);
                }
            });
        }, { threshold: 0.5 });
        metricRings.forEach(ring => ringObserver.observe(ring));
    }

    // Parallax the mountain silhouette on scroll
    const mountain = document.querySelector('.syf-mountain-silhouette');
    if (mountain) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroHeight = document.querySelector('.cs-hero')?.offsetHeight || window.innerHeight;
            if (scrollY < heroHeight * 1.5) {
                mountain.style.transform = `translateY(${scrollY * 0.1}px)`;
                mountain.style.opacity = Math.max(0, 0.08 - (scrollY / heroHeight) * 0.08);
            }
        }, { passive: true });
    }
}

function initFloatingElements() {
    const container = document.querySelector('.cs-decorative-elements');
    if (!container) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        container.querySelectorAll('.floating-element').forEach((el, i) => {
            const speed = 0.02 + (i * 0.01);
            const yPos = scrollY * speed;
            const rotation = scrollY * 0.02 * (i % 2 === 0 ? 1 : -1);
            el.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        });
    }, { passive: true });
}

/* ========================================
   V3 — TRUMPRX + YC INSPIRED INTERACTIONS
   ======================================== */

/* ========================================
   COMPARISON BARS
   TrumpRx-style animated fill bars
   ======================================== */
function initComparisonBars() {
    const bars = document.querySelectorAll('.comparison-bar-item');
    if (bars.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bar-animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
}

/* ========================================
   MARQUEE STRIPS
   YC-style infinite horizontal scroll
   ======================================== */
function initMarqueeStrips() {
    const strips = document.querySelectorAll('.marquee-strip');
    if (strips.length === 0) return;

    strips.forEach(strip => {
        const track = strip.querySelector('.marquee-track');
        if (!track) return;

        // Duplicate items for seamless loop
        const items = track.innerHTML;
        track.innerHTML = items + items;
    });
}

/* ========================================
   BEFORE/AFTER SLIDERS
   Drag-to-compare image slider
   ======================================== */
function initBeforeAfterSliders() {
    const sliders = document.querySelectorAll('.ba-slider');
    if (sliders.length === 0) return;

    sliders.forEach(slider => {
        const handle = slider.querySelector('.ba-slider-handle');
        const beforeEl = slider.querySelector('.ba-slider-before');
        if (!handle || !beforeEl) return;

        let isDragging = false;

        function updatePosition(clientX) {
            const rect = slider.getBoundingClientRect();
            let pct = ((clientX - rect.left) / rect.width) * 100;
            pct = Math.max(2, Math.min(98, pct));
            handle.style.left = `${pct}%`;
            beforeEl.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
        }

        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            updatePosition(e.clientX);
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) updatePosition(e.clientX);
        });

        document.addEventListener('mouseup', () => { isDragging = false; });

        // Touch support
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            updatePosition(e.touches[0].clientX);
        }, { passive: true });

        slider.addEventListener('touchmove', (e) => {
            if (isDragging) updatePosition(e.touches[0].clientX);
        }, { passive: true });

        slider.addEventListener('touchend', () => { isDragging = false; });
    });
}

/* ========================================
   BEFORE/AFTER TOGGLE BUTTONS
   YC "During / Now" state switch
   ======================================== */
function initBeforeAfterToggles() {
    const blocks = document.querySelectorAll('.before-after-block');
    if (blocks.length === 0) return;

    blocks.forEach(block => {
        const btns = block.querySelectorAll('.ba-toggle-btn');
        const states = block.querySelectorAll('.ba-state');

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.target; // 'before' or 'after'

                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                states.forEach(state => {
                    if (state.classList.contains(`ba-${target}`)) {
                        state.style.opacity = '1';
                        state.style.filter = 'none';
                        state.style.transform = 'scale(1)';
                        state.style.borderColor = 'var(--cs-primary, #60a5fa)';
                    } else {
                        state.style.opacity = '0.5';
                        state.style.filter = 'grayscale(0.5)';
                        state.style.transform = 'scale(0.97)';
                        state.style.borderColor = 'var(--color-border)';
                    }
                });
            });
        });
    });
}

/* ========================================
   METRIC BAR FILLS
   Background fill animation on stat cards
   ======================================== */
function initMetricBarFills() {
    const cards = document.querySelectorAll('.tldr-metric, .outcome-card');
    if (cards.length === 0) return;

    cards.forEach(card => {
        // Only add if card doesn't already have a bar-fill
        if (card.querySelector('.metric-bar-fill')) return;

        const fill = document.createElement('div');
        fill.className = 'metric-bar-fill';
        card.appendChild(fill);

        // Set a height based on the metric
        const value = card.querySelector('.metric-value, .outcome-value');
        if (value) {
            const text = value.textContent.trim();
            const num = parseFloat(text.replace(/[^0-9.]/g, ''));
            if (!isNaN(num)) {
                const height = Math.min(80, Math.max(20, num));
                card.style.setProperty('--fill-height', `${height}%`);
            }
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('metric-bar-active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    cards.forEach(card => observer.observe(card));
}

/* ========================================
   OUTCOME RINGS
   SVG circular progress for outcome cards
   ======================================== */
function initOutcomeRings() {
    const rings = document.querySelectorAll('.outcome-ring');
    if (rings.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.closest('.outcome-card')?.classList.add('ring-animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    rings.forEach(ring => observer.observe(ring));
}

/* ========================================
   HERO SCROLL CUE
   Fade out the scroll indicator on scroll
   ======================================== */
function initHeroScrollCue() {
    const cue = document.querySelector('.hero-scroll-cue');
    if (!cue) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            cue.classList.add('cue-hidden');
        } else {
            cue.classList.remove('cue-hidden');
        }
    }, { passive: true });
}

/* ========================================
   SAVINGS STRIKETHROUGH
   Animated draw-in strikethrough on values
   ======================================== */
function initSavingsStrikethrough() {
    const strikes = document.querySelectorAll('.savings-old.animated-strike');
    if (strikes.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('strike-active');
                }, 300);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    strikes.forEach(el => observer.observe(el));
}

/* ========================================
   MEASUREMENT TIMELINE
   Step-by-step reveal with connecting line
   ======================================== */
function initMeasurementTimeline() {
    const timelines = document.querySelectorAll('.measurement-timeline');
    if (timelines.length === 0) return;

    timelines.forEach(timeline => {
        const steps = timeline.querySelectorAll('.measurement-step');

        // Animate the timeline line and steps when the timeline enters view
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('timeline-animated');
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

        timelineObserver.observe(timeline);

        // Animate each step individually as it enters view
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('step-visible');
                    stepObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -5% 0px' });

        steps.forEach(step => stepObserver.observe(step));
    });

    // Also animate the result callout
    const results = document.querySelectorAll('.measurement-result');
    if (results.length > 0) {
        const resultObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Find the sibling timeline and ensure it's animated
                    const timeline = entry.target.previousElementSibling;
                    if (timeline && timeline.classList.contains('measurement-timeline')) {
                        timeline.classList.add('timeline-animated');
                    }
                    resultObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        results.forEach(result => resultObserver.observe(result));
    }
}
