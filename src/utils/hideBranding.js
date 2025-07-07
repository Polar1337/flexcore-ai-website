// Hide "Made with Manus" branding
export const hideBranding = () => {
  const hideElements = () => {
    // Hide any element containing "Made with Manus"
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      if (element.textContent && element.textContent.includes('Made with Manus')) {
        element.style.display = 'none';
        element.style.visibility = 'hidden';
        element.style.opacity = '0';
      }
    });

    // Hide any links to manus.space
    const manusLinks = document.querySelectorAll('a[href*="manus"]');
    manusLinks.forEach(link => {
      link.style.display = 'none';
      link.style.visibility = 'hidden';
      link.style.opacity = '0';
    });

    // Hide fixed positioned elements in bottom right
    const fixedElements = document.querySelectorAll('[style*="position: fixed"]');
    fixedElements.forEach(element => {
      const style = window.getComputedStyle(element);
      if (style.position === 'fixed' && 
          (style.bottom !== 'auto' || style.right !== 'auto')) {
        element.style.display = 'none';
      }
    });
  };

  // Run immediately
  hideElements();

  // Run after DOM changes
  const observer = new MutationObserver(hideElements);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });

  // Run periodically as fallback
  setInterval(hideElements, 1000);
};

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hideBranding);
} else {
  hideBranding();
}

