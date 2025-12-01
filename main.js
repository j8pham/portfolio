// Navbar scroll behavior
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link, .nav-logo');

let lastScrollTop = 0;
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ========================================
// Fun Cat Navigation
// ========================================
function initCatNavigation() {
    const catButton = document.getElementById('catButton');
    const catMenu = document.getElementById('catMenu');
    const catBackdrop = document.getElementById('catBackdrop');
    
    if (!catButton || !catMenu) return;
    
    let isMenuOpen = false;
    
    // Toggle menu
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        catButton.classList.toggle('awake', isMenuOpen);
        catMenu.classList.toggle('open', isMenuOpen);
        catBackdrop.classList.toggle('visible', isMenuOpen);
        catButton.setAttribute('aria-expanded', isMenuOpen);
        
        // Add a little shake animation when opening
        if (isMenuOpen) {
            catButton.style.animation = 'none';
            catButton.offsetHeight; // Trigger reflow
            catButton.style.animation = 'cat-wake 0.4s ease-out';
        }
    }
    
    // Close menu
    function closeMenu() {
        if (!isMenuOpen) return;
        isMenuOpen = false;
        
        catButton.classList.remove('awake');
        catMenu.classList.remove('open');
        catBackdrop.classList.remove('visible');
        catButton.setAttribute('aria-expanded', 'false');
    }
    
    // Event listeners
    catButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
    
    catBackdrop.addEventListener('click', closeMenu);
    
    // Close on escape and handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
            catButton.focus(); // Return focus to button
        }
        
        // Tab trap when menu is open
        if (isMenuOpen && e.key === 'Tab') {
            const focusableElements = catMenu.querySelectorAll('.cat-menu-item');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                catButton.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                catButton.focus();
            } else if (!e.shiftKey && document.activeElement === catButton) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
    
    // Close when clicking menu items
    const menuItems = catMenu.querySelectorAll('.cat-menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Small delay for visual feedback
            setTimeout(closeMenu, 100);
        });
    });
    
    // Cat eye tracking (fun feature!)
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isMenuOpen) {
            const rect = catButton.getBoundingClientRect();
            const catCenterX = rect.left + rect.width / 2;
            const catCenterY = rect.top + rect.height / 2;
            
            // Calculate angle to mouse
            const deltaX = mouseX - catCenterX;
            const deltaY = mouseY - catCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            // If mouse is close, show subtle attention
            if (distance < 200) {
                const intensity = 1 - (distance / 200);
                catButton.style.setProperty('--attention', intensity);
            }
        }
    });
    
    // Add wake animation keyframes
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes cat-wake {
            0% { transform: scale(1) rotate(0deg); }
            20% { transform: scale(1.1) rotate(-5deg); }
            40% { transform: scale(1.05) rotate(5deg); }
            60% { transform: scale(1.1) rotate(-3deg); }
            80% { transform: scale(1.05) rotate(2deg); }
            100% { transform: scale(1.1) rotate(0deg); }
        }
    `;
    document.head.appendChild(styleSheet);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatNavigation);
} else {
    initCatNavigation();
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove all active states first
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Check each link to see if it matches current page
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Skip external links (mailto, http, etc.)
        if (href && (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.endsWith('.pdf'))) {
            return;
        }
        
        // Check if current page matches the link
        if (currentPage === 'index.html' || currentPage === '') {
            // On home page
            if (href === 'index.html' || href === '' || href === '/') {
                if (link.classList.contains('nav-logo')) {
                    link.classList.add('active');
                }
            }
        } else {
            // On other pages (about.html, case-study.html, etc.)
            if (href) {
                const hrefPage = href.split('/').pop();
                if (hrefPage === currentPage || currentPage === hrefPage) {
                    link.classList.add('active');
                }
            }
        }
    });
    
    // On index page at top, make logo active
    if ((currentPage === 'index.html' || currentPage === '') && window.pageYOffset < 100) {
        const logo = document.querySelector('.nav-logo');
        if (logo) {
            logo.classList.add('active');
        }
    }
}

window.addEventListener('scroll', setActiveNavLink);
window.addEventListener('load', setActiveNavLink);

// Smooth scroll for anchor links (only if on same page)
// Respects reduced motion preference
if (window.location.pathname.split('/').pop() === 'index.html' || window.location.pathname.split('/').pop() === '') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
                // Set focus to target for keyboard users
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    });
}

// Learn more scroll to work section
const learnMore = document.querySelector('.learn-more');
if (learnMore) {
    learnMore.addEventListener('click', function() {
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Scroll-based project highlighting
function initProjectHighlighting() {
    // Support both old and new card classes
    const projectCards = document.querySelectorAll('.project-card:not(.coming-soon), .project-card-full:not(.coming-soon)');
    
    if (projectCards.length === 0) return;
    
    // Function to calculate which project is most centered in viewport
    function updateActiveProject() {
        const viewportCenter = window.innerHeight / 2;
        let closestCard = null;
        let closestDistance = Infinity;
        
        projectCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardTop = rect.top;
            const cardBottom = rect.bottom;
            const cardCenter = cardTop + (cardBottom - cardTop) / 2;
            
            // Only consider cards that are at least partially visible
            if (cardBottom > 0 && cardTop < window.innerHeight) {
                const distance = Math.abs(viewportCenter - cardCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = card;
                }
            }
        });
        
        // Remove in-view class from all cards
        projectCards.forEach(card => {
            card.classList.remove('in-view');
        });
        
        // Add in-view class to closest card
        if (closestCard) {
            closestCard.classList.add('in-view');
        }
    }
    
    // Update on scroll for smooth transitions
    let ticking = false;
    function handleScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveProject();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial update with slight delay to ensure layout is complete
    setTimeout(() => {
        updateActiveProject();
    }, 100);
}

// Initialize project highlighting when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectHighlighting);
} else {
    initProjectHighlighting();
}

function initQuoteSwitchers() {
    const switchers = document.querySelectorAll('[data-quote-switcher]');
    if (!switchers.length) return;

    switchers.forEach(switcher => {
        const controls = switcher.querySelectorAll('.quote-control');
        const panels = switcher.querySelectorAll('.quote-panel');

        controls.forEach(control => {
            control.addEventListener('click', () => {
                if (control.classList.contains('active')) return;

                controls.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });

                panels.forEach(panel => {
                    panel.classList.remove('active');
                    panel.setAttribute('hidden', 'true');
                });

                control.classList.add('active');
                control.setAttribute('aria-selected', 'true');

                const targetId = control.getAttribute('data-quote-target');
                const targetPanel = switcher.querySelector(`#${targetId}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    targetPanel.removeAttribute('hidden');
                }
            });
        });
    });
}

