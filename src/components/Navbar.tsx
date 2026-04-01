import { useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import { personalInfo } from '../data/index'
import { useActiveSection } from '../hooks/useActiveSection'
import { colors, transitions } from '../constants/styles'

const links = [
  { label: 'About',      href: '#about'    },
  { label: 'Skills',     href: '#skills'   },
  { label: 'Projects',   href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Career',   href: '#career'   },
  { label: 'Contact',    href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const activeSection = useActiveSection()
  const headerRef                 = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close menu on ESC */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <header
      ref={headerRef}
      style={{
        position:   'fixed',
        top:        0,
        left:       0,
        right:      0,
        zIndex:     100,
        padding:    '0 5vw',
        height:     '68px',
        display:    'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: `background ${transitions.smooth}, backdrop-filter ${transitions.smooth}, box-shadow ${transitions.smooth}`,
        background:   scrolled ? `rgba(5,1,15,0.9)` : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${colors.border}` : 'none',
        boxShadow: scrolled ? `0 4px 20px rgba(0,0,0,0.2)` : 'none',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, transition: `transform ${transitions.base}` }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.style.transform = '')}
      >
        <span style={{
          width: 36, height: 36, borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentAlt})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 15, fontWeight: 800, color: '#fff', fontFamily: 'var(--font-main)',
          boxShadow: `0 0 16px ${colors.accentGlow}`,
        }}>T</span>
        <span style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 16, color: '#fff' }}>
          Takbir
        </span>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
        {links.map(l => {
          const isActive = activeSection === l.href.slice(1)
          return (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: 14,
                fontWeight: 500,
                color: isActive ? colors.accent : 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: `color ${transitions.base}`,
                letterSpacing: '0.02em',
                position: 'relative',
                paddingBottom: 4,
              }}
              onMouseEnter={e => {
                if (!isActive) e.currentTarget.style.color = colors.accent
              }}
              onMouseLeave={e => {
                if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
            >
              {l.label}
              {isActive && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${colors.accent}, ${colors.accentAlt})`,
                  borderRadius: 99,
                  animation: 'slideIn 0.3s ease-out',
                }} />
              )}
            </a>
          )
        })}
        <div style={{ display: 'flex', gap: 12, marginLeft: 8 }}>
          {[
            { icon: <FiGithub size={18} />, href: personalInfo.github },
            { icon: <FiLinkedin size={18} />, href: personalInfo.linkedin },
          ].map(({ icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.55)', transition: `color ${transitions.base}, transform ${transitions.base}`, display: 'flex', alignItems: 'center' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = colors.accent
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                e.currentTarget.style.transform = ''
              }}
            >{icon}</a>
          ))}
        </div>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
        className="hamburger"
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: 68, background: `rgba(5,1,15,0.98)`,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 36, zIndex: 99,
          backdropFilter: 'blur(10px)',
        }}>
          {links.map(l => {
            const isActive = activeSection === l.href.slice(1)
            return (
              <a key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: 24,
                  fontWeight: 600,
                  color: isActive ? colors.accent : '#fff',
                  textDecoration: 'none',
                  transition: `color ${transitions.base}`,
                }}
              >{l.label}</a>
            )
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        @keyframes slideIn {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </header>
  )
}
