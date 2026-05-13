import { useState, useEffect } from 'react'
import './App.css'
import Badge from './components/atoms/badge'
import Avatar from './components/atoms/Avatar'
import Alert from './components/atoms/Alert'
import DownloadButton from './components/atoms/DownloadButton'
import Toggle from './components/atoms/Toggle'

// ─── Playground components ────────────────────────────────────────────────────

function BadgePlayground() {
  const [label, setLabel] = useState('In Review')
  const [variant, setVariant] = useState<'default' | 'success' | 'warning' | 'error'>('default')
  const [pulse, setPulse] = useState(false)

  return (
    <div className="playground">
      <div className="playground-preview">
        <Badge label={label} variant={variant} pulse={pulse} />
      </div>
      <div className="playground-controls">
        <div className="control-group">
          <span className="control-label">Label</span>
          <input className="control-input" value={label} onChange={(e) => setLabel(e.target.value)} />
        </div>
        <div className="control-group">
          <span className="control-label">Variant</span>
          <div className="control-options">
            {(['default', 'success', 'warning', 'error'] as const).map((v) => (
              <button key={v} className={`control-btn ${variant === v ? 'active' : ''}`} onClick={() => setVariant(v)}>{v}</button>
            ))}
          </div>
        </div>
        <div className="control-group">
          <label className="control-checkbox">
            <input type="checkbox" checked={pulse} onChange={(e) => setPulse(e.target.checked)} />
            Pulse animation
          </label>
        </div>
      </div>
    </div>
  )
}

