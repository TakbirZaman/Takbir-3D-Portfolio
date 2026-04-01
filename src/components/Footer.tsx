import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid rgba(255,255,255,0.06)',padding:'32px 5vw',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
      <div style={{fontFamily:'var(--font-main)',fontSize:14,color:'rgba(255,255,255,0.35)'}}>
        © {new Date().getFullYear()} Takbir Zaman Bhuiyan · Dhaka, Bangladesh
      </div>
      <div style={{fontSize:13,color:'rgba(255,255,255,0.3)',display:'flex',alignItems:'center',gap:4}}>
        BSc CSE · AIUB · Built with <FiHeart size={11} color="#a855f7" style={{margin:'0 2px'}}/> React + Three.js
      </div>
      <div style={{display:'flex',gap:16}}>
        {[
          {icon:<FiGithub size={18}/>,  href:'https://github.com/TakbirZaman'},
          {icon:<FiLinkedin size={18}/>,href:'https://www.linkedin.com/in/takbir-zaman-bhuiyan'},
        ].map(({icon,href},i)=>(
          <a key={i} href={href} target="_blank" rel="noreferrer"
            style={{color:'rgba(255,255,255,0.3)',transition:'color 0.2s'}}
            onMouseEnter={e=>(e.currentTarget.style.color='#a855f7')}
            onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.3)')}
          >{icon}</a>
        ))}
      </div>
    </footer>
  )
}
