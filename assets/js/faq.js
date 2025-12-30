/**
 * FAQ Accordion Functionality
 * Manages expandable/collapsible FAQ items with accessibility support
 */

(function() {
    'use strict';

    /**
     * Initialize FAQ accordion
     */
    function initFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        if (!faqQuestions.length) {
            console.warn('FAQ: No FAQ questions found');
            return;
        }

        faqQuestions.forEach((button, index) => {
            // Add unique IDs for ARIA
            const answerId = `faq-answer-${index}`;
            const answer = button.nextElementSibling;
            
            if (answer && answer.classList.contains('faq-answer')) {
                answer.id = answerId;
                button.setAttribute('aria-controls', answerId);
            }

            // Click handler
            button.addEventListener('click', function() {
                toggleFAQ(this);
            });

            // Keyboard support (Enter and Space)
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(this);
                }
            });
        });

        console.log(`FAQ: Initialized ${faqQuestions.length} questions`);
    }

    /**
     * Toggle FAQ item open/closed
     * @param {HTMLElement} button - The clicked FAQ question button
     */
    function toggleFAQ(button) {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        const answer = button.nextElementSibling;

        if (!answer) return;

        // Close all other FAQs (optional - comment out for multiple open)
        // closeAllFAQs(button);

        // Toggle current FAQ
        button.setAttribute('aria-expanded', !expanded);
        answer.hidden = expanded;

        // Smooth scroll if opening and item is not fully visible
        if (!expanded) {
            setTimeout(() => {
                scrollToFAQIfNeeded(button);
            }, 100);
        }

        // Track in Google Analytics (if available)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'faq_interaction', {
                'event_category': 'FAQ',
                'event_label': button.querySelector('span').textContent.trim(),
                'value': expanded ? 0 : 1 // 0 = closed, 1 = opened
            });
        }
    }

    /**
     * Close all FAQ items except the current one
     * @param {HTMLElement} currentButton - The button to keep open
     */
    function closeAllFAQs(currentButton) {
        const allButtons = document.querySelectorAll('.faq-question');
        
        allButtons.forEach(button => {
            if (button !== currentButton) {
                button.setAttribute('aria-expanded', 'false');
                const answer = button.nextElementSibling;
                if (answer) {
                    answer.hidden = true;
                }
            }
        });
    }

    /**
     * Scroll to FAQ item if it's not fully visible
     * @param {HTMLElement} button - The FAQ question button
     */
    function scrollToFAQIfNeeded(button) {
        const rect = button.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );

        if (!isVisible) {
            button.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }

    /**
     * Open FAQ from URL hash (e.g., #faq-1)
     */
    function openFAQFromHash() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#faq-')) {
            const index = parseInt(hash.replace('#faq-', ''), 10);
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            if (faqQuestions[index]) {
                setTimeout(() => {
                    toggleFAQ(faqQuestions[index]);
                    faqQuestions[index].scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 500);
            }
        }
    }

    /**
     * Search FAQs (optional enhancement)
     * @param {string} query - Search term
     */
    function searchFAQs(query) {
        const faqItems = document.querySelectorAll('.faq-item');
        const lowerQuery = query.toLowerCase().trim();

        if (!lowerQuery) {
            // Show all if query is empty
            faqItems.forEach(item => {
                item.style.display = '';
            });
            return;
        }

        let visibleCount = 0;

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question span').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
            
            if (question.includes(lowerQuery) || answer.includes(lowerQuery)) {
                item.style.display = '';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        console.log(`FAQ Search: Found ${visibleCount} results for "${query}"`);
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initFAQ();
            openFAQFromHash();
        });
    } else {
        initFAQ();
        openFAQFromHash();
    }

    // Expose search function globally (optional)
    window.searchFAQs = searchFAQs;

    // Re-check hash on hash change
    window.addEventListener('hashchange', openFAQFromHash);

})();
