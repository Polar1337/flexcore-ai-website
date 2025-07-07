// Simple and safe branding removal
const removeBranding = () => {
  // Find and hide elements containing "Made with Manus"
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  const textNodes = [];
  let node;
  
  while (node = walker.nextNode()) {
    if (node.textContent.includes('Made with Manus')) {
      textNodes.push(node);
    }
  }

  textNodes.forEach(textNode => {
    let element = textNode.parentElement;
    while (element && element !== document.body) {
      if (element.tagName === 'A' || element.style.position === 'fixed') {
        element.style.display = 'none';
        break;
      }
      element = element.parentElement;
    }
  });

  // Also hide any links to manus.space
  const manusLinks = document.querySelectorAll('a[href*="manus.space"]');
  manusLinks.forEach(link => {
    link.style.display = 'none';
  });
};

// Run the function periodically
setInterval(removeBranding, 2000);

// Run immediately
removeBranding();

// Run after page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeBranding);
} else {
  removeBranding();
}

