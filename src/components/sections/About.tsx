import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { personalInfo } from '../../data/index'
import { FiMapPin, FiAward, FiCode, FiBriefcase, FiMail } from 'react-icons/fi'

const infoRows = [
  { key: 'Education', val: 'BSc CSE, AIUB (2022–Present)',       href: undefined },
  { key: 'CGPA',      val: '3.75 / 4.0',                         href: undefined },
  { key: 'Location',  val: 'Dhaka, Bangladesh',                   href: undefined },
  { key: 'Email',     val: 'takbirzamanbhuiyan@gmail.com',        href: 'mailto:takbirzamanbhuiyan@gmail.com' },
  { key: 'Phone',     val: '01631-107100',                        href: 'tel:+8801631107100' },
  { key: 'GitHub',    val: 'github.com/TakbirZaman',              href: 'https://github.com/TakbirZaman' },
  { key: 'LinkedIn',  val: 'in/takbir-zaman-bhuiyan',             href: 'https://www.linkedin.com/in/takbir-zaman-bhuiyan' },
]

const stats = [
  { icon: <FiAward size={20}/>,     label: "Dean's Award", value: '2× Achieved'  },
  { icon: <FiCode size={20}/>,      label: 'CGPA',         value: '3.75 / 4.0' },
  { icon: <FiBriefcase size={20}/>, label: 'Internship',   value: 'NNSEL 2025' },
  { icon: <FiMapPin size={20}/>,    label: 'Location',     value: 'Dhaka, BD'  },
]

