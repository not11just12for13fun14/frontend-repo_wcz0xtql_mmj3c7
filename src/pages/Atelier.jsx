import React from 'react'

const blocks = [
  { type: 'image', span: 'col-span-2', src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop' },
  { type: 'color', span: 'col-span-1', color: '#d0593e' },
  { type: 'image', span: 'col-span-1', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
  { type: 'image', span: 'col-span-2', src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' },
  { type: 'image', span: 'col-span-1', src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop' },
  { type: 'color', span: 'col-span-1', color: '#6b8f71' },
  { type: 'image', span: 'col-span-1', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
]

export default function Atelier(){
  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-10">Atelier</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((b, i)=> (
            <div key={i} className={`${b.span} relative rounded-xl overflow-hidden shadow-md`}
                 style={b.type==='color'?{ backgroundColor: b.color, minHeight: '14rem' }: {}}>
              {b.type==='image' && (
                <img src={b.src} alt="atelier" className="w-full h-full object-cover" />
              )}
              {i===2 && (
                <a href="#" className="absolute bottom-3 right-3 text-xs px-2 py-1 bg-neutral-900/70 text-white rounded">PDF</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
