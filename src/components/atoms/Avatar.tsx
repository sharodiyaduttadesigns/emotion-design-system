import './Avatar.css'

type AvatarSize = 'sm' | 'md' | 'lg'
type AvatarStatus = 'online' | 'offline' | 'busy'

type AvatarProps = {
  initials: string
  size?: AvatarSize
  status?: AvatarStatus
  className?: string
}

export default function Avatar({ initials, size = 'md', status, className = '' }: AvatarProps) {
  return (
    <div className={`avatar-wrapper avatar-wrapper--${size}`}>
      <div
        className={`avatar avatar--${size} ${className}`.trim()}
        role="img"
        aria-label={`Avatar for ${initials}`}
      >
        <span className="avatar__initials">{initials.slice(0, 2).toUpperCase()}</span>
      </div>
      {status && (
        <span
          className={`avatar__status avatar__status--${status}`}
          aria-label={status}
        />
      )}
    </div>
  )
}
