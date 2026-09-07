'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Fullscreen modal that shows every slide of one project as a horizontally
 * scrollable, swipeable/sliding gallery (scroll-snap), with prev/next arrows,
 * a close (×) button, and dot indicators. Each slide uses object-fit:
 * contain so mixed aspect ratios (square, portrait, story) all display
 * correctly without cropping. Fully responsive down to small phone widths.
 */
export default function PdfCarouselModal({ title, slides, onClose }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goTo(activeIndex - 1);
      if (e.key === 'ArrowRight') goTo(activeIndex + 1);
    }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  function goTo(index) {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' });
    setActiveIndex(clamped);
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    if (index !== activeIndex) setActiveIndex(index);
  }

  return (
    <div className="pdf-carousel-overlay" onClick={onClose}>
      <div className="pdf-carousel-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-carousel-header">
          <span className="pdf-carousel-title">{title}</span>
          <span className="pdf-carousel-count">{activeIndex + 1} / {slides.length}</span>
          <button type="button" className="pdf-carousel-close" onClick={onClose} aria-label="Close">
            <i className="las la-times" />
          </button>
        </div>

        <div className="pdf-carousel-body">
          <div className="pdf-carousel-track" ref={trackRef} onScroll={onScroll}>
            {slides.map((src, i) => (
              <div className="pdf-carousel-slide" key={src}>
                <img src={src} alt={`${title} — slide ${i + 1}`} />
              </div>
            ))}
          </div>

          {activeIndex > 0 && (
            <button type="button" className="pdf-carousel-nav pdf-carousel-prev" onClick={() => goTo(activeIndex - 1)} aria-label="Previous slide">
              <i className="las la-angle-left" />
            </button>
          )}
          {activeIndex < slides.length - 1 && (
            <button type="button" className="pdf-carousel-nav pdf-carousel-next" onClick={() => goTo(activeIndex + 1)} aria-label="Next slide">
              <i className="las la-angle-right" />
            </button>
          )}
        </div>

        <div className="pdf-carousel-dots">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`pdf-carousel-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
