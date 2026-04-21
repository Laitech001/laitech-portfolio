"use client"
import Image from 'next/image'
import { motion } from 'motion/react'

import laitechDeveloper from '../../public/images/Laitech-developer.jpg'
function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="about" 
      className="py-24 px-10 scroll-mt-24"
    >
      <h1 className="heading mb-3">About Laitech</h1>

      <section className="flex flex-col justify-center gap-4 lg:flex-row lg:gap-10">
        <Image
          src={laitechDeveloper}
          alt='Developer'
          width={300}
          height={250}
          priority
          className='rounded-lg'
        />

          <p className='text-center lg:w-250 text-gray-800'>
            I’m Abdulganiy Ibrahim, a software developer and the creator of Laitech.
            I build fast, modern, and scalable web applications for businesses and startups using Next.js, React, and Tailwind CSS.
            I focus on turning ideas into clean, high-performing digital products that help businesses grow online.
        </p>

      </section>
    </motion.div>
  )
}

export default About