function initPersonaSwitchers() {
    const personaSwitchers = document.querySelectorAll('[data-persona-switcher]');
    if (!personaSwitchers.length) return;

    personaSwitchers.forEach(switcher => {
        const controls = switcher.querySelectorAll('.persona-control');
        const panels = switcher.querySelectorAll('.persona-panel');

        controls.forEach(control => {
            control.addEventListener('click', () => {
                if (control.classList.contains('active')) return;

                controls.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });

                panels.forEach(panel => {
                    panel.classList.remove('active');
                    panel.setAttribute('hidden', 'true');
                });

                control.classList.add('active');
                control.setAttribute('aria-selected', 'true');

                const targetId = control.getAttribute('data-persona-target');
                const targetPanel = switcher.querySelector(`#${targetId}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    targetPanel.removeAttribute('hidden');
                }
            });
        });
    });
}

function initTabSwitchers() {
    const tabSwitchers = document.querySelectorAll('[data-tab-switcher]');
    if (!tabSwitchers.length) return;

    tabSwitchers.forEach(switcher => {
        const controls = switcher.querySelectorAll('.tab-control');
        const panels = switcher.querySelectorAll('.tab-panel');

        controls.forEach(control => {
            control.addEventListener('click', () => {
                if (control.classList.contains('active')) return;

                controls.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });

                panels.forEach(panel => {
                    panel.classList.remove('active');
                    panel.setAttribute('hidden', 'true');
                });

                control.classList.add('active');
                control.setAttribute('aria-selected', 'true');

                const targetId = control.getAttribute('data-tab-target');
                const targetPanel = switcher.querySelector(`#${targetId}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    targetPanel.removeAttribute('hidden');
                }
            });
        });
    });
}

function initInteractiveSections() {
    initQuoteSwitchers();
    initPersonaSwitchers();
    initTabSwitchers();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInteractiveSections);
} else {
    initInteractiveSections();
}

// Fade-in scroll animations
function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFadeInAnimations);
} else {
    initFadeInAnimations();
}

