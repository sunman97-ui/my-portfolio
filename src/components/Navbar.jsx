import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'var(--transition)',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px',
      }}>

        {/* Brand */}
        <span style={{
          fontSize: '1.1rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          letterSpacing: '-0.3px',
        }}>
          John <span style={{ color: 'var(--accent)' }}>Spencer</span>
        </span>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
          listStyle: 'none',
        }}
          className="desktop-nav"
        >
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-68}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-68}
            >
              <button className="btn btn-primary" style={{ padding: '9px 22px', fontSize: '0.9rem' }}>
                Hire Me
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            display: 'none',
            fontSize: '1.5rem',
            padding: '4px',
          }}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.98)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}
          className="mobile-nav"
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-68}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Hire Me
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}