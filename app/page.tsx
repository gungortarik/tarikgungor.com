const navItems = [
  { label: "Now", href: "#now" },
  { label: "Work", href: "#work" },
  { label: "Notes", href: "#notes" },
  { label: "Archive", href: "#archive" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tarik Gungor home">
          <span className="brand-mark">TG</span>
          <span className="brand-name">Tarik Gungor</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="say-hello" href="mailto:hello@tarikgungor.com">
          Say hello
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <p>Toronto, Canada</p>
              <span aria-hidden="true">•</span>
              <p>A life in progress</p>
            </div>

            <h1>
              <span>Building.</span>
              <span>Learning.</span>
              <span>Living.</span>
            </h1>

            <p className="hero-intro">
              I&apos;m Tarik. I work with technology, build things that solve real
              problems, and document what I learn along the way — without pretending
              the journey is finished.
            </p>
          </div>

          <div className="hero-object" aria-hidden="true">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="hero-object-center">
              <span className="hero-object-kicker">ongoing</span>
              <strong>01 / ∞</strong>
              <span>curiosity as a practice</span>
            </div>
          </div>
        </div>

        <div className="hero-footer" id="now">
          <div>
            <span className="meta-label">Current focus</span>
            <strong>Building Sonoma</strong>
          </div>
          <div>
            <span className="meta-label">Learning</span>
            <strong>Systems, networks &amp; product craft</strong>
          </div>
          <div>
            <span className="meta-label">This site</span>
            <strong>A record, not a résumé</strong>
          </div>
        </div>
      </section>

      <section className="placeholder-section" id="work" aria-label="Work placeholder">
        <span>Selected work comes next.</span>
      </section>
      <section className="sr-only" id="notes" aria-label="Notes placeholder" />
      <section className="sr-only" id="archive" aria-label="Archive placeholder" />
    </main>
  );
}
