import { ArrowRight, Check, ChevronRight, Database, Layers3, Search, Send, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { DemoVideo } from "@/components/demo-video";
import { ProductFrame } from "@/components/product-frame";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const consultationUrl = "https://tidycal.com/anushsonone/profluento-consultation";

const capabilities = [
  {
    number: "01",
    title: "Lead Intelligence",
    description: "Search and prioritize prospects using professional, contextual, and multi-source signals. Review a clear score, confidence level, source, evidence, and verification context before deciding what to do next.",
    icon: Search,
    content: (
      <div className="signal-surface" aria-label="Example prospect score">
        <div className="signal-score"><span>Prospect score</span><strong>87</strong><small>/100</small></div>
        <div className="signal-lines"><span><i /> Professional role</span><span><i /> Contextual fit</span><span><i /> Evidence quality</span></div>
        <div className="signal-meta"><span>HIGH CONFIDENCE</span><span>VERIFIED 2H AGO</span></div>
      </div>
    ),
  },
  {
    number: "02",
    title: "AI-Assisted Outreach",
    description: "Prepare relevant outreach drafts, follow-up sequences, scheduling prompts, and relationship-specific messaging while keeping the wealth manager in control of every final communication.",
    icon: Sparkles,
    content: (
      <div className="message-surface" aria-label="Example outreach workflow">
        <div className="message-line"><span>Personalize for relationship context</span><Check /></div>
        <div className="message-copy">Prepared a concise introduction based on the prospect&apos;s role and recent professional signals.</div>
        <div className="message-actions"><span>Regenerate</span><span>Edit</span><span>Copy</span></div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Relationship CRM",
    description: "Move prospects from lead discovery into structured workflows and client records without losing the context that made the relationship valuable.",
    icon: Workflow,
    content: (
      <div className="workflow-surface" aria-label="Example CRM workflow">
        {[
          ["Leads", "128"], ["Task Groups", "12"], ["Clients", "46"], ["Outreach", "Active"],
        ].map(([label, value], index) => (
          <div key={label}><span className="workflow-icon">{index + 1}</span><strong>{label}</strong><small>{value}</small><ChevronRight /></div>
        ))}
      </div>
    ),
  },
];

const proofPoints = [
  { stat: "10+", label: "normalized signals", copy: "A weighted model combines professional and contextual indicators into a ranked score with supporting evidence." },
  { stat: "10K+", label: "profiles ranked", copy: "Large professional-profile datasets become structured results for focused review inside the product." },
  { stat: "~80%", label: "fewer repeated requests", copy: "Queued execution and region-local caching reduce unnecessary paid enrichment work across repeated scoring requests." },
];

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-grid-mark" aria-hidden="true" />
          <div className="page-shell hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span /> AI-POWERED CRM FOR WEALTH MANAGERS</div>
              <h1 id="hero-heading">Turn professional signals into stronger client relationships.</h1>
              <p>Profluento helps wealth managers discover high-potential prospects, prepare personalized outreach, and manage every relationship from one modern workspace.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={consultationUrl} target="_blank" rel="noopener noreferrer">Book a consultation <ArrowRight /></a>
                <a className="button button-secondary" href="#product">Explore the product</a>
              </div>
              <div className="product-line"><span>Lead intelligence</span><i /><span>AI-assisted outreach</span><i /><span>Relationship CRM</span></div>
            </div>
            <div className="hero-product">
              <ProductFrame
                src="/assets/images/leads-example.png"
                alt="Profluento lead intelligence workspace showing scored prospects"
                width={2622}
                height={1946}
                priority
              />
            </div>
          </div>
        </section>

        <section className="section capabilities" id="product" aria-labelledby="capabilities-heading">
          <div className="page-shell">
            <div className="section-intro">
              <span className="section-kicker">01 / PRODUCT</span>
              <div><h2 id="capabilities-heading">One system from discovery to conversion.</h2><p>Profluento brings prospect intelligence, personalized outreach, and relationship management into one focused workflow for wealth-management teams.</p></div>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="capability-card" key={item.title}>
                    <div className="card-top"><span>{item.number}</span><Icon aria-hidden="true" /></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.content}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section showcase" id="demo" aria-labelledby="showcase-heading">
          <div className="page-shell">
            <div className="section-intro">
              <span className="section-kicker">02 / WORKFLOW</span>
              <div><h2 id="showcase-heading">A focused workflow for modern advisory teams.</h2><p>Discover prospects, prepare outreach, organize repeatable workflows, and convert qualified leads into managed client relationships.</p></div>
            </div>
            <div className="showcase-row">
              <div className="showcase-copy"><span>LEAD DISCOVERY</span><h3>Find the signal in professional context.</h3><p>Score and review prospects with filters, evidence, confidence, sources, and workflow context.</p></div>
              <ProductFrame
                src="/assets/images/leads-example.png"
                alt="Profluento lead discovery table"
                width={2622}
                height={1946}
              />
            </div>
            <div className="showcase-row reverse">
              <div className="showcase-copy"><span>OUTREACH PREPARATION</span><h3>Move from insight to a thoughtful introduction.</h3><p>Generate and refine personalized outreach while preserving human review and relationship judgment.</p></div>
              <ProductFrame
                src="/assets/images/chat-example.png"
                alt="Profluento AI-assisted outreach workspace"
                width={3124}
                height={2078}
              />
            </div>
            <DemoVideo />
          </div>
        </section>

        <section className="section technology" id="technology" aria-labelledby="technology-heading">
          <div className="page-shell">
            <div className="section-intro">
              <span className="section-kicker">03 / TECHNOLOGY</span>
              <div><h2 id="technology-heading">Built for signal, speed, and control.</h2><p>Profluento combines a multi-signal scoring workflow with asynchronous enrichment infrastructure and modular product controls designed around the realities of wealth-management teams.</p></div>
            </div>
            <div className="engineering-panel">
              <div className="proof-grid">
                {proofPoints.map((item) => <article key={item.stat}><strong>{item.stat}</strong><h3>{item.label}</h3><p>{item.copy}</p></article>)}
              </div>
              <div className="architecture" aria-label="Profluento technical architecture">
                {[{ icon: Layers3, label: "Next.js application" }, { icon: ShieldCheck, label: "Authenticated request" }, { icon: Workflow, label: "Scoring API + Queue" }, { icon: Database, label: "Worker + KV cache" }, { icon: Send, label: "Ranked results" }].map((step, index, arr) => {
                  const Icon = step.icon;
                  return <div className="architecture-step" key={step.label}><span><Icon aria-hidden="true" /></span><small>{step.label}</small>{index < arr.length - 1 && <ArrowRight aria-hidden="true" />}</div>;
                })}
              </div>
              <div className="modular-note"><div><span>MODULAR BY DESIGN</span><h3>Control the capabilities you enable.</h3></div><p>Profluento separates lead intelligence, AI-assisted outreach, and CRM functionality so firms can evaluate and enable the capabilities that fit their internal policies.</p></div>
              <p className="disclaimer">Profluento supports compliance-aware workflows and human review. It does not replace legal, regulatory, or supervisory judgment.</p>
            </div>
          </div>
        </section>

        <section className="section closing" id="contact" aria-labelledby="closing-heading">
          <div className="page-shell closing-shell">
            <span className="section-kicker">04 / NEXT STEP</span>
            <h2 id="closing-heading">Build a smarter prospecting workflow.</h2>
            <p>See how Profluento can support your lead-discovery, outreach, and relationship-management process.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={consultationUrl} target="_blank" rel="noopener noreferrer">Book a consultation <ArrowRight /></a>
            </div>
            <small>Consultation-based access for wealth managers, RIAs, and advisory teams.</small>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
