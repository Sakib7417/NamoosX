'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook to detect when an element is in the viewport.
 */
function useInView(options) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger only when the element is intersecting
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element); // Stop observing once triggered
        }
      },
      options
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
}

/**
 * A wrapper component that applies a slide-in-up transition when it scrolls into view.
 * This version uses Tailwind's transition utilities for a more reliable effect.
 */
export default function ScrollAnimationWrapper({ children, className = '', delay = '' }) {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      // This applies the transition effect.
      // It starts as invisible and pushed down (opacity-0, translate-y-10).
      // When it enters the view, it becomes visible and moves to its original position.
      className={`${className} transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}
