import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored
      return 'system'
    } catch {
      return 'system'
    }
  })

  useEffect(() => {
    const root = window.document.documentElement
    const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    
    const applyTheme = (currentTheme) => {
      if (currentTheme === 'dark' || (currentTheme === 'system' && supportDarkMode.matches)) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }

    applyTheme(theme)

    const listener = (e) => {
      if (theme === 'system') {
        if (e.matches) root.classList.add('dark')
        else root.classList.remove('dark')
      }
    }

    supportDarkMode.addEventListener('change', listener)
    return () => supportDarkMode.removeEventListener('change', listener)
  }, [theme])

  const toggleTheme = (newTheme) => {
    setTheme(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch {
      // Ignore storage errors in private browsing
    }
  }

  return [theme, toggleTheme]
}
