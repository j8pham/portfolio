/* ========================================
   CASE STUDY INTERACTIONS
   Professional UX Portfolio
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all case study interactions
    initSmoothPageLoad();
    initCircularProgressNav();
    initSectionVisibility();
    initSmoothScrollLinks();
    initCounterAnimation();
    initLightbox();
    initUniqueInteractions();
});

/* ========================================
   SMOOTH PAGE LOAD ANIMATION
   ======================================== */
function initSmoothPageLoad() {
    // Add loaded class to body after a brief delay for smoother entrance
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
    
    // Get sections with IDs that match nav links
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
                index: index + 1,
                label: label ? label.textContent : sectionId
            });
        }
    });
    
    if (sections.length === 0) return;
    
    let currentSectionData = sections[0];
    
    // Calculate circumference for the progress ring
    const radius = 16; // matches SVG r="16"
    const circumference = radius * 2 * Math.PI;
    
    if (progressCircle) {
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;
    }
    
    // Update progress and active section on scroll
    function updateProgress() {
        const scrollTop = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Find current section
        let newCurrentSection = sections[0];
        const viewportMid = scrollTop + viewportHeight * 0.4;
        
        sections.forEach(section => {
            const sectionTop = section.element.offsetTop;
            const sectionBottom = sectionTop + section.element.offsetHeight;
            
            if (viewportMid >= sectionTop && viewportMid < sectionBottom) {
                newCurrentSection = section;
            }
        });
        
        // Calculate progress through current section
        const sectionTop = newCurrentSection.element.offsetTop;
        const sectionHeight = newCurrentSection.element.offsetHeight;
        const sectionScrollStart = sectionTop - viewportHeight * 0.3;
        const sectionScrollEnd = sectionTop + sectionHeight - viewportHeight * 0.7;
        const sectionProgress = Math.max(0, Math.min(1, 
            (scrollTop - sectionScrollStart) / (sectionScrollEnd - sectionScrollStart)
        ));
        
        // Update circular progress (section-specific)
        if (progressCircle) {
            const offset = circumference - (sectionProgress * circumference);
            progressCircle.style.strokeDashoffset = offset;
        }
        
        // Update section number
        if (progressText) {
            progressText.textContent = newCurrentSection.index;
        }
        
        // Update current section label
        if (navCurrentLabel) {
            navCurrentLabel.textContent = newCurrentSection.label;
        }
        
        // Update nav links active state
        if (newCurrentSection !== currentSectionData) {
            navLinks.forEach(link => link.classList.remove('active'));
            newCurrentSection.link.classList.add('active');
            currentSectionData = newCurrentSection;
        }
    }
    
    // Show/hide nav based on scroll position
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
    
    // Toggle menu expansion
    if (navCurrentSection) {
        navCurrentSection.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('expanded');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            nav.classList.remove('expanded');
        }
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('expanded');
        });
    });
    
    // Close menu on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        updateProgress();
        updateNavVisibility();
        
        // Close menu after scrolling
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            nav.classList.remove('expanded');
        }, 150);
    }, { passive: true });
    
    // Initial call
    updateProgress();
    updateNavVisibility();
}

/* ========================================
   SECTION VISIBILITY ANIMATIONS
   ======================================== */
