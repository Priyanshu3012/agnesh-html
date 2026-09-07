'use client';

import { useEffect, useState } from 'react';

/**
 * Re-implementation of the scroll-spy block in main.js (the window scroll
 * handler that toggled `.active` on `.scroll-nav` / `.scroll-nav-responsive`
 * items based on `.page-section` / `.scroll-to-page` position). Returns the
 * index of the currently active nav item instead of mutating the DOM.
 */
export default function useScrollSpy(sectionCount) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function getSections() {
      const nodes = document.querySelectorAll('.page-section, .scroll-to-page');
      return Array.from(new Set(nodes));
    }

    function onScroll() {
      const windscroll = window.scrollY;
      const sections = getSections();

      if (windscroll >= 0 && sections.length) {
        let next = 0;
        sections.forEach((section, i) => {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (top <= windscroll + 1) {
            next = i;
          }
        });
        setActiveIndex(Math.min(next, sectionCount - 1));
      } else {
        setActiveIndex(0);
      }
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionCount]);

  return activeIndex;
}
