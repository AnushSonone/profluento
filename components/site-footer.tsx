import { Brand } from "@/components/site-header";

const consultationUrl = "https://tidycal.com/anushsonone/profluento-consultation";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>AI-Powered CRM for Wealth Managers</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#product">Product</a>
          <a href="#demo">How it works</a>
          <a href="#technology">Technology</a>
          <a href={consultationUrl} target="_blank" rel="noopener noreferrer">Book a consultation</a>
          <a href={consultationUrl} target="_blank" rel="noopener noreferrer">Login</a>
        </nav>
        <div className="footer-contact">
          <a href="mailto:anushse@utexas.edu">anushse@utexas.edu</a>
          <a href="https://profluento.dev">profluento.dev</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Profluento. All rights reserved.</span>
        <span>Private preview</span>
      </div>
    </footer>
  );
}
