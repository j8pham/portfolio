// About Page V2 Interactions - Fun & Interactive

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // TILT CARD EFFECT - 3D HOVER
    // ========================================
    
    function initTiltCards() {
        const tiltCards = document.querySelectorAll('[data-tilt]');
        
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
                
                // Move shine effect
                const shine = card.querySelector('.card-shine');
                if (shine) {
                    const shineX = (x / rect.width) * 100;
                    const shineY = (y / rect.height) * 100;
                    shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`;
                }
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
                const shine = card.querySelector('.card-shine');
                if (shine) {
                    shine.style.background = 'transparent';
                }
            });
        });
    }
    
    initTiltCards();
    
    
    // ========================================
    // TIMELINE SCROLL ANIMATION
    // ========================================
    
    function initTimelineAnimation() {
        const timelineProgress = document.getElementById('timelineProgress');
        const timelineContainer = document.querySelector('.timeline-container');
        
        if (!timelineContainer || !timelineProgress) return;
        
        // Timeline progress line animation on scroll
        function updateTimeline() {
            const rect = timelineContainer.getBoundingClientRect();
            const containerTop = rect.top;
            const containerHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the timeline is visible
            let progress = 0;
            if (containerTop < windowHeight * 0.5) {
                progress = Math.min(1, (windowHeight * 0.5 - containerTop) / containerHeight);
            }
            
            timelineProgress.style.height = `${progress * 100}%`;
        }
        
        window.addEventListener('scroll', updateTimeline, { passive: true });
        updateTimeline(); // Initial call
    }
    
    initTimelineAnimation();
    
    
    // ========================================
    // PRINCIPLE CARDS - TOUCH & KEYBOARD SUPPORT
    // ========================================
    
    function initPrincipleCards() {
        const cards = document.querySelectorAll('.principle-card.interactive-card');
        
        cards.forEach(card => {
            // Click/tap handler for all devices
            card.addEventListener('click', function(e) {
                // Toggle this card
                this.classList.toggle('flipped');
                
                // On mobile, close other cards when one is opened
                if (window.innerWidth <= 768) {
                    cards.forEach(c => {
                        if (c !== card) c.classList.remove('flipped');
                    });
                }
            });
            
            // Keyboard support - Enter and Space keys
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.classList.toggle('flipped');
                    
                    // On mobile, close other cards when one is opened
                    if (window.innerWidth <= 768) {
                        cards.forEach(c => {
                            if (c !== card) c.classList.remove('flipped');
                        });
                    }
                }
            });
            
            // On desktop, remove flip on mouse leave
            card.addEventListener('mouseleave', function() {
                if (window.innerWidth > 768) {
                    // Add a small delay before removing flip
                    setTimeout(() => {
                        if (!this.matches(':hover')) {
                            this.classList.remove('flipped');
                        }
                    }, 200);
                }
            });
        });
    }
    
    initPrincipleCards();
    
    
    // ========================================
    // PARALLAX EFFECT FOR HERO
    // ========================================
    
    function initParallax() {
        const polaroidStack = document.querySelector('.polaroid-stack');
        const catPeek = document.querySelector('.cat-peek');
        
        if (!polaroidStack) return;
        
        function updateParallax() {
            const scrollY = window.pageYOffset;
            const heroSection = document.querySelector('.about-hero-section');
            
            if (!heroSection) return;
            
            const heroRect = heroSection.getBoundingClientRect();
            
            // Only apply parallax when hero is in view
            if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
                const parallaxOffset = scrollY * 0.1;
                polaroidStack.style.transform = `translateY(${parallaxOffset}px)`;
                
                if (catPeek) {
                    catPeek.style.transform = `translateY(${parallaxOffset * 0.5}px)`;
                }
            }
        }
        
        window.addEventListener('scroll', updateParallax, { passive: true });
    }
    
    initParallax();
    
    
    // ========================================
    // POLAROID TILT EFFECT
    // ========================================
    
    function initPolaroidTilt() {
        const mainCard = document.querySelector('.polaroid-card.main-card');
        const polaroidStack = document.querySelector('.polaroid-stack');
        
        if (!mainCard || !polaroidStack) return;
        
        polaroidStack.addEventListener('mousemove', function(e) {
            const rect = polaroidStack.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            mainCard.style.transform = `rotate(-2deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        polaroidStack.addEventListener('mouseleave', function() {
            mainCard.style.transform = 'rotate(-2deg)';
        });
    }
    
    initPolaroidTilt();
    
    
    // ========================================
    // CAT EASTER EGG - CLICK INTERACTION
    // ========================================
    
    function initCatEasterEgg() {
        const catPeek = document.querySelector('.cat-peek');
        
        if (!catPeek) return;
        
        let clickCount = 0;
        const messages = ['meow!', 'purr~', 'zzz...', '*stretch*', 'nya~', '(=^･ω･^=)'];
        
        catPeek.addEventListener('click', function(e) {
            e.preventDefault();
            clickCount++;
            
            // Bounce animation
            const img = this.querySelector('img');
            img.style.transform = 'translateY(-15px) rotate(10deg) scale(1.15)';
            setTimeout(() => {
                img.style.transform = '';
            }, 400);
            
            // Show message
            const msgIndex = clickCount <= messages.length ? clickCount - 1 : Math.floor(Math.random() * messages.length);
            showCatMessage(messages[msgIndex]);
        });
        
        function showCatMessage(text) {
            // Remove existing message
            const existing = document.querySelector('.cat-message');
            if (existing) existing.remove();
            
            const message = document.createElement('div');
            message.className = 'cat-message';
            message.textContent = text;
            message.style.cssText = `
                position: absolute;
                bottom: calc(100% + 5px);
                left: 50%;
                transform: translateX(-50%);
                background: rgba(8, 8, 10, 0.95);
                color: var(--color-accent);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-size: 0.875rem;
                font-weight: 500;
                white-space: nowrap;
                border: 1px solid var(--color-border);
                animation: catMessagePop 0.3s ease-out;
                z-index: 20;
                backdrop-filter: blur(10px);
            `;
            catPeek.appendChild(message);
            
            // Remove after 2 seconds
            setTimeout(() => {
                message.style.opacity = '0';
                message.style.transform = 'translateX(-50%) translateY(-10px)';
                message.style.transition = 'all 0.3s ease';
                setTimeout(() => message.remove(), 300);
            }, 2000);
        }
        
        // Add animation keyframes
        if (!document.querySelector('#cat-message-styles')) {
            const style = document.createElement('style');
            style.id = 'cat-message-styles';
            style.textContent = `
                @keyframes catMessagePop {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(10px) scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0) scale(1);
                    }
                }
                .cat-peek img {
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    initCatEasterEgg();
    
    
    // ========================================
    // HOBBY CARDS - MAGNETIC EFFECT
    // ========================================
    
    function initMagneticEffect() {
        const hobbyItems = document.querySelectorAll('.hobby-item');
        
        hobbyItems.forEach(item => {
            item.addEventListener('mousemove', function(e) {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Subtle magnetic pull effect on content
                const title = item.querySelector('.hobby-title');
                if (title) {
                    title.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const title = item.querySelector('.hobby-title');
                if (title) {
                    title.style.transform = '';
                }
            });
        });
    }
    
    initMagneticEffect();
    
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    
    function initSmoothScroll() {
        // Respect reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: prefersReducedMotion ? 'auto' : 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    initSmoothScroll();
    
    
    // ========================================
    // SKILL TAGS HOVER EFFECTS
    // ========================================
    
    function initSkillTags() {
        const skillTags = document.querySelectorAll('.skill-tag');
        
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                // Subtle scale and lift on hover
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
    
    initSkillTags();
    
    
    // ========================================
    // SCROLL REVEAL ANIMATIONS (OPTIONAL)
    // ========================================
    
    function initScrollReveal() {
        const sections = document.querySelectorAll('section');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            // Set initial state
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            observer.observe(section);
        });
    }
    
    // Only enable scroll reveal on desktop
    if (window.innerWidth > 768) {
        initScrollReveal();
    }
});
