// About Page Interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // JOURNEY TIMELINE - SCROLL, HOVER, CLICK HIGHLIGHTING
    // ========================================
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
        
        // Function to check which timeline item is in view
        function updateActiveTimeline() {
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.6; // Trigger when item is 60% down the viewport
            
            timelineItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const itemTop = rect.top;
                const itemBottom = rect.bottom;
                
                // Check if item is in the trigger zone
                if (itemTop < triggerPoint && itemBottom > windowHeight * 0.2) {
                    // Only add active if not manually clicked
                    if (!item.classList.contains('clicked')) {
                        item.classList.add('active');
                    }
                } else {
                    // Remove active but keep clicked state
                    if (!item.classList.contains('clicked')) {
                        item.classList.remove('active');
                    }
                }
            });
        }
        
        // Scroll event listener with requestAnimationFrame for smooth performance
        let ticking = false;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateActiveTimeline();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
        
        // Initial check
        updateActiveTimeline();
        
        // Click to manually highlight/lock a timeline item
        timelineItems.forEach((item, index) => {
            item.addEventListener('click', function(e) {
                // Remove clicked state from all items
                timelineItems.forEach(ti => ti.classList.remove('clicked'));
                
                // Toggle clicked state on this item
                const wasActive = this.classList.contains('clicked');
                
                if (!wasActive) {
                    this.classList.add('clicked');
                    this.classList.add('active');
                    
                    // Smooth scroll to bring item into view
                    this.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                } else {
                    this.classList.remove('clicked');
                }
            });
            
            // Hover effects (in addition to CSS)
            item.addEventListener('mouseenter', function() {
                if (!this.classList.contains('clicked')) {
                    this.classList.add('hover-active');
                }
            });
            
            item.addEventListener('mouseleave', function() {
                this.classList.remove('hover-active');
            });
        });
        
        // Remove clicked state when scrolling away significantly
        let clickedTicking = false;
        window.addEventListener('scroll', function() {
            if (!clickedTicking) {
                window.requestAnimationFrame(function() {
                    timelineItems.forEach(item => {
                        if (item.classList.contains('clicked')) {
                            const rect = item.getBoundingClientRect();
                            const windowHeight = window.innerHeight;
                            
                            // If item is completely out of view, remove clicked state
                            if (rect.bottom < 0 || rect.top > windowHeight) {
                                item.classList.remove('clicked');
                            }
                        }
                    });
                    clickedTicking = false;
                });
                clickedTicking = true;
            }
        }, { passive: true });
    }
    
    
    // ========================================
    // UNIFIED FADE IN ANIMATION FOR ALL SECTIONS
    // ========================================
    
    const fadeElements = document.querySelectorAll('.skill-category, .work-item, .value-item, .principle-card, .hobby-item, .experience-item, .skills-list');
    
    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        fadeElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transition = `opacity 0.6s ease ${index * 0.05}s`;
            fadeObserver.observe(element);
        });
    }
    
    
    // ========================================
    // PLAYING CARDS - TOUCH SUPPORT FOR MOBILE
    // ========================================
    
    const playingCardsContainer = document.querySelector('.playing-cards');
    
    if (playingCardsContainer) {
        // On mobile, toggle expanded state on tap
        if (window.innerWidth <= 767) {
            playingCardsContainer.addEventListener('click', function(e) {
                this.classList.toggle('mobile-expanded');
            });
        }
    }
    
    
    // ========================================
    // SECTION CONTENT FADE IN
    // ========================================
    
    const contentElements = document.querySelectorAll('.intro-paragraph, .fun-list, .intro-cta, .section-heading, .section-description');
    
    if (contentElements.length > 0 && 'IntersectionObserver' in window) {
        const contentObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    contentObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px'
        });
        
        contentElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transition = `opacity 0.6s ease ${index * 0.05}s`;
            contentObserver.observe(element);
        });
    }
    
    
    console.log('About page interactions initialized! ✨');
});

