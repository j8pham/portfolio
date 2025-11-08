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
if (window.location.pathname.split('/').pop() === 'index.html' || window.location.pathname.split('/').pop() === '') {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
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
    const projectCards = document.querySelectorAll('.project-card:not(.coming-soon)');
    
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

