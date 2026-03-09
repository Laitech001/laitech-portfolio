"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="p-4 sticky top-0 z-50 bg-white/50 backdrop-blur">
      <section className='hidden lg:flex justify-between items-center'>
        <div className='flex item-center'>
          <Image 
            src='/images/laitech-logo.webp'
            alt='logo image'
            width={50}
            height={50}
            priority
          />
          <h1 className='text-xl md:text-3xl lg:4xl'>
            Laitech
          </h1>
        </div>

        <nav className="lg:flex space-x-6">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

        <button 
          className='hidden lg:block primary-btn'
        >
          Contact Us
        </button>
      </section>

      <section className='lg:hidden flex justify-between items-center'>

        <div className='flex item-center'>
          <Image 
            src='/images/laitech-logo.webp'
            alt='logo image'
            width={50}
            height={50}
            priority
          />
          <h1 className='text-xl md:text-3xl lg:4xl'>
            Laitech
          </h1>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none"
        >
          <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            > 
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
        </button>

        {menuOpen && (
          <nav className="lg:hidden bg-white shadow-md">
            <a href="#home" className="block px-4 py-2 hover:bg-gray-100">Home</a>
            <a href="#projects" className="block px-4 py-2 hover:bg-gray-100">Projects</a>
            <a href="#about" className="block px-4 py-2 hover:bg-gray-100">About</a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">Contact</a>

            <button className='primary-btn'>
              Contact Us
            </button>
          </nav>
        )}
      </section>
    </div>
  )
}