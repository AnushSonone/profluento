import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";

const consultationUrl = "https://tidycal.com/anushsonone/profluento-consultation";

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Profluento home">
      <span className="brand-mark">
        <Image src="/assets/images/logo.svg" alt="" width={28} height={28} priority />
      </span>
      <span>Profluento</span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#demo">How it works</a>
          <a href="#technology">Technology</a>
          <a href="#contact">About</a>
        </nav>
        <div className="desktop-actions">
          <a className="text-action" href={consultationUrl} target="_blank" rel="noopener noreferrer">Login</a>
          <a className="button button-primary button-small" href={consultationUrl} target="_blank" rel="noopener noreferrer">Book a consultation</a>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
