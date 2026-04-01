import { useReveal } from '../../hooks/useReveal'
import { research } from '../../data/index'

export default function Research() {
  const ref = useReveal()
  return (
    <section id="research" style={{background:'linear-gradient(180deg,var(--bg) 0%,rgba(13,9,32,0.95) 100%)'}}>
      <div className="section" ref={ref}>
        <div className="glow-blob" style={{width:400,height:400,background:'#06b6d4',top:'5%',right:'-5%'}}/>
        <div className="reveal" style={{position:'relative',zIndex:1}}>
          <p className="section-label">Academic contributions</p>
          <h2 className="section-title">Research</h2>
          <div className="section-divider"/>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:24,position:'relative',zIndex:1}}>
          {research.map((item,i)=>(
            <div key={i} className="glass reveal" style={{padding:32,display:'flex',gap:28,alignItems:'flex-start',transition:'transform 0.3s,box-shadow 0.3s'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 16px 48px rgba(6,182,212,0.15)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}
            >
              <div style={{flexShrink:0,width:52,height:52,borderRadius:12,background:'linear-gradient(135deg,rgba(6,182,212,0.15),rgba(124,58,237,0.15))',border:'1px solid rgba(6,182,212,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-main)',fontWeight:800,fontSize:18,color:'#06b6d4'}}>
                {item.num}
              </div>
              <div style={{flex:1}}>
                <h3 style={{fontFamily:'var(--font-main)',fontWeight:700,fontSize:19,color:'#fff',marginBottom:10,lineHeight:1.3}}>{item.title}</h3>
                <p style={{fontSize:15,lineHeight:1.8,color:'rgba(255,255,255,0.55)',marginBottom:16}}>{item.description}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                  {item.tags.map(tag=>(
                    <span key={tag} style={{padding:'4px 14px',borderRadius:99,background:'rgba(6,182,212,0.1)',border:'1px solid rgba(6,182,212,0.25)',color:'#06b6d4',fontSize:12,fontWeight:600,fontFamily:'var(--font-main)'}}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