function AvatarPlayground() {
  const [initials, setInitials] = useState('JD')
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [status, setStatus] = useState<'online' | 'offline' | 'busy' | 'none'>('online')

  return (
    <div className="playground">
      <div className="playground-preview">
        <Avatar initials={initials} size={size} status={status === 'none' ? undefined : status} />
      </div>
      <div className="playground-controls">
        <div className="control-group">
          <span className="control-label">Initials</span>
          <input className="control-input" value={initials} maxLength={2} onChange={(e) => setInitials(e.target.value)} />
        </div>
        <div className="control-group">
          <span className="control-label">Size</span>
          <div className="control-options">
            {(['sm', 'md', 'lg'] as const).map((s) => (
              <button key={s} className={`control-btn ${size === s ? 'active' : ''}`} onClick={() => setSize(s)}>{s}</button>
            ))}
          </div>
        </div>
        <div className="control-group">
          <span className="control-label">Status</span>
          <div className="control-options">
            {(['online', 'offline', 'busy', 'none'] as const).map((s) => (
              <button key={s} className={`control-btn ${status === s ? 'active' : ''}`} onClick={() => setStatus(s)}>{s}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AlertPlayground() {
  const [type, setType] = useState<'info' | 'success' | 'warning' | 'error'>('info')
  const [message, setMessage] = useState('Your changes have been saved.')
  const [visible, setVisible] = useState(true)

  return (
    <div className="playground">
      <div className="playground-preview">
        {visible ? (
          <Alert message={message} type={type} onDismiss={() => setVisible(false)} />
        ) : (
          <button className="control-reset-btn" onClick={() => setVisible(true)}>↺ Show alert again</button>
        )}
      </div>
      <div className="playground-controls">
        <div className="control-group">
          <span className="control-label">Message</span>
          <input className="control-input" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="control-group">
          <span className="control-label">Type</span>
          <div className="control-options">
            {(['info', 'success', 'warning', 'error'] as const).map((t) => (
              <button
                key={t}
                className={`control-btn ${type === t ? 'active' : ''}`}
                onClick={() => { setType(t); setVisible(true) }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TogglePlayground() {
  const [label, setLabel] = useState('Enable notifications')
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [disabled, setDisabled] = useState(false)

  return (
    <div className="playground">
      <div className="playground-preview">
        <Toggle label={label} size={size} disabled={disabled} />
      </div>
      <div className="playground-controls">
        <div className="control-group">
          <span className="control-label">Label</span>
          <input className="control-input" value={label} onChange={(e) => setLabel(e.target.value)} />
        </div>
        <div className="control-group">
          <span className="control-label">Size</span>
          <div className="control-options">
            {(['sm', 'md', 'lg'] as const).map((s) => (
              <button key={s} className={`control-btn ${size === s ? 'active' : ''}`} onClick={() => setSize(s)}>{s}</button>
            ))}
          </div>
        </div>
        <div className="control-group">
          <label className="control-checkbox">
            <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
            Disabled
          </label>
        </div>
      </div>
    </div>
  )
}

function DownloadButtonPlayground() {
  const [label, setLabel] = useState('Download Report')
  const [clicks, setClicks] = useState(0)

  return (
    <div className="playground">
      <div className="playground-preview" style={{ flexDirection: 'column', gap: '12px' }}>
        <DownloadButton onClick={() => setClicks((c) => c + 1)}>{label}</DownloadButton>
        {clicks > 0 && (
          <Badge label={`Downloaded ${clicks} time${clicks !== 1 ? 's' : ''}`} variant="success" pulse />
        )}
      </div>
      <div className="playground-controls">
        <div className="control-group">
          <span className="control-label">Label</span>
          <input className="control-input" value={label} onChange={(e) => setLabel(e.target.value)} />
        </div>
        {clicks > 0 && (
          <div className="control-group">
            <button className="control-reset-btn" onClick={() => setClicks(0)}>↺ Reset counter</button>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Component definitions ────────────────────────────────────────────────────

const COMPONENTS = [
  {
    id: 'all',
    name: 'All components',
  },
  {
    id: 'badge',
    name: 'Badge',
    description: 'Small labels to highlight status or category — default, success, warning, and error variants with an optional live pulse indicator.',
    preview: (
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Badge label="Default" />
        <Badge label="Success" variant="success" />
        <Badge label="Warning" variant="warning" />
        <Badge label="Error" variant="error" />
        <Badge label="Live" variant="success" pulse />
      </div>
    ),
    playground: <BadgePlayground />,
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'Display user initials in three sizes with an optional status indicator dot — online, offline, or busy.',
    preview: (
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
        <Avatar initials="JD" size="sm" status="online" />
        <Avatar initials="AB" size="md" status="busy" />
        <Avatar initials="XY" size="lg" status="offline" />
      </div>
    ),
    playground: <AvatarPlayground />,
  },
  {
    id: 'alert',
    name: 'Alert',
    description: 'Contextual banners for info, success, warning, and error states — each with a distinct icon, color, and optional dismiss button.',
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <Alert message="Info: your session expires in 30 min." type="info" />
        <Alert message="Success: profile updated." type="success" />
        <Alert message="Warning: storage almost full." type="warning" />
        <Alert message="Error: failed to save changes." type="error" />
      </div>
    ),
    playground: <AlertPlayground />,
  },
  {
    id: 'toggle',
    name: 'Toggle',
    description: 'Animated on/off switch for boolean settings — three sizes, disabled state, and a springy thumb transition.',
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
        <Toggle label="Dark mode" size="sm" defaultChecked />
        <Toggle label="Notifications" size="md" />
        <Toggle label="Auto-save" size="lg" defaultChecked />
      </div>
    ),
    playground: <TogglePlayground />,
  },
  {
    id: 'button',
    name: 'Download Button',
    description: 'Primary action button for file downloads with a built-in icon and interactive click feedback.',
    preview: (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DownloadButton href="/" download="sample.txt">Download sample</DownloadButton>
      </div>
    ),
    playground: <DownloadButtonPlayground />,
  },
]

const DISPLAY_COMPONENTS = COMPONENTS.filter((c) => c.id !== 'all') as Array<{
  id: string
  name: string
  description: string
  preview: React.ReactNode
  playground: React.ReactNode
}>

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [selectedId, setSelectedId] = useState('all')
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  const [activeTabs, setActiveTabs] = useState<Record<string, 'preview' | 'props'>>({})

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const getTab = (id: string) => activeTabs[id] ?? 'preview'
  const setTab = (id: string, tab: 'preview' | 'props') =>
    setActiveTabs((prev) => ({ ...prev, [id]: tab }))

  const displayed =
    selectedId === 'all'
      ? DISPLAY_COMPONENTS
      : DISPLAY_COMPONENTS.filter((c) => c.id === selectedId)

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="header-title">Emotion Design System</h1>
          <button
            className="theme-toggle"
            onClick={() => setIsDark((v) => !v)}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              /* Sun */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon */
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="main-content">
        {/* Hero */}
        <section className="hero-section">
          <h2 className="hero-title">Components</h2>
          <p className="hero-subtitle">{DISPLAY_COMPONENTS.length} components available</p>
          <p className="hero-description">
            A set of reusable, accessible atoms built with React — each with live prop controls you can play with below.
          </p>

          {/* Dropdown filter */}
          <div className="component-filter">
            <span className="filter-label">Browse</span>
            <div className="selector-wrapper">
              <select
                className="selector-select"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                aria-label="Select component"
              >
                {COMPONENTS.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              <svg className="selector-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className={`components-grid ${selectedId !== 'all' ? 'single-view' : ''}`}>
          {displayed.map((comp) => {
            const tab = getTab(comp.id)
            return (
              <article key={comp.id} id={comp.id} className="component-card">
                <div className="card-accent-bar" />
                <div className="card-header">
                  <div className="card-title-row">
                    <h3 className="card-title">{comp.name}</h3>
                    <span className="card-type-pill">atom</span>
                  </div>
                  <div className="card-tabs">
                    <button className={`card-tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab(comp.id, 'preview')}>Preview</button>
                    <button className={`card-tab ${tab === 'props' ? 'active' : ''}`} onClick={() => setTab(comp.id, 'props')}>Props</button>
                  </div>
                </div>
                <p className="card-description">{comp.description}</p>
                <div className="card-preview">
                  {tab === 'preview' ? comp.preview : comp.playground}
                </div>
              </article>
            )
          })}
        </section>
      </main>
    </div>
  )
}

export default App
