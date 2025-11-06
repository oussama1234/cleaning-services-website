// Simple scroll animation utility
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all animatable elements
  const elements = document.querySelectorAll(
    '.about-item, .contact-item, .booking-content, .service-card, .promo-item, .testimonial-item'
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
