"use client";

import { useState } from "react";

/**
 * Replaces the Owl Carousel + jQuery testimonial slider from main.js with a
 * small React state machine: same single-item view, prev/next buttons and
 * the "current / total" slide counter.
 */
export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }
  function next() {
    setIndex((i) => (i + 1) % items.length);
  }

  return (
    <div
      className="testimonial-slider-wrap scroll-animation"
      data-animation="fade_from_bottom"
    >
      <div className="testimonial-slider owl-theme">
        <div className="testimonial-item">
          <div className="testimonial-item-inner">
            <p>{current.quote}</p>
            <div className="author d-flex align-items-center m-0">
              <img src={current.avatar} alt={current.name} />
              <div className="right">
                <h3>{current.name}</h3>
                {current.role && <p className="designation">{current.role}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-footer-nav">
        <div className="testimonial-nav d-flex align-items-center">
          <button className="prev" onClick={prev} type="button">
            <i className="las la-angle-left" />
          </button>
          <div id="testimonial-slide-count">
            <span className="left">{index + 1}</span> / {items.length}
          </div>
          <button className="next" onClick={next} type="button">
            <i className="las la-angle-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
