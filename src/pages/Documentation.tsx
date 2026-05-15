const tokens = [
  { token: '--bg',           desc: 'Page background' },
  { token: '--card-bg',      desc: 'Card / surface background' },
  { token: '--border',       desc: 'Subtle border' },
  { token: '--text',         desc: 'Body text' },
  { token: '--text-h',       desc: 'Heading text' },
  { token: '--accent',       desc: 'Primary accent color' },
  { token: '--accent-bg',    desc: 'Accent tint background' },
  { token: '--accent-border',desc: 'Accent border' },
  { token: '--code-bg',      desc: 'Code / muted surface' },
]

const components = [
  {
    name: 'Badge',
    props: 'label · variant · pulse',
    desc: 'Small status label with default, success, warning, and error variants. Optional pulse animation for live indicators.',
    import: `import Badge from './components/atoms/badge'`,
  },
  {
    name: 'Avatar',
    props: 'initials · size · status',
    desc: 'Initials avatar in sm / md / lg with an optional presence dot — online, offline, or busy.',
    import: `import Avatar from './components/atoms/Avatar'`,
  },
  {
    name: 'Alert',
    props: 'message · type · onDismiss',
    desc: 'Contextual banner for info, success, warning, and error states with an icon and optional dismiss button.',
    import: `import Alert from './components/atoms/Alert'`,
  },
  {
    name: 'Toggle',
    props: 'label · size · disabled · defaultChecked',
    desc: 'Animated on/off switch in sm / md / lg with a springy thumb transition and disabled state.',
    import: `import Toggle from './components/atoms/Toggle'`,
  },
  {
    name: 'Download Button',
    props: 'children · href · download · onClick',
    desc: 'Primary action button for file downloads with a built-in icon and click feedback.',
    import: `import DownloadButton from './components/atoms/DownloadButton'`,
  },
]

export default function Documentation() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <h2 className="hero-title">Documentation</h2>
        <p className="hero-subtitle">Everything you need to get started</p>
        <p className="hero-description">
          Emotion Design System is a collection of accessible, customizable React atoms built with TypeScript. Drop them into any React project and start building.
        </p>
      </section>

      {/* ── Installation ── */}
      <section className="doc-section">
        <h3 className="doc-section-label">Getting started</h3>
        <div className="doc-card-row">
          <div className="doc-gs-block">
            <h4 className="doc-card-title">Installation</h4>
            <p className="doc-card-text">Clone the repo and spin up the dev server in four commands.</p>
            <div className="doc-code-block">
              <code>git clone https://github.com/your-org/emotion-design-system</code>
              <code>cd emotion-design-system</code>
              <code>npm install</code>
              <code>npm run dev</code>
            </div>
          </div>

          <div className="doc-gs-block">
            <h4 className="doc-card-title">Theming</h4>
            <p className="doc-card-text">
              Wrap your app in <span className="doc-inline-code">ThemeProvider</span> — components
              and CSS tokens switch automatically between light and dark.
            </p>
            <div className="doc-code-block">
              <code>{`import { ThemeProvider } from './context/ThemeContext'`}</code>
              <code>{``}</code>
              <code>{`export default function App() {`}</code>
              <code>{`  return (`}</code>
              <code>{`    <ThemeProvider>`}</code>
              <code>{`      <YourApp />`}</code>
              <code>{`    </ThemeProvider>`}</code>
              <code>{`  )`}</code>
              <code>{`}`}</code>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Tokens ── */}
      <section className="doc-section">
        <h3 className="doc-section-label">Design Tokens</h3>
        <div className="doc-card doc-card-flush">
          <div className="doc-token-table">
            {tokens.map(({ token, desc }) => (
              <div key={token} className="doc-token-row">
                <span className="doc-inline-code">{token}</span>
                <span className="doc-token-desc">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Components ── */}
      <section className="doc-section">
        <h3 className="doc-section-label">Components</h3>
        <div className="doc-component-grid">
          {components.map((c) => (
            <div key={c.name} className="doc-comp-card">
              <div className="doc-comp-card-header">
                <span className="doc-comp-name">{c.name}</span>
                <span className="doc-comp-props">{c.props}</span>
              </div>
              <p className="doc-comp-desc">{c.desc}</p>
              <div className="doc-code-block doc-code-sm">
                <code>{c.import}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contributing ── */}
      <section className="doc-section">
        <h3 className="doc-section-label">Contributing</h3>
        <div className="doc-card">
          <div className="doc-card-icon">✦</div>
          <div className="doc-card-body">
            <h4 className="doc-card-title">Adding a component</h4>
            <p className="doc-card-text">
              New atoms live in{' '}
              <span className="doc-inline-code">src/components/atoms/</span>. Register them in{' '}
              <span className="doc-inline-code">src/data/components.tsx</span> with a{' '}
              <span className="doc-inline-code">preview</span> node and a{' '}
              <span className="doc-inline-code">Playground</span> component — they appear on the
              Components page automatically.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
