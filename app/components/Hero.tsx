"use client"
import { motion } from 'motion/react'

function Hero() {
  return (
    <div 
      id='home'
      className='px-2 text-center'
    >
      <motion.h1 
        className='text-xl text-blue-800 md:text-3xl lg:text-5xl py-4'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Building fast, modern websites that help businesses grow online.
      </motion.h1>
      <motion.p 
        className='text-gray-700 mb-5'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Laitech helps startups and businesses turn ideas into high-performing web applications using modern technologies.
      </motion.p>

      <section className='flex justify-center item-center gap-4'>
        <button className='primary-btn hover:scale-105 transition all duration-400'>Contact Me</button>
        <button className='secondary-btn hover:scale-105 transition all duration-400'>View Project</button>
      </section>
    </div>
  )
}

export default Hero