import type { ComponentType, SVGProps } from "react"

type serviceCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  desc: string
  className?: string
}

function ServiceCard({icon: Icon, title, desc}: serviceCardProps) {
  return (
    <div className={`text-center m-2 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow`}>
      <Icon className="w-12 h-12 text-blue-800 mb-3 mx-auto" />
      <h1 className="text-xl text-blue-800 font-semibold mb-1">{title}</h1>
      <p className="text-gray-600">{desc}</p>
    </div>
  )
}

export default ServiceCard