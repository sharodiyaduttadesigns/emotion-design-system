import './badge.css'

type BadgeVariant = 'default' | 'success' | 'warning' | 'error'

type BadgeProps = {
  label: string
  variant?: BadgeVariant
  pulse?: boolean
  className?: string
}

export default function Badge({ label, variant = 'default', pulse = false, className = '' }: BadgeProps) {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()} role="status">
      {pulse && <span className="badge__dot" aria-hidden />}
      {label}
    </span>
  )
}
