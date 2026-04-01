import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'
import emailjs from '@emailjs/browser'
import { useReveal } from '../../hooks/useReveal'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiPhone, FiFacebook } from 'react-icons/fi'
import { colors, transitions } from '../../constants/styles'
import Button from '../common/Button'

// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY') // Replace with your actual public key

function WaveGrid() {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame(({clock})=>{
    if(!mesh.current) return
    const geo = mesh.current.geometry as THREE.PlaneGeometry
    const pos = geo.attributes['position'] as THREE.BufferAttribute
    const t = clock.elapsedTime
    for(let i=0;i<pos.count;i++){
      const x=pos.getX(i); const y=pos.getY(i)
      pos.setZ(i,Math.sin(x*0.8+t)*0.2+Math.sin(y*0.8+t*1.3)*0.15)
    }
    pos.needsUpdate=true; geo.computeVertexNormals()
  })
  return (
    <mesh ref={mesh} rotation={[-Math.PI/2.5,0,0]} position={[0,-1.5,0]}>
      <planeGeometry args={[12,12,30,30]}/>
      <meshStandardMaterial color="#7c3aed" wireframe transparent opacity={0.15}/>
    </mesh>
  )
}

const contactLinks = [
  { icon: <FiMail size={20}/>,      label:'Email',    value:'takbirzamanbhuiyan@gmail.com', href:'mailto:takbirzamanbhuiyan@gmail.com' },
  { icon: <FiPhone size={20}/>,     label:'Phone',    value:'01631-107100',                 href:'tel:+8801631107100' },
  { icon: <FiGithub size={20}/>,    label:'GitHub',   value:'TakbirZaman',                  href:'https://github.com/TakbirZaman' },
  { icon: <FiLinkedin size={20}/>,  label:'LinkedIn', value:'in/takbir-zaman-bhuiyan',       href:'https://www.linkedin.com/in/takbir-zaman-bhuiyan' },
  { icon: <FiFacebook size={20}/>,  label:'Facebook', value:'takbirzamanbhuiyan',            href:'https://www.facebook.com/takbirzamanbhuiyan' },
  { icon: <FiMapPin size={20}/>,    label:'Location', value:'Dhaka, Bangladesh',             href: undefined },
]

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  // Form validation
  const validateForm = () => {
    if (!form.name.trim()) return 'Please enter your name'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email'
    if (!form.subject.trim()) return 'Please enter a subject'
    if (!form.message.trim() || form.message.trim().length < 10) return 'Message must be at least 10 characters'
    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    try {
      // Send email via EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          from_name: form.name,
          from_email: form.email,
          to_email: 'takbirzamanbhuiyan@gmail.com',
          subject: form.subject,
          message: form.message,
        }
      )

      setSent(true)
      setForm({name:'',email:'',subject:'',message:''})
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      console.error('Email error:', err)
      setError('Failed to send message. Please try again or contact me directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width:'100%',
    background:'rgba(255,255,255,0.04)',
    border:`1.5px solid ${error ? colors.error : colors.border}`,
    borderRadius:12,
    padding:'14px 18px',
    color:'#fff',
    fontSize:15,
    fontFamily:'var(--font-body)',
    outline:'none',
    transition: `border-color ${transitions.base}, background ${transitions.base}`,
    boxSizing:'border-box',
  }

  return (
    <section id="contact" style={{position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,zIndex:0,opacity:0.6}}>
        <Suspense fallback={null}>
          <Canvas camera={{position:[0,2,5]}} gl={{alpha:true}}>
            <ambientLight intensity={0.3}/>
            <pointLight position={[0,5,0]} intensity={1} color="#7c3aed"/>
            <Stars radius={40} depth={30} count={800} factor={2} fade speed={0.3}/>
            <WaveGrid/>
          </Canvas>
        </Suspense>
      </div>
      <div className="section" ref={ref} style={{position:'relative',zIndex:1}}>
        <div className="glow-blob" style={{width:400,height:400,background:'#7c3aed',top:'10%',right:'5%'}}/>
        <div className="reveal" style={{textAlign:'center',marginBottom:64}}>
          <p className="section-label">Get in touch</p>
          <h2 className="section-title" style={{textAlign:'center'}}>Let's Connect</h2>
          <div className="section-divider" style={{margin:'0 auto 24px'}}/>
          <p style={{fontSize:17,color:'rgba(255,255,255,0.5)',maxWidth:540,margin:'0 auto'}}>
            I'm currently seeking software development opportunities where I can apply my skills in full-stack development, .NET Core, and machine learning. Open to opportunities, collaborations, and tech conversations.
          </p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:40,alignItems:'start'}}>
          {/* Contact links */}
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {contactLinks.map((c,i)=>(
              <div key={i} className="glass reveal" style={{padding:'16px 20px'}}>
                {c.href?(
                  <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                    style={{display:'flex',alignItems:'center',gap:14,textDecoration:'none'}}>
                    <div style={{width:40,height:40,borderRadius:10,background:'rgba(124,58,237,0.15)',border:'1px solid rgba(124,58,237,0.3)',display:'flex',alignItems:'center',justifyContent:'center',color:'#a855f7',flexShrink:0}}>{c.icon}</div>
                    <div>
                      <div style={{fontSize:11,color:'rgba(255,255,255,0.4)',fontWeight:500,marginBottom:2}}>{c.label}</div>
                      <div style={{fontSize:14,color:'#fff',fontWeight:600}}>{c.value}</div>
                    </div>
                  </a>
                ):(
                  <div style={{display:'flex',alignItems:'center',gap:14}}>
                    <div style={{width:40,height:40,borderRadius:10,background:'rgba(124,58,237,0.15)',border:'1px solid rgba(124,58,237,0.3)',display:'flex',alignItems:'center',justifyContent:'center',color:'#a855f7',flexShrink:0}}>{c.icon}</div>
                    <div>
                      <div style={{fontSize:11,color:'rgba(255,255,255,0.4)',fontWeight:500,marginBottom:2}}>{c.label}</div>
                      <div style={{fontSize:14,color:'#fff',fontWeight:600}}>{c.value}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="glass reveal" style={{padding:18}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
                <span style={{width:9,height:9,borderRadius:'50%',background:'#22c55e',boxShadow:'0 0 10px #22c55e'}}/>
                <span style={{fontFamily:'var(--font-main)',fontWeight:600,color:'#22c55e',fontSize:14}}>Available</span>
              </div>
              <p style={{fontSize:13,color:'rgba(255,255,255,0.45)',lineHeight:1.6}}>Actively seeking internship & junior developer roles. Response within 24 hours.</p>
            </div>
          </div>
          {/* Form */}
          <div className="glass reveal" style={{padding:32}}>
            <h3 style={{fontFamily:'var(--font-main)',fontWeight:700,fontSize:20,color:'#fff',marginBottom:24}}>Send a Message</h3>

            {/* Error message */}
            {error && (
              <div style={{
                background: `${colors.error}20`,
                border: `1px solid ${colors.error}60`,
                color: colors.error,
                padding: '12px 16px',
                borderRadius: 8,
                marginBottom: 20,
                fontSize: 14,
                fontWeight: 500,
              }}>
                {error}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:16}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                <input
                  style={inputStyle}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e=>setForm(f=>({...f,name:e.target.value}))}
                  onFocus={e=>(e.currentTarget.style.borderColor=colors.accent)}
                  onBlur={e=>(e.currentTarget.style.borderColor=error ? colors.error : colors.border)}
                  disabled={loading}
                  required
                />
                <input
                  style={inputStyle}
                  placeholder="Your Email"
                  type="email"
                  value={form.email}
                  onChange={e=>setForm(f=>({...f,email:e.target.value}))}
                  onFocus={e=>(e.currentTarget.style.borderColor=colors.accent)}
                  onBlur={e=>(e.currentTarget.style.borderColor=error ? colors.error : colors.border)}
                  disabled={loading}
                  required
                />
              </div>
              <input
                style={inputStyle}
                placeholder="Subject"
                value={form.subject}
                onChange={e=>setForm(f=>({...f,subject:e.target.value}))}
                onFocus={e=>(e.currentTarget.style.borderColor=colors.accent)}
                onBlur={e=>(e.currentTarget.style.borderColor=error ? colors.error : colors.border)}
                disabled={loading}
                required
              />
              <textarea
                style={{...inputStyle,height:140,resize:'vertical'}}
                placeholder="Your message..."
                value={form.message}
                onChange={e=>setForm(f=>({...f,message:e.target.value}))}
                onFocus={e=>(e.currentTarget.style.borderColor=colors.accent)}
                onBlur={e=>(e.currentTarget.style.borderColor=error ? colors.error : colors.border)}
                disabled={loading}
                required
              />
              <Button
                type="submit"
                variant={sent ? 'secondary' : 'primary'}
                disabled={loading || sent}
                style={{alignSelf: 'flex-start'}}
              >
                <FiSend size={16}/>
                {loading ? 'Sending...' : sent ? 'Message Sent! ✓' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
