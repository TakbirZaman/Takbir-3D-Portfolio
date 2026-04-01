import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'
import { useReveal } from '../../hooks/useReveal'
import { timeline, education } from '../../data/index'
import { FiBriefcase, FiBook, FiStar } from 'react-icons/fi'

function OrbitDecor() {
  const group = useRef<THREE.Group>(null)
  useFrame(({clock})=>{ if(group.current) group.current.rotation.y = clock.elapsedTime*0.3 })
  return (
    <group ref={group}>
      {[0,1.2,2.4,3.6,4.8].map((angle,i)=>(
        <mesh key={i} position={[Math.cos(angle)*2, Math.sin(angle*0.7)*0.5, Math.sin(angle)*2]}>
          <sphereGeometry args={[0.08,8,8]}/>
          <meshStandardMaterial color={i%2===0?'#7c3aed':'#06b6d4'} emissive={i%2===0?'#7c3aed':'#06b6d4'} emissiveIntensity={0.5}/>
        </mesh>
      ))}
    </group>
  )
}

export default function Career() {
  const ref = useReveal()
  return (
    <section id="career" style={{background:'linear-gradient(180deg,rgba(13,9,32,0.9) 0%,var(--bg) 100%)'}}>
      <div className="section" ref={ref}>
        <div className="glow-blob" style={{width:400,height:400,background:'#7c3aed',top:0,left:'20%'}}/>
        <div className="reveal" style={{position:'relative',zIndex:1}}>
          <p className="section-label">My journey</p>
          <h2 className="section-title">Experience & Education</h2>
          <div className="section-divider"/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:48,alignItems:'start',position:'relative',zIndex:1}}>
          {/* Timeline */}
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            <p style={{fontSize:12,fontWeight:700,letterSpacing:'0.15em',color:'#a855f7',textTransform:'uppercase',marginBottom:24,fontFamily:'var(--font-main)'}}>Work Experience</p>
            {timeline.map((item,i)=>(
              <div key={i} className="reveal" style={{display:'flex',gap:20,paddingBottom:i<timeline.length-1?40:0}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0}}>
                  <div style={{width:44,height:44,borderRadius:'50%',background:item.type==='work'?'linear-gradient(135deg,#7c3aed,#a855f7)':'linear-gradient(135deg,#06b6d4,#0ea5e9)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:`0 0 20px ${item.type==='work'?'rgba(124,58,237,0.5)':'rgba(6,182,212,0.5)'}`,flexShrink:0}}>
                    {item.type==='work'?<FiBriefcase size={18} color="#fff"/>:<FiBook size={18} color="#fff"/>}
                  </div>
                  {i<timeline.length-1&&<div style={{flex:1,width:2,minHeight:40,background:'linear-gradient(180deg,rgba(124,58,237,0.4),rgba(6,182,212,0.4))',marginTop:8}}/>}
                </div>
                <div className="glass" style={{padding:24,flex:1}}>
                  <span style={{fontSize:12,fontWeight:600,fontFamily:'var(--font-main)',color:item.type==='work'?'#a855f7':'#06b6d4',background:item.type==='work'?'rgba(168,85,247,0.12)':'rgba(6,182,212,0.12)',padding:'3px 12px',borderRadius:99}}>{item.period}</span>
                  <h3 style={{fontFamily:'var(--font-main)',fontWeight:700,fontSize:18,color:'#fff',margin:'10px 0 4px'}}>{item.title}</h3>
                  <p style={{fontSize:14,color:'#a855f7',fontWeight:500,marginBottom:10}}>{item.organization}</p>
                  <p style={{fontSize:14,lineHeight:1.75,color:'rgba(255,255,255,0.55)',marginBottom:12}}>{item.description}</p>
                  {item.highlights&&(
                    <div style={{display:'flex',flexDirection:'column',gap:6}}>
                      {item.highlights.map((h,j)=>(
                        <div key={j} style={{display:'flex',alignItems:'center',gap:8}}>
                          <FiStar size={12} color={item.type==='work'?'#a855f7':'#06b6d4'}/>
                          <span style={{fontSize:13,color:'rgba(255,255,255,0.65)',fontWeight:500}}>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div style={{display:'flex',flexDirection:'column',gap:24}}>
            <div className="reveal" style={{height:200,borderRadius:'var(--radius)',overflow:'hidden'}}>
              <Suspense fallback={null}>
                <Canvas camera={{position:[0,0,4]}} gl={{alpha:true}}>
                  <ambientLight intensity={0.4}/>
                  <pointLight position={[3,3,3]} intensity={1.2} color="#7c3aed"/>
                  <Stars radius={30} depth={20} count={400} factor={2} fade speed={0.4}/>
                  <OrbitDecor/>
                </Canvas>
              </Suspense>
            </div>
            {/* Education cards */}
            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              <p style={{fontSize:12,fontWeight:700,letterSpacing:'0.15em',color:'#06b6d4',textTransform:'uppercase',fontFamily:'var(--font-main)'}}>Education</p>
              {education.map((edu,i)=>(
                <div key={i} className="glass reveal" style={{padding:20,display:'flex',gap:14,alignItems:'flex-start'}}>
                  <span style={{fontSize:24}}>{edu.icon}</span>
                  <div style={{flex:1}}>
                    <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:4,flexWrap:'wrap'}}>
                      <span style={{fontSize:11,fontWeight:700,color:edu.status==='Ongoing'?'#a855f7':'#10b981',background:edu.status==='Ongoing'?'rgba(168,85,247,0.12)':'rgba(16,185,129,0.12)',padding:'2px 10px',borderRadius:99,fontFamily:'var(--font-main)'}}>{edu.status}</span>
                    </div>
                    <h4 style={{fontFamily:'var(--font-main)',fontWeight:700,fontSize:14,color:'#fff',marginBottom:4,lineHeight:1.3}}>{edu.degree}</h4>
                    <p style={{fontSize:12,color:'rgba(255,255,255,0.45)',marginBottom:6}}>{edu.institution}</p>
                    <div style={{display:'flex',gap:12,fontSize:12,color:'rgba(255,255,255,0.5)'}}>
                      <span>📅 {edu.period}</span>
                      <span>⭐ {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Achievements */}
            <div className="glass reveal" style={{padding:24}}>
              <h4 style={{fontFamily:'var(--font-main)',fontWeight:700,fontSize:15,color:'#fff',marginBottom:16}}>🏆 Achievements</h4>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                {[
                  {label:"Dean's Award – Fall 2023–24", detail:'AIUB Academic Excellence'},
                  {label:"Dean's Award – Fall 2024–25", detail:'AIUB Academic Excellence'},
                  {label:'HSC GPA: 5.00',              detail:'Chandpur Govt. College, 2020'},
                  {label:'SSC GPA: 5.00',              detail:'Hasan Ali Govt. High School, 2018'},
                ].map((a,i)=>(
                  <div key={i} style={{display:'flex',alignItems:'flex-start',gap:12}}>
                    <div style={{width:8,height:8,borderRadius:'50%',flexShrink:0,background:'linear-gradient(135deg,#7c3aed,#06b6d4)',marginTop:5}}/>
                    <div>
                      <div style={{fontSize:13,fontWeight:600,color:'#fff',marginBottom:2}}>{a.label}</div>
                      <div style={{fontSize:11,color:'rgba(255,255,255,0.4)'}}>{a.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
