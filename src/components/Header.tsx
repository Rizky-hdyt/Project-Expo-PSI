import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

type Language = 'id' | 'en'

interface HeaderProps {
  darkMode?: boolean
  onDarkModeChange?: (value: boolean) => void
}

const translations = {
  id: {
    home: 'Beranda',
    quiz: 'Kuis',
    about: 'Tentang',
    admin: 'Admin',
    backToSite: '← Kembali ke situs',
  },
  en: {
    home: 'Home',
    quiz: 'Quiz',
    about: 'About',
    admin: 'Admin',
    backToSite: '← Back to Site',
  },
}

export default function Header({ darkMode = false, onDarkModeChange }: HeaderProps) {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>('id')

  const t = translations[language]

  const navItems = isAdmin
    ? [{ label: t.backToSite, href: '/' }]
    : [
        { label: t.home, href: '/' },
        { label: t.quiz, href: '/quiz' },
        { label: t.admin, href: '/admin' },
      ]

  return (
    <>
      <header className={`site-header ${darkMode ? 'site-header--dark' : ''}`}>
        <div className="container site-header__inner">
          <Link to="/" className="site-header__brand" onClick={() => setMobileMenuOpen(false)}>
            <span className="site-header__logo">FCI</span>
            <span className="site-header__name">
              Freelance City Index <span className="text-faint">· Yogyakarta</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="site-header__nav site-header__nav--desktop">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="site-header__controls">
            {/* Language Toggle */}
            <button
              className="icon-btn"
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              title={language === 'id' ? 'Switch to English' : 'Beralih ke Indonesia'}
              aria-label="Language toggle"
            >
              {language === 'id' ? '🇮🇩' : '🇬🇧'}
            </button>

            {/* Dark Mode Toggle */}
            <button
              className="icon-btn"
              onClick={() => onDarkModeChange?.(!darkMode)}
              title={darkMode ? 'Light mode' : 'Dark mode'}
              aria-label="Theme toggle"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="site-header__nav site-header__nav--mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="nav-link nav-link--mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />}
    </>
  )
}
