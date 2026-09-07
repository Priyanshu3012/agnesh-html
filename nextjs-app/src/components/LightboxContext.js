'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LightboxContext = createContext(null);

/**
 * Replaces Lightbox2 + jQuery. `open(images, startIndex)` shows a full-screen
 * modal over the given ordered image list (a "data-lightbox group" in the
 * original markup), with prev/next navigation within that same list.
 */
export function LightboxProvider({ children }) {
  const [state, setState] = useState(null); // { images, index }

  const open = useCallback((images, index) => setState({ images, index }), []);
  const close = useCallback(() => setState(null), []);
  const prev = useCallback(
    () => setState((s) => (s ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length } : s)),
    []
  );
  const next = useCallback(
    () => setState((s) => (s ? { ...s, index: (s.index + 1) % s.images.length } : s)),
    []
  );

  useEffect(() => {
    if (!state) return undefined;
    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state, close, prev, next]);

  const value = useMemo(() => ({ open, close, prev, next, state }), [open, close, prev, next, state]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {state && (
        <div className="lb-outerContainer react-lightbox-overlay" onClick={close}>
          <div className="react-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={state.images[state.index].src} alt={state.images[state.index].alt || ''} />
            {state.images.length > 1 && (
              <>
                <button type="button" className="lb-prev react-lightbox-nav react-lightbox-prev" onClick={prev} aria-label="Previous image">
                  <i className="las la-angle-left" />
                </button>
                <button type="button" className="lb-next react-lightbox-nav react-lightbox-next" onClick={next} aria-label="Next image">
                  <i className="las la-angle-right" />
                </button>
              </>
            )}
            <button type="button" className="lb-close react-lightbox-close" onClick={close} aria-label="Close">
              <i className="las la-times" />
            </button>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within a LightboxProvider');
  return ctx;
}