function initSectionVisibility() {
    const sections = document.querySelectorAll('.cs-section');
    
    if (sections.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -5% 0px',
        threshold: 0.05
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger animate children
                const animatedChildren = entry.target.querySelectorAll('.animate-on-scroll');
                animatedChildren.forEach((child, index) => {
                    child.style.animationDelay = `${index * 0.1}s`;
                    child.classList.add('animated');
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

/* ========================================
   SMOOTH SCROLL FOR NAV LINKS
   ======================================== */
function initSmoothScrollLinks() {
    const navLinks = document.querySelectorAll('.nav-section-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 100;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   COUNTER ANIMATION FOR METRICS
   ======================================== */
function initCounterAnimation() {
    const metrics = document.querySelectorAll('.metric-value, .outcome-value, .stat-value');
    
    if (metrics.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);
    
    metrics.forEach(metric => {
        counterObserver.observe(metric);
    });
}

function animateCounter(element) {
    const text = element.textContent.trim();
    
    // Check if this is a range value (e.g., "20-25%") - skip animation for ranges
    const isRange = /\d+\s*-\s*\d+/.test(text);
    if (isRange) return; // Don't animate range values
    
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    // Only treat as minus if it starts with minus (not a range separator)
    const hasMinus = text.startsWith('-');
    const hasSlash = text.includes('/');
    const hasS = text.includes('s') && !text.includes(' ');
    
    // Extract numeric value
    let numericValue = parseFloat(text.replace(/[^0-9.-]/g, ''));
    if (isNaN(numericValue)) return;
    
    const startValue = 0;
    const duration = 1200;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Smooth easing
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        let currentValue = startValue + (numericValue - startValue) * easeOutQuart;
        
        // Format output
        let formattedValue;
        if (hasSlash) {
            formattedValue = currentValue.toFixed(1) + '/5';
        } else if (Number.isInteger(numericValue)) {
            formattedValue = Math.round(currentValue).toString();
        } else {
            formattedValue = currentValue.toFixed(1);
        }
        
        if (hasPlus && numericValue > 0) formattedValue = '+' + formattedValue;
        if (hasMinus && !formattedValue.startsWith('-')) formattedValue = '-' + formattedValue;
        if (hasPercent) formattedValue += '%';
        if (hasS) formattedValue += 's';
        
        element.textContent = formattedValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

/* ========================================
   IMAGE LIGHTBOX
   ======================================== */
function initLightbox() {
    const images = document.querySelectorAll('.cs-visual-placeholder img, .screen-visual img, .phase-image img, .feature-visual img, .flow-visual img, .design-system-image img');
    
    if (images.length === 0) return;
    
    // Create lightbox element
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
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxBackdrop = lightbox.querySelector('.lightbox-backdrop');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    lightboxBackdrop.addEventListener('click', closeLightbox);
    lightboxClose.addEventListener('click', closeLightbox);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/* ========================================
   UNIQUE INTERACTIONS PER PROJECT
   ======================================== */
function initUniqueInteractions() {
    const projectType = document.body.dataset.project;
    
    switch(projectType) {
        case 'pulse':
            initPulseInteractions();
            break;
        case 'relocate':
            initRelocateInteractions();
            break;
        case 'resonate':
            initResonateInteractions();
            break;
        case 'syf':
            initSyfInteractions();
            break;
    }
    
    // Init floating elements for all projects
    initFloatingElements();
}

/* Pulse - Hospital/Medical themed interactions */
function initPulseInteractions() {
    // Add pulse animation to key elements
    const heroMockup = document.querySelector('.hero-mockup');
    if (heroMockup) {
        heroMockup.classList.add('pulse-glow');
    }
    
    // Add heartbeat effect to metrics
    const metrics = document.querySelectorAll('.tldr-metric, .outcome-card');
    metrics.forEach((metric, i) => {
        metric.style.animationDelay = `${i * 0.2}s`;
        metric.classList.add('heartbeat-hover');
    });
}

/* Relocate - Map/Discovery themed interactions */
function initRelocateInteractions() {
    // Add compass spin effect on persona cards
    const personaCards = document.querySelectorAll('.persona-card');
    personaCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const emoji = card.querySelector('.persona-emoji');
            if (emoji) emoji.classList.add('spin-once');
        });
        card.addEventListener('mouseleave', () => {
            const emoji = card.querySelector('.persona-emoji');
            if (emoji) emoji.classList.remove('spin-once');
        });
    });
    
    // Add map pin drop effect on feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, i) => {
        card.style.setProperty('--drop-delay', `${i * 0.1}s`);
        card.classList.add('pin-drop');
    });
}

/* Resonate - Music/Audio themed interactions */
function initResonateInteractions() {
    // Add sound wave effect on section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('sound-wave-border');
    });
    
    // Add note float effect on feature blocks
    const featureBlocks = document.querySelectorAll('.feature-block');
    featureBlocks.forEach(block => {
        block.classList.add('note-float');
    });
}

/* SYF - Financial/Growth themed interactions */
function initSyfInteractions() {
    // Add growth chart effect
    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach((step, i) => {
        step.style.setProperty('--step-index', i);
        step.classList.add('growth-reveal');
    });
    
    // Add mountain peak effect on metrics
    const metrics = document.querySelectorAll('.metric-card, .comparison-row:not(.header)');
    metrics.forEach((metric, i) => {
        metric.style.setProperty('--peak-delay', `${i * 0.15}s`);
        metric.classList.add('peak-rise');
    });
}

/* Floating decorative elements */
function initFloatingElements() {
    const decorativeContainer = document.querySelector('.cs-decorative-elements');
    if (!decorativeContainer) return;
    
    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const elements = decorativeContainer.querySelectorAll('.floating-element');
        
        elements.forEach((el, i) => {
            const speed = 0.02 + (i * 0.01);
            const yPos = scrollY * speed;
            const rotation = scrollY * 0.02 * (i % 2 === 0 ? 1 : -1);
            el.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        });
    }, { passive: true });
}

/* ========================================
   UTILITY: Debounce function
   ======================================== */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ========================================
   UTILITY: Throttle function
   ======================================== */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
