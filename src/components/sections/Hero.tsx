import { useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiArrowDown, FiMail } from 'react-icons/fi'
import { personalInfo } from '../../data/index'
import HeroScene from '../3d/HeroScene'
import { Suspense } from 'react'

const taglines = personalInfo.taglines

export default function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0)
  const [displayed, setDisplayed]   = useState('')
  const [typing, setTyping]         = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = taglines[taglineIdx]
    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setTaglineIdx((i) => (i + 1) % taglines.length)
        setTyping(true)
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayed, typing, taglineIdx])

  return (
    <section
      id="hero"
      style={{
        position:   'relative',
        minHeight:  '100vh',
        display:    'flex',
        alignItems: 'center',
        overflow:   'hidden',
      }}
    >
      {/* 3D Canvas */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 60% 50%, transparent 30%, var(--bg) 100%)',
        pointerEvents: 'none', zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
        background: 'linear-gradient(to top, var(--bg), transparent)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Text content + Image Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '0 5vw',
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: '80px',
        alignItems: 'center',
        maxWidth: '1400px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        {/* Text Content */}
        <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)',
          borderRadius: 99, padding: '6px 16px', marginBottom: 28,
          fontSize: 13, fontWeight: 500, color: '#a855f7', letterSpacing: '0.05em',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
          Available for opportunities
        </div>

        <h1 style={{
          fontFamily: 'var(--font-main)',
          fontSize: 'clamp(2.4rem, 6vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: 16,
        }}>
          <span style={{ color: '#fff' }}>Hi, I'm </span>
          <span style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Takbir</span>
        </h1>

        <div style={{
          fontFamily: 'var(--font-main)',
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.75)',
          marginBottom: 24,
          minHeight: '2.5rem',
          display: 'flex', alignItems: 'center', gap: 2,
        }}>
          <span>{displayed}</span>
          <span style={{
            display: 'inline-block', width: 2, height: '1.2em',
            background: '#a855f7', marginLeft: 2,
            animation: 'blink 1s steps(1) infinite',
          }} />
        </div>

        <p style={{
          fontSize: 17, lineHeight: 1.75,
          color: 'rgba(255,255,255,0.55)',
          maxWidth: 520, marginBottom: 40,
        }}>
          {personalInfo.bio}
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
          <a href="#projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            color: '#fff', textDecoration: 'none',
            padding: '13px 28px', borderRadius: 99,
            fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 15,
            boxShadow: '0 0 24px rgba(124,58,237,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.6)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 24px rgba(124,58,237,0.4)' }}
          >
            View My Work
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', textDecoration: 'none',
            padding: '13px 28px', borderRadius: 99,
            fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 15,
            transition: 'border-color 0.2s, background 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = 'rgba(124,58,237,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent' }}
          >
            <FiMail size={16} /> Contact Me
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          {[
            { icon: <FiGithub size={20} />, href: personalInfo.github,   label: 'GitHub' },
            { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
                fontSize: 14, fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >{icon} {label}</a>
          ))}
        </div>
        </div>

        {/* Profile Image */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: '1000px',
          marginLeft: '80px',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '1',
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            padding: '3px',
            animation: 'float 3s ease-in-out infinite',
          }}>
            <img
              src="/takbir2.jpg"
              alt="Takbir Zaman"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '18px',
                display: 'block',
              }}
            />
            {/* Glow effect */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(124,58,237,0.4), transparent)',
              borderRadius: '18px',
              pointerEvents: 'none',
            }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        zIndex: 2, color: 'rgba(255,255,255,0.3)', fontSize: 12,
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontFamily: 'var(--font-main)', letterSpacing: '0.1em' }}>SCROLL</span>
        <FiArrowDown size={16} />
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }

        @media (max-width: 1024px) {
          #hero > div:last-of-type {
            gridTemplateColumns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
