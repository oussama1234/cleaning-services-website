// Lightweight scroll animation utility using Intersection Observer
// No GSAP needed - pure CSS animations triggered on scroll

export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be fully ready
  const setup = () => {
    // Create observer with optimized settings
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'in-view' class when element enters viewport
          entry.target.classList.add('in-view');
          // After animation completes, ensure element stays visible
          entry.target.addEventListener('animationend', () => {
            entry.target.style.opacity = '1';
          }, { once: true });
          // Optional: unobserve after animation to improve performance
          // observer.unobserve(entry.target);
        }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -100px 0px', // Start animation slightly before element enters
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-fadeScaleIn, .animate-slideUpFade, .animate-slideInLeft, ' +
      '.animate-slideInRight-custom, .animate-zoomIn, .animate-flipIn, ' +
      '.animate-bounceIn, .animate-slideDownFade, .animate-rotateIn, .animate-fadeInUp'
    );

    console.log('Found animated elements:', animatedElements.length);

    animatedElements.forEach((el) => {
      // Check if element is already in viewport on page load
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isInViewport = (
        rect.top < windowHeight && 
        rect.bottom > 0
      );
      
      // If already in viewport, trigger animation immediately
      if (isInViewport) {
        console.log('Element already in viewport:', el.className);
        el.classList.add('in-view');
        // After animation completes, ensure element stays visible
        el.addEventListener('animationend', () => {
          el.style.opacity = '1';
        }, { once: true });
      }
      
      // Observe element for future scroll events
      observer.observe(el);
    });

    return () => observer.disconnect();
  };

  // Run setup after a small delay to ensure DOM is ready
  let cleanup = null;
  const timeoutId = setTimeout(() => {
    cleanup = setup();
  }, 100);

  return () => {
    clearTimeout(timeoutId);
    if (cleanup) cleanup();
  };
}
