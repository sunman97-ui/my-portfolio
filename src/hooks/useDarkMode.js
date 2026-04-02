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

    const handleSystemChange = (e) => {
      if (theme === 'system') {
        if (e.matches) root.classList.add('dark')
        else root.classList.remove('dark')
      }
    }

    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        setTheme(e.newValue || 'system')
      }
    }

    supportDarkMode.addEventListener('change', handleSystemChange)
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      supportDarkMode.removeEventListener('change', handleSystemChange)
      window.removeEventListener('storage', handleStorageChange)
    }
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
