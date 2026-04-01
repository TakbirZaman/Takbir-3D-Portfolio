import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'
import { useReveal } from '../../hooks/useReveal'
import { skills, type Skill } from '../../data/index'

function SpinningCube() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({clock})=>{ if(ref.current){ref.current.rotation.x=clock.elapsedTime*0.4;ref.current.rotation.y=clock.elapsedTime*0.6} })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.6,1.6,1.6]}/>
      <meshStandardMaterial color="#7c3aed" transparent opacity={0.4} metalness={0.9} roughness={0.1}/>
      <mesh>
        <boxGeometry args={[1.65,1.65,1.65]}/>
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.35}/>
      </mesh>
    </mesh>
  )
}

const categories = ['All','Languages','Web & Frameworks','Databases','Data Science & ML','Tools'] as const

export default function Skills() {
  const ref = useReveal()
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const filtered = activeCategory === 'All' ? skills : skills.filter((s:Skill) => s.category === activeCategory)

  return (
    <section id="skills" style={{background:'linear-gradient(180deg,var(--bg) 0%,rgba(13,9,32,0.9) 100%)'}}>
      <div className="section" ref={ref}>
        <div className="glow-blob" style={{width:400,height:400,background:'#06b6d4',top:'20%',right:'-5%'}}/>
        <div className="reveal" style={{position:'relative',zIndex:1}}>
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:48,alignItems:'start',position:'relative',zIndex:1}}>
          {/* 3D cube */}
          <div className="reveal">
            <div style={{height:250,borderRadius:'var(--radius)',overflow:'hidden',marginBottom:24}}>
              <Suspense fallback={null}>
                <Canvas camera={{position:[0,0,4]}} gl={{alpha:true}}>
                  <ambientLight intensity={0.4}/>
                  <pointLight position={[3,3,3]} intensity={1.5} color="#7c3aed"/>
                  <pointLight position={[-3,-3,3]} intensity={0.8} color="#06b6d4"/>
                  <Stars radius={30} depth={20} count={500} factor={2} fade speed={0.5}/>
                  <SpinningCube/>
                </Canvas>
              </Suspense>
            </div>
            <div className="glass" style={{padding:24}}>
              <p style={{fontSize:15,lineHeight:1.75,color:'rgba(255,255,255,0.6)'}}>
                I work across the full stack — from React frontends and Node.js backends to ASP.NET Core APIs and Python ML pipelines. Always learning, always shipping.
              </p>
            </div>
          </div>
          {/* Skills grid */}
          <div>
            <div className="reveal" style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:28}}>
              {categories.map(cat=>(
                <button key={cat} onClick={()=>setActiveCategory(cat)} style={{padding:'6px 16px',borderRadius:99,cursor:'pointer',fontFamily:'var(--font-main)',fontWeight:500,fontSize:13,transition:'all 0.2s',background:activeCategory===cat?'linear-gradient(135deg,#7c3aed,#06b6d4)':'rgba(255,255,255,0.05)',border:activeCategory===cat?'none':'1px solid rgba(255,255,255,0.1)',color:activeCategory===cat?'#fff':'rgba(255,255,255,0.5)'}}>
                  {cat}
                </button>
              ))}
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:12}}>
              {filtered.map((skill:Skill)=>(
                <div key={skill.name} className="glass reveal"
                  style={{padding:'10px 18px',borderRadius:99,display:'flex',alignItems:'center',gap:10,transition:'transform 0.2s,box-shadow 0.2s',cursor:'default',borderColor:`${skill.color}30`}}
                  onMouseEnter={e=>{const el=e.currentTarget;el.style.transform='translateY(-3px)';el.style.boxShadow=`0 8px 24px ${skill.color}30`;el.style.borderColor=`${skill.color}60`}}
                  onMouseLeave={e=>{const el=e.currentTarget;el.style.transform='';el.style.boxShadow='';el.style.borderColor=`${skill.color}30`}}
                >
                  <span style={{fontSize:16}}>{skill.icon}</span>
                  <span style={{fontFamily:'var(--font-main)',fontWeight:500,fontSize:14,color:'#fff'}}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
