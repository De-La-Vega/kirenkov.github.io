import scrollToElement from 'scroll-to-element';

/**
 * Safe method to cancel default event execution.
 *
 * @param {Object} e - event
 */
export function preventDefault (e) {
    e = e || window.event;
    if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
    }
}

/**
 * Scroll to item.
 *
 * @param {string} className - class
 */
export function scrollTo (className) {
    scrollToElement('.' + className, {
        offset: -50,
        duration: 300,
        ease: 'linear'
    });
}

/**
 * Get element height with margins.
 *
 * @param {string} element - клас
 */
export function outerHeight (element) {
  var height = element.offsetHeight;
  var style = getComputedStyle(element);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);

  return height;
}