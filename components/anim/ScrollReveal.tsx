'use client';

import { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
  as?: 'div' | 'section' | 'span';
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 30,
  duration = 0.8,
  stagger = 0,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || animated.current) return;

    const children = stagger > 0
      ? Array.from(el.children)
      : [el];

    gsap.set(children, { opacity: 0, y });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, stagger, y]);

  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  );
}
