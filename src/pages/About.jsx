import React from 'react'

export default function About(){
  return (
    <section className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">About</h2>
            <div className="space-y-5 text-[17px] leading-7 text-neutral-800" style={{ fontFamily: '"Libre Baskerville", Georgia, serif' }}>
              <p>
                Working between Brescia and Milan, Greta Cevenini is an Italian interior designer and artist exploring the dialogue between space, light and material. Her work blends rigorous minimalism with tactile warmth, creating environments that feel both essential and deeply human.
              </p>
              <p>
                After collaborating with studios across Lombardy, she now leads independent projects ranging from private residences on Lake Garda to editorial set design and site-specific installations. Research, travel and drawing inform a practice attentive to context and time.
              </p>
              <p>
                Brescia ↔ Milano
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
