import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      backgroundColor: 'var(--text-primary)',
      color: '#ffffff',
      padding: '48px 24px 32px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>

        {/* Top Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>

          {/* Brand */}
          <div>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '6px',
            }}>
              John <span style={{ color: 'var(--accent)' }}>Spencer</span>
            </p>
            <p style={{
              fontSize: '0.85rem',
              color: '#94A3B8',
              maxWidth: '280px',
              lineHeight: '1.6',
            }}>
              CNC Programmer and Software Developer bridging manufacturing and modern software.
            </p>
          </div>

          {/* Social Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <a
              href="https://github.com/sunman97-ui"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94A3B8',
                fontSize: '1.1rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--accent)'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = '#94A3B8'
              }}
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/john-s-30b2841b3"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94A3B8',
                fontSize: '1.1rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--accent)'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = '#94A3B8'
              }}
            >
              <FiLinkedin />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              title="Back to top"
            >
              <FiArrowUp />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(255,255,255,0.08)',
        }} />

        {/* Bottom Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
            {new Date().getFullYear()} John Spencer. Built with React and Vite.
          </p>
          <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
            Designed and built by John Spencer
          </p>
        </div>

      </div>
    </footer>
  )
}