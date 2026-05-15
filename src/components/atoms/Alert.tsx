import type { ReactElement } from 'react'
import './Alert.css'

type AlertType = 'info' | 'success' | 'warning' | 'error'

type AlertProps = {
  message: string
  type?: AlertType
  icon?: boolean
  onDismiss?: () => void
  className?: string
}

export default function Alert({
  message,
  type = 'info',
  icon = true,
  onDismiss,
  className = '',
}: AlertProps) {
  const icons: Record<AlertType, ReactElement> = {
    info: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    success: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    warning: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    error: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  }

  return (
    <div className={`alert alert--${type} ${className}`.trim()} role="alert">
      {icon && <span className="alert__icon" aria-hidden>{icons[type]}</span>}
      <span className="alert__message">{message}</span>
      {onDismiss && (
        <button type="button" className="alert__dismiss" onClick={onDismiss} aria-label="Dismiss">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}
