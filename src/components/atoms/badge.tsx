import './badge.css'

type BadgeVariant = 'default' | 'success' | 'warning' | 'error'

type BadgeProps = {
  label: string
  variant?: BadgeVariant
  className?: string
}

export default function Badge({
  label,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`badge badge--${variant} ${className}`.trim()}
      role="status"
    >
      {label}
    </span>
  )
}
