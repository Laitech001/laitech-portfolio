import { Card, Button } from '@/ui'
import Image from 'next/image'

type ProjectCardProps = {
  imagePath?: string,
  title: string,
  desc: string,
  websiteUrl: string
}
function ProjectCard({ imagePath, title, desc, websiteUrl}: ProjectCardProps) {
  return (
    <Card className={`text-center m-2 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow`}>
      {imagePath && (
        <Image 
          src={imagePath} 
          alt={title}
          width={350} 
          height={350}
          className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out" 
        />
      )}
      <h1 className="text-xl text-blue-800 font-semibold mb-1 item-start">{title}</h1>
      <p className="text-gray-600 mb-2">{desc}</p>

      <div className='flex flex-col-1 md:flex-row justify-center items-center gap-6'>
        <Button varient='primary'>
          View Website
        </Button>

        <Button varient='secondary'>
          View Code
        </Button>
      </div>
      
    </Card>
  )
}

export default ProjectCard