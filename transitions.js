// ========================================
// V2 Page Transition System
// Smooth fade + subtle slide, works across all pages
// ========================================

(function () {
    'use strict';

    const TRANSITION_DURATION = 420; // ms
    const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

    // Inject transition styles once
    // NOTE: Apply transition to .page-transition-wrap (content) instead of body.
    // Transform on body would create a new containing block and break position:fixed on the navbar.
    const style = document.createElement('style');
    style.textContent = `
        .page-transition-wrap.page-entering {
            opacity: 0;
            transform: translateY(10px);
        }
        .page-transition-wrap.page-ready {
            opacity: 1;
            transform: translateY(0);
            transition: opacity ${TRANSITION_DURATION}ms ${EASE},
                        transform ${TRANSITION_DURATION}ms ${EASE};
        }
        .page-transition-wrap.page-leaving {
            opacity: 0;
            transform: translateY(-8px);
            transition: opacity ${TRANSITION_DURATION * 0.7}ms ease-in,
                        transform ${TRANSITION_DURATION * 0.7}ms ease-in;
        }

        @media (prefers-reduced-motion: reduce) {
            .page-transition-wrap.page-entering,
            .page-transition-wrap.page-ready,
            .page-transition-wrap.page-leaving {
                transform: none !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);

    function getTransitionWrap() {
        return document.querySelector('.page-transition-wrap');
    }

    // On load: start in entering state, then reveal
    function onReady() {
        const wrap = getTransitionWrap();
        if (wrap) {
            wrap.classList.add('page-entering');
            void wrap.offsetHeight;
            requestAnimationFrame(() => {
                wrap.classList.remove('page-entering');
                wrap.classList.add('page-ready');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onReady);
    } else {
        onReady();
    }

    // Intercept internal navigation links for a graceful exit
    function isInternalLink(href) {
        if (!href) return false;
        if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#') || href.endsWith('.pdf')) return false;
        // Relative HTML pages
        return href.endsWith('.html') || href === '/' || href === '';
    }

    document.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!isInternalLink(href)) return;

        // Don't intercept if modifier keys are held (new tab, etc.)
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

        e.preventDefault();

        // Exit transition
        const wrap = getTransitionWrap();
        if (wrap) {
            wrap.classList.remove('page-ready');
            wrap.classList.add('page-leaving');
        }

        // Navigate after animation completes
        setTimeout(() => {
            window.location.href = href;
        }, TRANSITION_DURATION * 0.7);
    });

    // Smooth scroll behavior (respects reduced motion automatically via CSS)
    document.documentElement.style.scrollBehavior = 'smooth';
})();
