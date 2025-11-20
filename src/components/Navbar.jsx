import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Instagram } from 'lucide-react'

const MenuLink = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block text-2xl md:text-4xl tracking-tight py-2 md:py-3 transition-colors ${
        isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
      }`}
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur-md bg-neutral-50/70 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-lg">
            Greta Cevenini
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/spaces" className={({isActive})=>`hover:text-neutral-900 ${isActive?'text-neutral-900':'text-neutral-600'}`}>Spaces</NavLink>
            <NavLink to="/journal" className={({isActive})=>`hover:text-neutral-900 ${isActive?'text-neutral-900':'text-neutral-600'}`}>Journal</NavLink>
            <NavLink to="/atelier" className={({isActive})=>`hover:text-neutral-900 ${isActive?'text-neutral-900':'text-neutral-600'}`}>Atelier</NavLink>
            <NavLink to="/about" className={({isActive})=>`hover:text-neutral-900 ${isActive?'text-neutral-900':'text-neutral-600'}`}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=>`hover:text-neutral-900 ${isActive?'text-neutral-900':'text-neutral-600'}`}>Contact</NavLink>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <button className="md:hidden p-2" onClick={()=>setOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Overlay menu inspired by salazraki.com */}
      {open && (
        <div className="fixed inset-0 z-50" aria-modal>
          <div className="absolute inset-0 bg-neutral-900/40" onClick={()=>setOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-[85%] sm:w-[420px] bg-neutral-50 border-l border-neutral-200 shadow-xl">
            <div className="h-16 border-b border-neutral-200 flex items-center justify-between px-6">
              <Link to="/" onClick={()=>setOpen(false)} className="font-medium">Greta Cevenini</Link>
              <button onClick={()=>setOpen(false)} className="text-neutral-500 hover:text-neutral-900">Close</button>
            </div>
            <nav className="px-6 py-8">
              <div className="border-t border-neutral-200">
                <MenuLink to="/spaces" onClick={()=>setOpen(false)}>Spaces</MenuLink>
                <div className="border-t border-neutral-200" />
                <MenuLink to="/journal" onClick={()=>setOpen(false)}>Journal</MenuLink>
                <div className="border-t border-neutral-200" />
                <MenuLink to="/atelier" onClick={()=>setOpen(false)}>Atelier</MenuLink>
                <div className="border-t border-neutral-200" />
                <MenuLink to="/about" onClick={()=>setOpen(false)}>About</MenuLink>
                <div className="border-t border-neutral-200" />
                <MenuLink to="/contact" onClick={()=>setOpen(false)}>Contact</MenuLink>
              </div>
              <div className="mt-8 flex items-center gap-4 text-neutral-600">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 flex items-center gap-2">
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
