import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { navigation } from '../data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = []
    navigation.links.forEach(({ to }) => {
      const el = document.getElementById(to)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(to)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  const navStyles = {
    backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : 'none',
  }

  return (
    <nav className="navbar" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'var(--transition)',
      padding: '0 24px',
      ...navStyles
    }}>
      <div className="navbar-container" style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px',
      }}>
        <span className="navbar-brand" style={{
          fontSize: '1.1rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          letterSpacing: '-0.3px',
        }}>
          {navigation.brand.first} <span style={{ color: 'var(--accent)' }}>{navigation.brand.last}</span>
        </span>

        <ul className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
          listStyle: 'none',
        }}>
          {navigation.links.map(link => {
            const isActive = activeSection === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-68}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                >
                  {link.label}
                  {isActive && <span className="nav-indicator" style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '0',
                    right: '0',
                    height: '2px',
                    backgroundColor: 'var(--accent)',
                    borderRadius: '999px',
                  }} />}
                </Link>
              </li>
            )
          })}
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-68}>
              <button className="btn btn-primary" style={{ padding: '9px 22px', fontSize: '0.9rem' }}>
                {navigation.cta}
              </button>
            </Link>
          </li>
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-primary)',
          display: 'none',
          fontSize: '1.5rem',
          padding: '4px',
        }}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav" style={{
          backgroundColor: 'rgba(255,255,255,0.98)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {navigation.links.map(link => {
              const isActive = activeSection === link.to
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-68}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontSize: '1rem',
                      fontWeight: isActive ? '600' : '500',
                      color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  {navigation.cta}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
