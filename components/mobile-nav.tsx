"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const consultationUrl = "https://tidycal.com/anushsonone/profluento-consultation";

const links = [
  { href: "#product", label: "Product" },
  { href: "#demo", label: "How it works" },
  { href: "#technology", label: "Technology" },
  { href: "#contact", label: "About" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="menu-trigger"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="button button-primary" href={consultationUrl} target="_blank" rel="noopener noreferrer">
            Book a consultation
          </a>
        </div>
      )}
    </div>
  );
}
