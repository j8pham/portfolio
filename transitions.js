// Page transition system
document.addEventListener('DOMContentLoaded', () => {
    // Fade in animation on page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 10);

    // Intercept all internal navigation links
    const links = document.querySelectorAll('a[href^="index.html"], a[href^="about.html"], a[href^="case-study.html"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's an anchor link or external link
            if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#') || href.endsWith('.pdf')) {
                return;
            }
            
            e.preventDefault();
            
            // Fade out current page
            document.body.style.opacity = '0';
            
            // Navigate after fade out
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

