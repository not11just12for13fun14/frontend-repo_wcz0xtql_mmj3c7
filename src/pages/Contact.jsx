import React from 'react'
import { Instagram } from 'lucide-react'

export default function Contact(){
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-10">Contact</h2>
        <div className="space-y-4 text-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <span className="text-neutral-500 w-36">Name</span>
            <span>Greta Cevenini</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <span className="text-neutral-500 w-36">Mobile</span>
            <a href="tel:+393401234567" className="hover:underline">+39 340 123 4567</a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <span className="text-neutral-500 w-36">Email</span>
            <a href="mailto:studio@greta.design" className="hover:underline">studio@greta.design</a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <span className="text-neutral-500 w-36">Base</span>
            <span>Based between Brescia and Milan</span>
          </div>
          <div className="pt-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
              <Instagram className="w-5 h-5"/> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
