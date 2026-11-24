import Link from "next/link";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { ThemeToggle } from "@/components/theme-toggle";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function Lines({ value, italicSecond = false }: { value: string; italicSecond?: boolean }) {
  return (
    <>
      {value.split("\n").map((line, index) => (
        <span key={`${line}-${index}`}>
          {italicSecond && index === 1 ? <em>{line}</em> : line}
          <br />
        </span>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement"><span>{site.announcement}</span><span>Next.js · TypeScript · MDX</span></div>

      <header className="site-header wrap">
        <Link className="wordmark" href="/" aria-label={`${site.name} home`}>
          <span className="bell-mark" aria-hidden="true">b</span>{site.name}
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {site.navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>
        <ThemeToggle />
      </header>

      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />{site.hero.eyebrow}</p>
          <h1 id="hero-title"><Lines value={site.hero.title} italicSecond /></h1>
          <p className="hero-description">{site.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-dark" href={site.hero.primaryAction.href}>{site.hero.primaryAction.label}<Arrow /></a>
            <a className="text-link" href={site.hero.secondaryAction.href}>{site.hero.secondaryAction.label}<Arrow diagonal /></a>
          </div>
          <p className="hero-note"><span className="hero-note-dot" />{site.hero.note}</p>
        </div>

        <div className="hero-art" role="img" aria-label={site.hero.artwork.alt}>
          <div className="browser-window">
            <div className="browser-toolbar"><div className="browser-dots"><i/><i/><i/></div><span>{site.hero.artwork.windowLabel}</span><b>•••</b></div>
            <div className="browser-page">
              <div className="browser-page-nav"><span className="browser-logo">Bell<span>.</span></span><span>{site.navigation.map((item) => item.label.toUpperCase()).join("　")}</span><i>☰</i></div>
              <div className="browser-page-main"><span className="preview-kicker">A WEBSITE STARTER</span><h2><Lines value={site.hero.artwork.title} italicSecond /></h2><span className="preview-button">{site.hero.artwork.button}<Arrow /></span></div>
              <div className="browser-page-foot"><span/><span/><span/></div>
            </div>
          </div>
          <span className="art-sticker">BELL<br/>TEMPLATE<br/><b>✳</b></span>
          <span className="art-caption">A little personality goes a long way</span>
        </div>
      </section>

      <section className="stats-bar" aria-label="Included in Bell">
        <div className="wrap stats-grid">
          {site.highlights.map((item) => <div className="stat" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </section>

      <section className="features-section section-pad wrap" id="features">
        <SectionHeading eyebrow={site.features.eyebrow} title={site.features.title} note={site.features.note}/>
        <div className="feature-grid">
          {site.features.items.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-card-top"><span className="feature-icon" aria-hidden="true">{feature.icon}</span><span className="feature-number">{feature.number}</span></div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="wrap about-grid">
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />{site.about.eyebrow}</p>
            <h2><Lines value={site.about.title} italicSecond /></h2>
            <p>{site.about.description}</p>
            <ul>{site.about.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul>
          </div>
          <div className="about-art" role="img" aria-label="Bell theme preview">
            <div className="about-art-rings"/>
            <div className="about-art-copy"><span>{site.about.cardLabel}</span><strong><Lines value={site.about.cardTitle} italicSecond /></strong><i>✳</i></div>
            <div className="about-art-chip">B.</div>
          </div>
        </div>
      </section>

      <section className="customize-section section-pad wrap" id="customize">
        <div className="customize-grid">
          <div className="customize-copy">
            <p className="eyebrow"><span className="eyebrow-dot"/>{site.customize.eyebrow}</p>
            <h2><Lines value={site.customize.title} italicSecond /></h2>
            <p>{site.customize.description}</p>
            <Link className="underlined-link" href={site.customize.link.href}>{site.customize.link.label}<Arrow diagonal /></Link>
          </div>
          <div className="code-card" aria-label={`Example content configuration from ${site.customize.file}`}>
            <div className="code-card-head"><span className="code-file-icon">TS</span><span>{site.customize.file}</span><span className="code-dots">•••</span></div>
            <pre><code>{site.customize.code}</code></pre>
            <div className="code-card-foot"><span className="code-check">✓</span>One typed config. A whole site that feels like yours.</div>
          </div>
        </div>
      </section>

      <section className="journal-section" id="journal">
        <div className="wrap journal-grid">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot"/>{site.journal.eyebrow}</p>
            <h2><Lines value={site.journal.title} italicSecond /></h2>
            <p className="journal-excerpt">{site.journal.excerpt}</p>
            <Link className="underlined-link" href={site.journal.link.href}>{site.journal.link.label}<Arrow diagonal /></Link>
          </div>
          <Link href={site.journal.link.href} className="journal-art" aria-label={site.journal.card.ariaLabel}>
            <span className="journal-art-label">{site.journal.card.label}</span>
            <span className="journal-art-title"><Lines value={site.journal.card.title} italicSecond /></span>
            <span className="journal-art-mark">B.</span>
          </Link>
        </div>
      </section>

      <section className="guide-section" id="guide">
        <div className="wrap guide-grid">
          <div className="guide-copy">
            <p className="eyebrow"><span className="eyebrow-dot"/>{site.guide.eyebrow}</p>
            <h2><Lines value={site.guide.title} italicSecond /></h2>
            <p>{site.guide.description}</p>
            <a className="button button-dark" href={site.guide.action.href} target="_blank" rel="noreferrer">{site.guide.action.label}<Arrow diagonal /></a>
          </div>
          <div className="terminal-card">
            <div className="terminal-head"><span/><span/><span/><b>TERMINAL</b></div>
            <div className="terminal-lines">{site.guide.commands.map((command, index) => <p key={command}><span>{index + 1}</span><i>$</i> {command}</p>)}</div>
            <div className="terminal-ready"><span>✓</span> Ready when you are.</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <p className="eyebrow"><span className="eyebrow-dot"/>{site.footer.eyebrow}</p>
            <h2>{site.footer.title.split("\n").map((line) => <span key={line}>{line}<br/></span>)}</h2>
            <a className="button button-light" href={site.repository} target="_blank" rel="noreferrer">{site.footer.repositoryLabel}<Arrow diagonal /></a>
          </div>
          <div className="footer-bottom">
            <Link className="wordmark" href="/"><span className="bell-mark" aria-hidden="true">b</span>{site.name}</Link>
            <p>{site.footer.summary}</p>
            <a href={site.repository} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
            <span className="copyright">© {new Date().getFullYear()} {site.name}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
