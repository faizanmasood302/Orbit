'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface CountUpProps {
  end: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function CountUp({ end, suffix = '', className = '', duration = 2 }: CountUpProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || counted.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: end,
            duration,
            ease: 'power2.out',
            onUpdate: () => setDisplay(Math.round(obj.val)),
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}
