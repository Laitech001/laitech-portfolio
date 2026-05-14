"use client"

import { useState } from 'react'
import { GradientButton, LaitechLogo } from '@/ui'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* Desktop Layout */}
        <section className="hidden lg:flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <LaitechLogo />

            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900">
                Laitech
              </h1>

              <p className="text-xs tracking-wide text-gray-500">
                SMART DIGITAL SOLUTIONS
              </p>
            </div>

          </div>

          {/* Nav */}
          <nav className="flex items-center gap-8">

            <a
              href="#home"
              className="font-medium text-gray-700 hover:border-b-2 border-cyan-500 hover:text-cyan-600 transition-all"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-medium text-gray-700 hover:border-b-2 border-cyan-500 hover:text-cyan-600 transition-all"
            >
              About
            </a>

            <a
              href="#service"
              className="font-medium text-gray-700 hover:border-b-2 border-cyan-500 hover:text-cyan-600 transition-all"
            >
              Service
            </a>

            <a
              href="#projects"
              className="font-medium text-gray-700 hover:border-b-2 border-cyan-500 hover:text-cyan-600 transition-all"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="font-medium text-gray-700 hover:border-b-2 border-cyan-500 hover:text-cyan-600 transition-all"
            >
              Contact
            </a>

          </nav>

          {/* Button */}
          <GradientButton className="rounded-full px-6 py-3">
            Contact Us
          </GradientButton>

        </section>

        {/* Mobile Layout */}
        <section className="lg:hidden relative">

          {/* Top Bar */}
          <div className="flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <LaitechLogo />

              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-900">
                  Laitech
                </h1>

                <p className="text-[10px] tracking-wide text-gray-500">
                  SMART DIGITAL SOLUTIONS
                </p>
              </div>

            </div>

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-cyan-50 backdrop-blur-sm text-black p-3 rounded-xl shadow-md hover:scale-105 transition-all duration-200"
            >
              {menuOpen ? (
                <X size={22} strokeWidth={2.8} />
              ) : (
                <Menu size={22} strokeWidth={2.8} />
              )}
            </button>

          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div
              className="absolute top-full left-0 mt-4 w-full p-4 bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-2xl overflow-hidden animate-in slide-in-from-top-2 duration-300"
            >

              <nav className="flex flex-col p-3">

                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all"
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all"
                >
                  About
                </a>

                <a
                  href="#service"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all"
                >
                  Service
                </a>

                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all"
                >
                  Contact
                </a>

              </nav>

              <GradientButton className="rounded-full w-full">
                Hire Me
              </GradientButton>

            </div>
          )}

        </section>

      </div>

    </header>
  )
}