function Avatar() {
  const [imgSrc, setImgSrc] = useState<string | null>('/takbir.jpg')
  const [tried, setTried] = useState(0)

  const handleError = () => {
    if (tried === 0) { setImgSrc('/takbir1.jpg'); setTried(1) }
    else setImgSrc(null)
  }

  if (imgSrc) {
    return (
      <img
        src={imgSrc}
        alt="Takbir Zaman Bhuiyan"
        onError={handleError}
        style={{
          width: 140, height: 140, borderRadius: '50%',
          objectFit: 'cover', objectPosition: 'top',
          border: '3px solid transparent',
          backgroundImage: 'linear-gradient(var(--bg-card),var(--bg-card)), linear-gradient(135deg,#7c3aed,#06b6d4)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          boxShadow: '0 0 40px rgba(124,58,237,0.5)',
          display: 'block', margin: '0 auto 20px',
        }}
      />
    )
  }

  // Fallback letter avatar
  return (
    <div style={{
      width: 140, height: 140, borderRadius: '50%',
      background: 'linear-gradient(135deg,#7c3aed 0%,#06b6d4 100%)',
      margin: '0 auto 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 52, fontFamily: 'var(--font-main)', fontWeight: 800, color: '#fff',
      boxShadow: '0 0 40px rgba(124,58,237,0.5)',
    }}>T</div>
  )
}

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="section" ref={ref}>
      <div className="glow-blob" style={{width:500,height:500,background:'#7c3aed',top:'10%',left:'-10%'}}/>
      <div className="reveal">
        <p className="section-label">Get to know me</p>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:48,alignItems:'start',position:'relative',zIndex:1}}>
        {/* Left */}
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          <div className="glass reveal" style={{padding:32,textAlign:'center'}}>
            <Avatar/>
            <h3 style={{fontFamily:'var(--font-main)',fontWeight:700,fontSize:22,marginBottom:6,color:'#fff'}}>{personalInfo.name}</h3>
            <p style={{color:'#a855f7',fontWeight:500,fontSize:14,marginBottom:16}}>{personalInfo.title}</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:6,color:'rgba(255,255,255,0.45)',fontSize:13}}><FiMapPin size={13}/>{personalInfo.location}</div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            {stats.map((s,i)=>(
              <div key={i} className="glass reveal" style={{padding:'20px 16px',textAlign:'center'}}>
                <div style={{color:'#a855f7',marginBottom:8,display:'flex',justifyContent:'center'}}>{s.icon}</div>
                <div style={{fontFamily:'var(--font-main)',fontWeight:700,fontSize:16,color:'#fff',marginBottom:4}}>{s.value}</div>
                <div style={{fontSize:12,color:'rgba(255,255,255,0.4)',fontWeight:500}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div style={{display:'flex',flexDirection:'column',gap:28,position:'relative',zIndex:1}}>
          <div className="reveal">
            <p style={{fontSize:16,lineHeight:1.85,color:'rgba(255,255,255,0.7)',marginBottom:16}}>
              I'm a <strong style={{color:'#fff'}}>BSc Computer Science & Engineering student at American International University-Bangladesh (AIUB)</strong>, currently serving as a <strong style={{color:'#fff'}}>Software Engineer Intern at NN Services & Engineering Ltd (NNSEL)</strong>. Alongside maintaining strong academic performance, I focus on applying my knowledge in real-world software development.
            </p>
            <p style={{fontSize:16,lineHeight:1.85,color:'rgba(255,255,255,0.7)',marginBottom:16}}>
              My work centers around <strong style={{color:'#fff'}}>full-stack web development</strong>, building scalable and production-ready applications using <strong style={{color:'#fff'}}>React, Node.js, ASP.NET Core</strong>, and <strong style={{color:'#fff'}}>RESTful APIs</strong>, ensuring clean, maintainable, and performance-driven systems.
            </p>
            <p style={{fontSize:16,lineHeight:1.85,color:'rgba(255,255,255,0.7)'}}>
              I am passionate about <strong style={{color:'#a855f7'}}>machine learning and data-driven engineering</strong>, constantly expanding my skills to build intelligent, impactful solutions that solve real-world problems with efficiency and clean design.
            </p>
          </div>
          {/* Info table */}
          <div className="glass reveal" style={{padding:24,display:'flex',flexDirection:'column'}}>
            {infoRows.map((row,i)=>(
              <div key={i} style={{display:'flex',gap:16,padding:'11px 0',borderBottom:i<infoRows.length-1?'1px solid rgba(255,255,255,0.06)':'none',alignItems:'center'}}>
                <span style={{fontSize:11,fontWeight:700,color:'#a855f7',fontFamily:'var(--font-main)',minWidth:76,letterSpacing:'0.05em',textTransform:'uppercase'}}>{row.key}</span>
                {row.href?(
                  <a href={row.href} target={row.href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                    style={{fontSize:14,color:'rgba(255,255,255,0.65)',textDecoration:'none',transition:'color 0.2s',wordBreak:'break-all'}}
                    onMouseEnter={e=>(e.currentTarget.style.color='#a855f7')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.65)')}
                  >{row.val}</a>
                ):(
                  <span style={{fontSize:14,color:'rgba(255,255,255,0.65)'}}>{row.val}</span>
                )}
              </div>
            ))}
          </div>
          {/* Tags */}
          <div className="reveal" style={{display:'flex',flexWrap:'wrap',gap:10}}>
            {['Full-Stack Dev','REST APIs','React + Node.js','ASP.NET Core','Game Dev','ML & Data Science','Open Source','Agile'].map(tag=>(
              <span key={tag} style={{padding:'7px 16px',borderRadius:99,background:'rgba(124,58,237,0.12)',border:'1px solid rgba(124,58,237,0.3)',color:'#c084fc',fontSize:13,fontWeight:500}}>{tag}</span>
            ))}
          </div>
          <div className="reveal" style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:4}}>
            <a href="https://github.com/TakbirZaman" target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:8,background:'linear-gradient(135deg,#7c3aed,#06b6d4)',color:'#fff',textDecoration:'none',padding:'12px 24px',borderRadius:99,fontFamily:'var(--font-main)',fontWeight:600,fontSize:14}}>View GitHub →</a>
            <a href="mailto:takbirzamanbhuiyan@gmail.com" style={{display:'inline-flex',alignItems:'center',gap:8,border:'1px solid rgba(255,255,255,0.15)',color:'#fff',textDecoration:'none',padding:'12px 24px',borderRadius:99,fontFamily:'var(--font-main)',fontWeight:600,fontSize:14}}><FiMail size={14}/> Email Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
