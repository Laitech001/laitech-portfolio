import ProjectCard from './ProjectCard'

function Project() {

  const projects = [
  {
    imagePath: '/images/laitech-landing-page.png',
    title: 'Laitech Landing Page',
    desc: 'A responsive landing page for Laitech showcasing services, brand identity, and modern UI design',
    websiteUrl: 'https://laitech.vercel.app/'
  }, {
    imagePath: '/images/cgpaweb.png',
    title: 'CGPA Calculator',
    desc: 'A simple web tool that allows students to calculate their CGPA quickly and accurately.',
    websiteUrl: 'https://cgpaweb.netlify.app/'
  }
]

  return (
    <div className='p-4'>
      <h1 className="text-xl text-center text-blue-800 md:text-3x1 lg:4x1">Featured Projects</h1>

      <section className='flex flex-col md:flex-row'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imagePath={project.imagePath}
            title={project.title}
            desc={project.desc}
            websiteUrl={project.websiteUrl}
          />
        ))}
      </section>
    </div>
    
  )
}

export default Project