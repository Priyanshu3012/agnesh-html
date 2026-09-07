'use client';

import { useState } from 'react';

const COLORS = ['#28e98c', '#e4af12', '#fe6f1d', '#14c5fd', '#c0c0c0', '#1338f3', '#f31313', '#ff99cc'];

/**
 * Re-implementation of color.js + the .global-color panel from portfolio.html.
 * Note: in the original markup the `.setting-toggle` open-button is
 * HTML-commented-out, so this panel has no visible way to open today. We
 * preserve that: the panel/state exist, but there is no trigger rendered.
 */
export default function ColorSwitcherPanel() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  function selectColor(i) {
    setActive(i);
    document.documentElement.style.setProperty('--primary_color', COLORS[i]);
  }

  return (
    <div className={`global-color${open ? ' active' : ''}`}>
      <div className="inner">
        <div className="overlay" onClick={() => setOpen(false)} />
        <div className="global-color-option">
          <span className="close-settings" onClick={() => setOpen(false)}>
            <i className="las la-times" />
          </span>
          <h2>Configuration</h2>
          <div className="global-color-option-inner">
            <p>Colors</p>
            <div className="color-boxed">
              {COLORS.map((color, i) => (
                <a
                  key={color}
                  href="#"
                  className={i === active ? 'clr-active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    selectColor(i);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
