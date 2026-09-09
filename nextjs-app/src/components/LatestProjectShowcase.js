'use client';

import { useState } from 'react';
import PdfCarouselModal from './PdfCarouselModal';

const geoffStevenCarousels = [1, 2, 3, 4, 5].map((n) => ({
  key: `geoff-${n}`,
  label: `Carousel ${n}`,
  title: `Geoff Steven & Sons — Carousel ${n}`,
  slides: [1, 2, 3, 4].map((s) => `/assets/images/latest-project/carousel${n}/slide-${s}.jpg`),
}));

// The 18 astrology images are 6 distinct ad creatives (same headline/colour
// theme), each exported in 3 aspect-ratio variants. Grouped by creative so
// every carousel only ever shows one consistent colour scheme — mixing them
// alphabetically (as before) put off-white, yellow, pink and black designs
// side by side in the same carousel, which looked random/broken.
const ASTROLOGY_GROUPS = [
  { label: 'Love Marriage Solution', indices: [1, 10, 14] },
  { label: 'Free Consultation', indices: [2, 8, 17] },
  { label: 'Inter-Caste Marriage', indices: [3, 15, 16] },
  { label: 'Love Problems', indices: [4, 9, 13] },
  { label: 'Divorce Problems', indices: [5, 6, 7] },
  { label: 'Facing Relationship Problems', indices: [11, 12, 18] },
];
const astrologyCarousels = ASTROLOGY_GROUPS.map((group, i) => ({
  key: `astrology-${i + 1}`,
  label: group.label,
  title: `Astrologer — ${group.label}`,
  slides: group.indices.map((n) => `/assets/images/latest-project/astrology/slide-${n}.jpg`),
}));

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
    <div className="latest-project-showcase">
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

      <a href="/#latest-work" className="latest-project-badge scroll-animation" data-animation="fade_in">
        <span className="pulse-dot" /> Latest Project
      </a>

      {modal && (
        <PdfCarouselModal title={modal.title} slides={modal.slides} onClose={() => setModal(null)} />
      )}
    </div>
  );
}
