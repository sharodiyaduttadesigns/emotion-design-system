import React from 'react'
import './DownloadButton.css'

type DownloadButtonProps = {
  href?: string
  download?: string
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function DownloadButton({
  href,
  download,
  children = 'Download',
  className = '',
  onClick,
}: DownloadButtonProps) {
  const content = (
    <>
      <span className="download-button__label">{children}</span>
      <span className="download-button__icon" aria-hidden>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
          <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 21H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </>
  )

  if (href) {
    return (
      <a
        className={`download-button__btn ${className}`.trim()}
        href={href}
        download={download}
        role="button"
        aria-label={typeof children === 'string' ? `${children} file` : 'Download'}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`download-button__btn ${className}`.trim()}
      onClick={onClick}
      aria-label={typeof children === 'string' ? `${children} file` : 'Download'}
    >
      {content}
    </button>
  )
}
