import { Code2, FileCode, Layers, Zap, Palette, Database } from 'lucide-react'

function TechStack() {
  return (
    <section className='flex items-center justify-center gap-6 mt-5 py-4 w-full'>
      <h2 className="text-blue-800 text-2xl whitespace-nowrap">
        Tech Stack
      </h2>
      <div className="overflow-hidden w-full flex-1">
        <ul className="flex gap-6 px-4 pb-4 tech-scroll w-max">
          <li className="techstack-li">
            <Code2 className="w-8 h-8 text-yellow-500"/>
            <span className="text-md font-medium">JavaScript</span>
          </li>
          
          <li className="techstack-li">
            <FileCode className="w-8 h-8 text-blue-600" />
            <span className="text-md font-medium">TypeScript</span>
          </li>
          
          <li className="techstack-li">
            <Layers className="w-8 h-8 text-cyan-500" />
            <span className="text-md font-medium">React</span>
          </li>
          
          <li className="techstack-li">
            <Zap className="w-8 h-8 text-black" />
            <span className="text-md font-medium">Next.js</span>
          </li>
          
          <li className="techstack-li">
            <Palette className="w-8 h-8 text-teal-500" />
            <span className="text-md font-medium">TailwindCSS</span>
          </li>
          
          <li className="techstack-li">
            <Database className="w-8 h-8 text-green-600" />
            <span className="text-md font-medium">Supabase</span>
          </li>

          <li className="techstack-li">
            <Code2 className="w-8 h-8 text-yellow-500"/>
            <span className="text-md font-medium">JavaScript</span>
          </li>

          <li className="techstack-li">
            <FileCode className="w-8 h-8 text-blue-600" />
            <span className="text-md font-medium">TypeScript</span>
          </li>
          
          <li className="techstack-li">
            <Layers className="w-8 h-8 text-cyan-500" />
            <span className="text-md font-medium">React</span>
          </li>
          
          <li className="techstack-li">
            <Zap className="w-8 h-8 text-black" />
            <span className="text-md font-medium">Next.js</span>
          </li>
          
          <li className="techstack-li">
            <Palette className="w-8 h-8 text-teal-500" />
            <span className="text-md font-medium">TailwindCSS</span>
          </li>
          
          <li className="techstack-li">
            <Database className="w-8 h-8 text-green-600" />
            <span className="text-md font-medium">Supabase</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TechStack
