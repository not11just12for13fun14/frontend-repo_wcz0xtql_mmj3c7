import React from 'react'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="w-full">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#efece6,#f7f5f2_40%,#e7efe7_100%)]" />
          <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl leading-tight font-semibold tracking-tight"
              style={{ fontFamily: 'Futura, var(--font-sans)' }}
            >
              Greta Cevenini
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-lg md:text-2xl text-neutral-700"
              style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
            >
              Interior designer & artist
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 h-[60vh] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
            >
              <img src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2000&auto=format&fit=crop" alt="Hero interior" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10 flex items-center gap-3 text-neutral-600"
            >
              <span className="w-5 h-px bg-neutral-400" />
              <span className="text-sm">Scroll</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
