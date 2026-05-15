const RELEASES = [
  {
    version: 'v0.4.0',
    date: 'May 2025',
    tag: 'latest',
    changes: [
      { type: 'new', text: 'Toggle component — animated on/off switch with sm / md / lg sizes and disabled state' },
      { type: 'new', text: 'Dark / light mode toggle in the header via ThemeContext' },
      { type: 'new', text: 'React Router integration — Components page now has deep-link URLs per component' },
      { type: 'improve', text: 'Header redesigned with sticky blur backdrop and gradient logo' },
    ],
  },
  {
    version: 'v0.3.0',
    date: 'April 2025',
    tag: null,
    changes: [
      { type: 'new', text: 'Download Button component with built-in icon and click feedback' },
      { type: 'new', text: 'Live prop playground on every component card (Preview / Props tabs)' },
      { type: 'improve', text: 'Component cards get an accent gradient bar and hover glow' },
      { type: 'fix', text: 'Alert dismiss animation no longer flickers on re-mount' },
    ],
  },
  {
    version: 'v0.2.0',
    date: 'March 2025',
    tag: null,
    changes: [
      { type: 'new', text: 'Alert component — info / success / warning / error banners with optional dismiss' },
      { type: 'new', text: 'Avatar component — initials + status dot in three sizes' },
      { type: 'improve', text: 'Design token system moved to CSS custom properties for easy theming' },
      { type: 'improve', text: 'Home page stats section showing component count and category' },
    ],
  },
  {
    version: 'v0.1.0',
    date: 'February 2025',
    tag: null,
    changes: [
      { type: 'new', text: 'Badge component — default / success / warning / error variants with pulse' },
      { type: 'new', text: 'Initial project scaffold: Vite + React + TypeScript' },
      { type: 'new', text: 'Component data registry in src/data/components.tsx' },
    ],
  },
]

const TAG_LABELS: Record<string, string> = {
  latest: 'Latest',
}

const CHANGE_ICONS: Record<string, string> = {
  new: '+',
  improve: '↑',
  fix: '✕',
}

const CHANGE_CLASSES: Record<string, string> = {
  new: 'release-change-new',
  improve: 'release-change-improve',
  fix: 'release-change-fix',
}

export default function Releases() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <h2 className="hero-title">Releases</h2>
        <p className="hero-subtitle">Changelog &amp; version history</p>
        <p className="hero-description">
          Every release is documented here — new components, improvements, and bug fixes.
        </p>
      </section>

      <div className="releases-list">
        {RELEASES.map((release) => (
          <article key={release.version} className="release-entry">
            <div className="release-header">
              <div className="release-title-row">
                <span className="release-version">{release.version}</span>
                {release.tag && (
                  <span className="release-tag">{TAG_LABELS[release.tag] ?? release.tag}</span>
                )}
              </div>
              <span className="release-date">{release.date}</span>
            </div>

            <ul className="release-changes">
              {release.changes.map((change, i) => (
                <li key={i} className={`release-change ${CHANGE_CLASSES[change.type]}`}>
                  <span className="release-change-icon">{CHANGE_ICONS[change.type]}</span>
                  <span className="release-change-text">{change.text}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  )
}
