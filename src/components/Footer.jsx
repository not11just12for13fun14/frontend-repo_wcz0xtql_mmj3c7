import React from 'react'
import { Instagram } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="border-t border-neutral-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <span className="inline-block w-2 h-2 rounded-full bg-neutral-900" aria-hidden></span>
          <span>© {new Date().getFullYear()} Greta Cevenini</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-neutral-600">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 flex items-center gap-2">
            <Instagram className="w-5 h-5" /> Instagram
          </a>
          <span className="text-neutral-400">Based between Brescia ↔ Milano</span>
        </div>
      </div>
    </footer>
  )
}
