"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../atoms/Icon";
import NavigationItem from "../molecules/NavigationItem";

const links = [
  { label: "Home", href: "/" },
  { label: "Heritage Sites", href: "/#sites" },
  { label: "About", href: "/about/" },
];

// Site header. On phones the menu is hidden behind a toggle button;
// from 600px wide the links are shown in a row.
export default function HeaderNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          Pangasinan Heritage
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav aria-label="Main">
          <ul id="main-menu" className={`site-header__menu${open ? " is-open" : ""}`}>
            {links.map((link) => (
              <NavigationItem
                key={link.href}
                href={link.href}
                active={pathname === link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavigationItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
