import { useState } from 'react'

export default function Privacy() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem('privacy-notice-dismissed')
  )

  const dismiss = () => {
    localStorage.setItem('privacy-notice-dismissed', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'var(--text-primary)',
      color: '#ffffff',
      padding: '16px 24px',
      borderRadius: 'var(--radius)',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      zIndex: 9998,
      maxWidth: '560px',
      width: 'calc(100% - 48px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    }}>
      <p style={{
        fontSize: '0.85rem',
        color: '#94A3B8',
        lineHeight: '1.6',
        margin: 0,
        flex: 1,
      }}>
        This site collects anonymous visit data including approximate location
        for research purposes. No personally identifiable information is stored.
      </p>
      <button
        onClick={dismiss}
        style={{
          backgroundColor: 'var(--accent)',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          fontSize: '0.82rem',
          fontWeight: '600',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Got it
      </button>
    </div>
  )
}