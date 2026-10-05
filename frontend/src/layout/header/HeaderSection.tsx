import { useEffect, useState } from 'react'
import './HeaderSection.css'

const navigationItems = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#latest-release', id: 'latest-release', label: 'Music' },
  { href: '#shows', id: 'shows', label: 'Shows' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export function HeaderSection() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    function setActiveSectionFromHash() {
      const sectionId = window.location.hash.slice(1)
      const hasMatchingNavigationItem = navigationItems.some(({ id }) => id === sectionId)

      if (hasMatchingNavigationItem) {
        setActiveSection(sectionId)
      }
    }

    setActiveSectionFromHash()
    window.addEventListener('hashchange', setActiveSectionFromHash)

    if (!sections.length) {
      return () => window.removeEventListener('hashchange', setActiveSectionFromHash)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((firstEntry, secondEntry) => secondEntry.intersectionRatio - firstEntry.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-32% 0px -56% 0px',
        threshold: [0, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', setActiveSectionFromHash)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    function updateScrolledState() {
      setIsScrolled(window.scrollY > 24)
    }

    updateScrolledState()
    window.addEventListener('scroll', updateScrolledState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolledState)
  }, [])

  return (
    <header className="site-header" data-scrolled={isScrolled || isMenuOpen}>
      <div className="site-header__inner section-container">
        <button
          className="site-header__toggle"
          type="button"
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span className="site-header__toggle-line" aria-hidden="true" />
          <span className="site-header__toggle-line" aria-hidden="true" />
          <span className="site-header__toggle-line" aria-hidden="true" />
        </button>

        <nav
          className="site-header__nav"
          data-open={isMenuOpen}
          id="site-navigation"
          aria-label="Primary navigation"
        >
          <ul className="site-header__list">
            {navigationItems.map(({ href, id, label }) => {
              const isActive = activeSection === id

              return (
                <li className="site-header__item" key={id}>
                  <a
                    className="site-header__link"
                    data-active={isActive}
                    href={href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
