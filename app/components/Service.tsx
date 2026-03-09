import ServiceCard from "./ServiceCard"
import { Globe, Layers, Zap } from 'lucide-react'

function Service() {
  const services = [
    {
      icon: Globe,
      title: "Web App Development",
      desc: "We build modern websites and web applications for businesses."
    },
    {
      icon: Layers,
      title: "Single Page Application",
      desc: "Create fast, interactive web apps using React, Next.js, or similar frameworks."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      desc: "Optimized websites for speed, SEO, and smooth user experience."
    },
  ]
  return (
    <div className="mt-4 p-4">
      <h1 className="text-xl text-center text-blue-800 md:text-3x1 lg:4x1">Our Services</h1>

      <section className="flex flex-col md:flex-row">
        {services.map((service, index) => (
          <ServiceCard
            key={index} 
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
        
      </section>
    </div>
  )
}

export default Service