"use client";

import Link from "next/link";

/**
 * Desktop `.menu.scroll-nav` list. `activeIndex` comes from useScrollSpy.
 */
export default function ScrollNav({ navItems, activeIndex }) {
  return (
    <ul className="menu scroll-nav d-flex">
      {navItems.map((item, i) => (
        <li key={item.href}>
          <Link
            className={`scroll-to${i === activeIndex ? " active" : ""}`}
            href={item.href}
          >
            <span>{item.label}</span> <i className={item.icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
