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
      <h1 className="heading mb-2">About Laitech</h1>

      <section className="flex flex-col justify-center gap-4 lg:flex-row lg:gap-10">
        <Image
          src={laitechDeveloper}
          alt='Developer'
          width={350}
          height={300}
          priority
          className='rounded-lg'
        />

        <p className='text-center lg:w-250 text-gray-800'>Hi, I'm Abdulganiy Ibrahim, the developer behind Laitech.I focus on building fast, modern, and scalable websites for businesses and startups using modern web technologies. I enjoy turning ideas into real digital products that help businesses grow online. My goal with Laitech is to provide reliable web solutions that are not only visually appealing but also optimized for performance and usability. I work with modern tools like Next.js, React, and Tailwind CSS to build responsive and efficient web applications. Whether it's a business website, landing page, or web application, I focus on delivering solutions that are clean, fast, and easy for users to interact with.</p>

      </section>
    </motion.div>
  )
}

export default About