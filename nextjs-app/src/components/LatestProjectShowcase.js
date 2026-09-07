'use client';

import { useState } from 'react';
import PdfCarouselModal from './PdfCarouselModal';

const geoffStevenCarousels = [1, 2, 3, 4, 5].map((n) => ({
  key: `geoff-${n}`,
  label: `Carousel ${n}`,
  title: `Geoff Steven & Sons — Carousel ${n}`,
  slides: [1, 2, 3, 4].map((s) => `/assets/images/latest-project/carousel${n}/slide-${s}.jpg`),
}));

// 18 slides split into 5 groups of [4, 4, 4, 3, 3], same pattern as the Geoff Steven carousels.
const ASTROLOGY_GROUP_SIZES = [4, 4, 4, 3, 3];
const astrologyCarousels = (() => {
  let cursor = 0;
  return ASTROLOGY_GROUP_SIZES.map((size, i) => {
    const slides = Array.from({ length: size }, (_, j) => `/assets/images/latest-project/astrology/slide-${cursor + j + 1}.jpg`);
    cursor += size;
    return {
      key: `astrology-${i + 1}`,
      label: `Carousel ${i + 1}`,
      title: `Astrologer — Carousel ${i + 1}`,
      slides,
    };
  });
})();

const PROJECTS = [
  {
    id: 'geoff-steven',
    client: 'Geoff Steven & Sons — Styling Opticians & Audiologists',
    items: geoffStevenCarousels,
  },
  {
    id: 'astrologer',
    client: 'Astrologer — Social Media Ad Creatives',
    items: astrologyCarousels,
  },
];

export default function LatestProjectShowcase() {
  const [modal, setModal] = useState(null);

  return (
    <div className="latest-project-showcase" id="latest-work">
      {PROJECTS.map((project) => (
        <div className="latest-project-block" key={project.id}>
          <div className="latest-project-grid">
            {project.items.map((item) => (
              <button
                key={item.key}
                type="button"
                className="latest-project-thumb scroll-animation"
                data-animation="fade_from_bottom"
                onClick={() => setModal(item)}
              >
                <img src={item.slides[0]} alt={item.title} />
              </button>
            ))}
          </div>
          <h2 className="latest-project-client"><span>{project.client}</span></h2>
        </div>
      ))}

      {modal && (
        <PdfCarouselModal title={modal.title} slides={modal.slides} onClose={() => setModal(null)} />
      )}
    </div>
  );
}
