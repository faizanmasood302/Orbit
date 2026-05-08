import gsap from 'gsap';

/** Animates a panel <div> into view (slide up + fade in) */
export function animateIn(el: HTMLElement) {
  gsap.fromTo(
    el,
    { y: 48, opacity: 0, scale: 0.97 },
    { y: 0, opacity: 1, scale: 1, duration: 0.52, ease: 'power3.out', clearProps: 'transform' }
  );
}

/** Animates a panel out, then calls onComplete */
export function animateOut(el: HTMLElement, onComplete: () => void) {
  gsap.to(el, {
    y: 32, opacity: 0, scale: 0.97,
    duration: 0.3, ease: 'power2.in',
    onComplete,
  });
}
