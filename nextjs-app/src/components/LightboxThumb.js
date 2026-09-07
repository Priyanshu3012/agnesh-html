'use client';

import { useLightbox } from './LightboxContext';

/**
 * Replaces a Lightbox2 `<a href="img" data-lightbox="group">` thumbnail.
 * `group` is the full ordered image list for that data-lightbox group;
 * `index` is this thumbnail's position within it.
 */
export default function LightboxThumb({ group, index, className, children }) {
  const { open } = useLightbox();
  return (
    <a
      href={group[index].src}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        open(group, index);
      }}
    >
      {children}
    </a>
  );
}
