// About Page Interactions - Fun & Interactive

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // ANIMATED BACKGROUND PARTICLES
    // ========================================
    
    function initBackgroundParticles() {
        const canvas = document.getElementById('bgCanvas');
        if (!canvas) return;
        
        // Create floating particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'bg-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(96, 165, 250, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 10 + 15}s linear infinite;
                animation-delay: ${Math.random() * -20}s;
                pointer-events: none;
            `;
            canvas.appendChild(particle);
        }
        
        // Add keyframes for particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100 + 50}px, -${Math.random() * 200 + 100}px) scale(0.5);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    initBackgroundParticles();
    
    
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
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineProgress = document.getElementById('timelineProgress');
        const timelineContainer = document.querySelector('.timeline-container');
        
        if (!timelineItems.length || !timelineContainer) return;
        
        // Make all items visible immediately
        timelineItems.forEach((item, index) => {
            item.classList.add('visible');
            item.style.transitionDelay = `${index * 0.15}s`;
        });
        
        // Timeline progress line animation on scroll
        if (timelineProgress) {
            window.addEventListener('scroll', function() {
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
            }, { passive: true });
        }
    }
    
    initTimelineAnimation();
    
    
    // ========================================
    // SKILLS CLOUD ANIMATION
    // ========================================
    
    function initSkillsAnimation() {
        const skillCategories = document.querySelectorAll('.skill-category');
        
        if (!skillCategories.length) return;
        
        // Make all categories visible immediately
        skillCategories.forEach(category => {
            category.classList.add('visible');
        });
        
        // Skill tag hover effects
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            // Make tags visible
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
            
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    initSkillsAnimation();
    
    
    // ========================================
    // PRINCIPLE CARDS - TOUCH & KEYBOARD SUPPORT
    // ========================================
    
    function initPrincipleCards() {
        const cards = document.querySelectorAll('.principle-card.interactive-card');
        
        cards.forEach(card => {
            // Click/tap handler for all devices
            card.addEventListener('click', function(e) {
                // Remove flipped state from other cards
                cards.forEach(c => {
                    if (c !== card) c.classList.remove('flipped');
                });
                // Toggle this card
                this.classList.toggle('flipped');
            });
            
            // Keyboard support - Enter and Space keys
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Remove flipped state from other cards
                    cards.forEach(c => {
                        if (c !== card) c.classList.remove('flipped');
                    });
                    // Toggle this card
                    this.classList.toggle('flipped');
                }
            });
        });
        
        // Add touch-specific styles
        const style = document.createElement('style');
        style.textContent = `
            .principle-card.interactive-card .card-front,
            .principle-card.interactive-card .card-back {
                transition: transform 0.6s var(--ease-out-expo);
            }
            .principle-card.interactive-card.flipped .card-front {
                transform: rotateY(-180deg);
            }
            .principle-card.interactive-card.flipped .card-back {
                transform: rotateY(0deg);
            }
            @media (hover: none) {
                .principle-card.interactive-card:hover .card-front {
                    transform: none;
                }
                .principle-card.interactive-card:hover .card-back {
                    transform: rotateY(180deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    initPrincipleCards();
    
    
    // ========================================
    // SCROLL REVEAL FOR SECTIONS
    // ========================================
    
    // Sections are visible by default - just add subtle entrance animations via CSS
    // No JavaScript scroll reveal that hides content
    
    
    // ========================================
    // SOUND WAVE ANIMATION SYNC
    // ========================================
    
    function initSoundWaves() {
        const waves = document.querySelectorAll('.sound-waves .wave');
        
        if (!waves.length) return;
        
        // Randomize wave animations for more organic feel
        waves.forEach((wave, index) => {
            const duration = 0.8 + Math.random() * 0.8; // 0.8-1.6s
            const delay = index * 0.08;
            wave.style.animationDuration = `${duration}s`;
            wave.style.animationDelay = `${delay}s`;
        });
    }
    
    initSoundWaves();
    
    
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
                    // Set focus to target for keyboard users
                    target.setAttribute('tabindex', '-1');
                    target.focus();
                }
            });
        });
    }
    
    initSmoothScroll();
    
    
    // ========================================
    // PARALLAX EFFECT FOR HERO
    // ========================================
    
    function initParallax() {
        const polaroidStack = document.querySelector('.polaroid-stack');
        const catPeek = document.querySelector('.cat-peek');
        
        if (!polaroidStack) return;
        
        window.addEventListener('scroll', function() {
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
        }, { passive: true });
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
        const style = document.createElement('style');
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
                transition: transform 0.4s var(--ease-out-expo);
            }
        `;
        document.head.appendChild(style);
    }
    
    initCatEasterEgg();
    
    
    // ========================================
    // HOBBY CARDS - MAGNETIC EFFECT
    // ========================================
    
    function initMagneticEffect() {
        const hobbyItems = document.querySelectorAll('.hobby-item');
        
        hobbyItems.forEach(item => {
            const overlay = item.querySelector('.hobby-overlay');
            
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
    
    
    console.log('✨ About page interactions initialized!');
    console.log('🐱 Psst... try clicking the cat!');
});
