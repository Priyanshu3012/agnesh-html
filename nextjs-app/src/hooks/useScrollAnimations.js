'use client';

import { useEffect } from 'react';

const SAFETY_TIMEOUT_MS = 2500;

/**
 * Re-implementation of main.js's scroll_animations(): each `.scroll-animation`
 * element fades/slides in once it scrolls into view (direction driven by its
 * `data-animation` attribute, styled in scroll-reveal.css).
 *
 * Content is visible by default in the server-rendered HTML — JS only adds
 * the "reveal-pending" class to (temporarily) hide an element, then swaps it
 * to "revealed" via IntersectionObserver. This order is intentional: if this
 * effect never runs, or an observer callback never fires, elements simply
 * stay in their default visible state instead of getting stuck hidden. A
 * timeout also force-reveals anything left pending as a last-resort safety
 * net (e.g. if IntersectionObserver is unavailable).
 */
export default function useScrollAnimations(deps = []) {
  useEffect(() => {
    const boxes = Array.from(document.querySelectorAll('.scroll-animation'));
    if (!boxes.length || typeof IntersectionObserver === 'undefined') return undefined;

    boxes.forEach((box) => box.classList.add('reveal-pending'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -20% 0px' }
    );

    boxes.forEach((box) => observer.observe(box));

    const safetyTimer = setTimeout(() => {
      boxes.forEach((box) => {
        box.classList.remove('reveal-pending');
        box.classList.add('revealed');
      });
    }, SAFETY_TIMEOUT_MS);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
