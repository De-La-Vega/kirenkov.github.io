const scrollToElement = require('scroll-to-element');

/**
 * Scroll to item.
 *
 * @param {string} className - class
 */
export function scrollTo (className: string): void {
    scrollToElement('.' + className, {
        duration: 300,
        ease: 'linear',
        offset: -50,
    });
}
