"use client";

import MobileMenu from "../../components/MobileMenu";
import ScrollNav from "../../components/ScrollNav";
import LeftSidebar from "../../components/LeftSidebar";
import { LightboxProvider } from "../../components/LightboxContext";
import useScrollSpy from "../../hooks/useScrollSpy";

export const NAV_ITEMS = [
  { href: "/", label: "Home", icon: "las la-home" },
  { href: "/portfolio", label: "Portfolio", icon: "las la-briefcase" },
  {
    href: "/social-media",
    label: "Social Media",
    icon: "lab la-google-plus-g",
  },
  { href: "/blog", label: "Blog", icon: "las la-blog" },
  { href: "/sales-deck", label: "Sales Deck", icon: "las la-laptop" },
  { href: "/emailer", label: "Emailers", icon: "las la-envelope" },
];

export default function SubpagesLayout({ children }) {
  const activeIndex = useScrollSpy(NAV_ITEMS.length);

  return (
    <LightboxProvider>
      <MobileMenu navItems={NAV_ITEMS} activeIndex={activeIndex} />
      <ScrollNav navItems={NAV_ITEMS} activeIndex={activeIndex} />
      <LeftSidebar photoSrc="/assets/agnesh-portfolio.png" />

      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <LeftSidebar photoSrc="/assets/agnesh-portfolio.png" />
            {children}
          </div>
        </div>
      </main>
    </LightboxProvider>
  );
}
