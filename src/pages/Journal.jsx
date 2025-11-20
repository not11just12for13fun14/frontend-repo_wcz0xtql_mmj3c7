import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922325-24c8f2b9b7bf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1462933148060-9ef3e439ab85?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460354089486-258bfbf0604a?q=80&w=1200&auto=format&fit=crop',
]

export default function Journal(){
  return (
    <section className="min-h-screen" style={{ backgroundColor: '#efe4cf' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-10">Journal</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i)=> (
            <figure key={i} className="break-inside-avoid relative group">
              <img src={src} alt="journal" className="w-full rounded-xl shadow-md" />
              <figcaption className="absolute bottom-3 left-3 text-xs px-2 py-1 bg-neutral-900/60 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {i%2===0? 'Milano, 2023':'Brescia, 2024'}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
