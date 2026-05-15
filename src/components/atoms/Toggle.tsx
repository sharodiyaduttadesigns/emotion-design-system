import { useState } from 'react'
import './Toggle.css'

type ToggleSize = 'sm' | 'md' | 'lg'

type ToggleProps = {
  label?: string
  defaultChecked?: boolean
  disabled?: boolean
  size?: ToggleSize
  className?: string
}

export default function Toggle({
  label,
  defaultChecked = false,
  disabled = false,
  size = 'md',
  className = '',
}: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <label className={`toggle toggle--${size} ${disabled ? 'toggle--disabled' : ''} ${className}`.trim()}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={`toggle__track ${checked ? 'toggle__track--on' : ''}`}
        onClick={() => !disabled && setChecked((v) => !v)}
      >
        <span className="toggle__thumb" />
      </button>
      {label && <span className="toggle__label">{label}</span>}
    </label>
  )
}
