import { useState } from 'react'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'
import { useReveal } from '../../hooks/useReveal'
import { projects, type Project } from '../../data/index'
import { colors, transitions } from '../../constants/styles'

const categoryColors: Record<string, string> = {
  'Web':      '#06b6d4',
  'ML/AI':    '#a855f7',
  'Game':     '#22c55e',
  'API':      '#f59e0b',
  'Data':     '#ec4899',
  'Systems':  '#14b8a6',
  'Graphics': '#f97316',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const color = categoryColors[project.category] ?? '#7c3aed'

  return (
    <div
      className="glass reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-8px) scale(1.01)' : 'none',
        boxShadow: hovered ? `0 20px 60px ${color}25` : 'none',
        borderColor: hovered ? `${color}40` : 'var(--border)',
        position: 'relative',
        overflow: 'hidden',
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div style={{
          position: 'absolute', top: 16, right: 16,
          display: 'flex', alignItems: 'center', gap: 4,
          background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)',
          borderRadius: 99, padding: '3px 10px',
          fontSize: 11, color: '#a855f7', fontWeight: 600,
        }}>
          <FiStar size={10} /> Featured
        </div>
      )}

      {/* Glow strip at top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />

      {/* Category badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-main)',
          color: color, background: `${color}18`,
          padding: '4px 12px', borderRadius: 99,
        }}>{project.category}</span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 19,
        color: '#fff', lineHeight: 1.3,
      }}>{project.title}</h3>

      {/* Description */}
      <p style={{
        fontSize: 14, lineHeight: 1.75,
        color: 'rgba(255,255,255,0.55)',
        flex: 1,
      }}>{project.description}</p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontSize: 11, fontWeight: 500, fontFamily: 'var(--font-main)',
            color: 'rgba(255,255,255,0.5)',
            background: 'rgba(255,255,255,0.06)',
            padding: '3px 10px', borderRadius: 99,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>{t}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: `linear-gradient(135deg, ${color}cc, ${color}88)`,
              color: '#fff', textDecoration: 'none',
              padding: '8px 18px', borderRadius: 99,
              fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-main)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          ><FiExternalLink size={13} /> Live Demo</a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
              padding: '8px 18px', borderRadius: 99,
              fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-main)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
          ><FiGithub size={13} /> Code</a>
        )}
      </div>
    </div>
  )
}

const categories = ['All', 'API', 'Web', 'ML/AI', 'Game', 'Data', 'Systems', 'Graphics'] as const

export default function Projects() {
  const ref = useReveal()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="glow-blob" style={{ width: 500, height: 500, background: '#7c3aed', bottom: '10%', right: '-10%' }} />
      <div className="glow-blob" style={{ width: 300, height: 300, background: '#06b6d4', top: '20%', left: '-5%' }} />

      <div className="reveal" style={{ position: 'relative', zIndex: 1 }}>
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />
      </div>

      {/* Category filter */}
      <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40, position: 'relative', zIndex: 1 }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '10px 22px',
              borderRadius: 99,
              cursor: 'pointer',
              fontFamily: 'var(--font-main)',
              fontWeight: 600,
              fontSize: 14,
              transition: `all ${transitions.base}`,
              background: active === cat ? `linear-gradient(135deg, ${colors.accent}, ${colors.accentAlt})` : `rgba(255,255,255,0.05)`,
              border: active === cat ? 'none' : `1px solid ${colors.border}`,
              color: active === cat ? '#fff' : 'rgba(255,255,255,0.6)',
              textTransform: 'capitalize',
              transform: 'translateY(0)',
            }}
            onMouseEnter={e => {
              if (active !== cat) {
                e.currentTarget.style.background = `rgba(255,255,255,0.1)`
                e.currentTarget.style.color = '#fff'
              }
            }}
            onMouseLeave={e => {
              if (active !== cat) {
                e.currentTarget.style.background = `rgba(255,255,255,0.05)`
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards grid with smooth transitions */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 24,
        position: 'relative',
        zIndex: 1,
        animation: 'fadeIn 0.4s ease-in-out',
      }} >
        {filtered.length > 0 ? (
          filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))
        ) : (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '60px 20px',
            color: 'rgba(255,255,255,0.4)',
            fontSize: 16,
          }}>
            No projects found in this category
          </div>
        )}
      </div>

      {/* GitHub link */}
      <div className="reveal" style={{ textAlign: 'center', marginTop: 56, position: 'relative', zIndex: 1 }}>
        <a
          href="https://github.com/TakbirZaman"
          target="_blank" rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            border: '1px solid rgba(124,58,237,0.4)',
            background: 'rgba(124,58,237,0.08)',
            color: '#a855f7', textDecoration: 'none',
            padding: '14px 32px', borderRadius: 99,
            fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 15,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.2)'; e.currentTarget.style.borderColor = '#a855f7' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.08)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)' }}
        >
          <FiGithub size={18} /> See all projects on GitHub
        </a>
      </div>
    </section>
  )
}
