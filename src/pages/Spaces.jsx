import React, { useRef, useEffect, useState } from 'react'

const projects = [
  {
    title: 'Villa Privata Lake Garda',
    desc: 'Residential renovation and art curation',
    color: '#efece6',
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691939279-1cb9bca9afed?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    title: 'Pop-up Store Milano',
    desc: 'Temporary retail space and styling',
    color: '#e7efe7',
    images: [
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515560570411-00a0026e6086?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542039375-28138150cc31?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    title: 'Set Design Vogue',
    desc: 'Editorial set design and props',
    color: '#e6eef0',
    images: [
      'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593359677879-8607ddf1a86b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526178618718-570f8a6dbf7f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop'
    ]
  }
]

function Lightbox({ src, onClose }){
  useEffect(()=>{
    const onKey = (e) => { if(e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  }, [onClose])
  if(!src) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img src={src} alt="lightbox" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" />
      </div>
    </div>
  )
}

function Strip({ project, speed=0.3, onOpen }){
  const scrollRef = useRef(null)

  useEffect(()=>{
    let raf
    const loop = () => {
      const el = scrollRef.current
      if(el){
        el.scrollLeft += speed
        const max = el.scrollWidth / 2
        if(el.scrollLeft >= max){
          el.scrollLeft = 0
        }
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return ()=> cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div className="py-10 md:py-14">
      <div className="relative" style={{ backgroundColor: project.color }}>
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex items-center gap-6 py-6 px-6 w-max">
            {[...project.images, ...project.images].map((src, i)=> (
              <button key={i} className="relative group shrink-0" onClick={()=>onOpen(src)}>
                <img src={src} alt="project" className="h-48 md:h-64 lg:h-72 object-cover rounded-xl shadow-md group-hover:scale-[1.02] transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</h3>
        <p className="text-neutral-600">{project.desc}</p>
      </div>
    </div>
  )
}

export default function Spaces(){
  const [lightbox, setLightbox] = useState(null)
  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Spaces / Projects</h2>
        <p className="text-neutral-600 mb-10 max-w-2xl">Horizontal moodboard strips moving gently. Swipe on mobile. Tap any image to view full-screen.</p>
      </div>
      <div>
        {projects.map((p, idx)=> (
          <Strip key={idx} project={p} speed={0.3 + idx*0.15} onOpen={setLightbox} />
        ))}
      </div>
      <Lightbox src={lightbox} onClose={()=>setLightbox(null)} />
    </section>
  )
}
