import React from 'react'
import './Avatar.css'

type AvatarSize = 'sm' | 'md' | 'lg'

type AvatarProps = {
  initials: string
  size?: AvatarSize
  className?: string
}

export default function Avatar({
  initials,
  size = 'md',
  className = '',
}: AvatarProps) {
  return (
    <div
      className={`avatar avatar--${size} ${className}`.trim()}
      role="img"
      aria-label={`Avatar for ${initials}`}
    >
      <span className="avatar__initials">{initials.slice(0, 2).toUpperCase()}</span>
    </div>
  )
}
