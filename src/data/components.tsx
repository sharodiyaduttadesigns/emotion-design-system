import { useState } from 'react'
import Badge from '../components/atoms/badge'
import Avatar from '../components/atoms/Avatar'
import Alert from '../components/atoms/Alert'
import DownloadButton from '../components/atoms/DownloadButton'
import Toggle from '../components/atoms/Toggle'

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

export type ComponentDef = {
  id: string
  name: string
  description: string
  preview: React.ReactNode
  Playground: React.ComponentType
}

export const COMPONENTS: ComponentDef[] = [
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
    Playground: BadgePlayground,
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
    Playground: AvatarPlayground,
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
    Playground: AlertPlayground,
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
    Playground: TogglePlayground,
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
    Playground: DownloadButtonPlayground,
  },
]
