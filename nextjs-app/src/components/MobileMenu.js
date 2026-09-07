"use client";

import { useState } from "react";
import Link from "next/link";

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/agneshjha/", icon: "lab la-linkedin" },
  { href: "https://x.com/agneshjha1", icon: "lab la-twitter" },
  { href: "https://www.instagram.com/iam_agnesh07/", icon: "lab la-instagram" },
  { href: "https://www.behance.net/agneshjha", icon: "lab la-behance" },
];

/**
 * Re-implementation of the .icon-menu / .responsive-sidebar-menu behavior
 * from main.js: click icon-menu to open, click overlay or a nav link to close.
 */
export default function MobileMenu({ logoHref = "/", navItems, activeIndex }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span className="icon-menu" onClick={() => setOpen(true)}>
        <span className="bar" />
        <span className="bar" />
      </span>

      <div className={`responsive-sidebar-menu${open ? " active" : ""}`}>
        <div className="overlay" onClick={() => setOpen(false)} />
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <Link href={logoHref} target="_blank" className="text-center">
              <img
                src="/assets/images/new/Agnesh-jha-logo.png"
                alt="Agnesh Jha Logo"
                className="site-logo"
              />
            </Link>
            <ul className="menu scroll-nav-responsive d-flex">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <Link
                    className={`scroll-to${i === activeIndex ? " active" : ""}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <i className={item.icon} /> <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-social">
            <p>Social</p>
            <ul className="social-links d-flex align-items-center">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <i className={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
