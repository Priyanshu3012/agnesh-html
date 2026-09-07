'use client';

import { useEffect, useState } from 'react';

/**
 * Re-implementation of:
 *   $(window).on('load', () => $('.page-loader').delay(500).fadeOut(1000));
 */
export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    function startFade() {
      const delayTimer = setTimeout(() => {
        setFading(true);
        const fadeTimer = setTimeout(() => setVisible(false), 1000);
        return () => clearTimeout(fadeTimer);
      }, 500);
      return () => clearTimeout(delayTimer);
    }

    if (document.readyState === 'complete') {
      return startFade();
    }
    window.addEventListener('load', startFade);
    return () => window.removeEventListener('load', startFade);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="page-loader"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 1000ms linear',
      }}
    >
      <div className="bounceball" />
    </div>
  );
}
