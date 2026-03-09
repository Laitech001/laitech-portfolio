import Image from 'next/image'
function Hero() {
  return (
    <div className='px-2 text-center'>
      <h1 className='text-xl text-blue-800 md:text-3x1 lg:6x1'>Building fast, modern websites for businesses and startups.</h1>
      <p className='text-gray-700 mb-5'>Laitech helps businesses create powerful web experiences using modern technologies.</p>

      <section className='flex justify-center item-center gap-4'>
        <button className='primary-btn'>Contact Me</button>
        <button className='secondary-btn'>View Project</button>
      </section>
    </div>
  )
}

export default Hero