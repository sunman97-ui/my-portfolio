import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX, FiSun, FiMoon, FiSettings } from 'react-icons/fi'
import { navigation } from '../data/navigation'
import { useDarkMode } from '../hooks/useDarkMode'
import ExternalLink from './ui/ExternalLink'

function MarketplaceCTA({ link, mobile = false, onClick }) {
  if (!link?.url) return null
  const className = `btn btn-outline ${mobile ? 'mobile-nav-cta' : 'navbar-cta'}`
  return (
    <ExternalLink href={link.url} className={className} onClick={onClick}>
      {link.label}
    </ExternalLink>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [theme, toggleTheme] = useDarkMode()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = []
    navigation.links.forEach(link => {
      if (!link.to) return
      const el = document.getElementById(link.to)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(link.to)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  const getThemeIcon = () => {
    if (theme === 'dark') return <FiMoon />
    if (theme === 'light') return <FiSun />
    return <FiSettings /> // For 'system'
  }

  const handleThemeToggle = () => {
    if (theme === 'system' || theme === 'light') toggleTheme('dark')
    else if (theme === 'dark') toggleTheme('light')
  }

  const promptLink = navigation.promptLink

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <span className="navbar-brand">
          {navigation.brand.first} <span>{navigation.brand.last}</span>
        </span>

        <ul className="desktop-nav">
          {navigation.links.map(link => {
            const isActive = activeSection === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-68}
                  className={`nav-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                  {isActive && <span className="nav-indicator" />}
                </Link>
              </li>
            )
          })}
          <li className="nav-theme-toggle">
            <button 
              onClick={handleThemeToggle} 
              className="theme-btn" 
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Current: ${theme}`}
            >
              {getThemeIcon()}
            </button>
          </li>
          {promptLink && (
            <li className="nav-link-cta">
              {/* Nav CTA + footer mention is the adopted approach; alternatives include promoting this marketplace in the hero or embedding it as its own section. */}
              <MarketplaceCTA link={promptLink} />
            </li>
          )}
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-68}>
              <button className="btn btn-primary navbar-cta">
                {navigation.cta}
              </button>
            </Link>
          </li>
        </ul>

        <div className="navbar-actions-mobile">
          <button 
            onClick={handleThemeToggle} 
            className="theme-btn mobile-theme-btn" 
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {getThemeIcon()}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" aria-label="Toggle navigation">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav">
        <ul className="mobile-nav-list">
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
                  className={`nav-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          {promptLink && (
            <li>
              <MarketplaceCTA link={promptLink} mobile onClick={() => setMenuOpen(false)} />
            </li>
          )}
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              <button className="btn btn-primary mobile-nav-cta">
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
