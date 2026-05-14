"use client"
import { motion } from 'motion/react'
import { Button, GradientButton } from '@/ui'

function Hero() {
  return (
    <div 
      id='home'
      className='p-10 text-center'
    >
      <motion.h1 
        className='mx-auto text-2xl font-semibold md:text-3xl lg:text-5xl max-w-4xl py-4'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        We turn ideas into 
        <span className='bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'> high-performing web applications</span>
      </motion.h1>

      <motion.p 
        className='mx-auto text-sm md:text-base lg:text-lg text-gray-700 mb-5'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Laitech builds modern websites and web applications — secure, responsive, and performance-driven. Crafted to elevate brands and deliver real results.
      </motion.p>

      <section className='flex justify-center items-center gap-4'>
        <GradientButton className='rounded-full hover:scale-105 transition-all duration-400'>Contact Me</GradientButton>

        <Button variant='secondary' className='rounded-full hover:scale-105 transition-all duration-400'>
          View Project
        </Button>
      </section>

    </div>
  )
}

export default Hero