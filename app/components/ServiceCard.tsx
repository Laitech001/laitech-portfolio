import type { ComponentType, SVGProps } from "react"
import { Card } from "@/ui"

type serviceCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  desc: string
  className?: string
}

function ServiceCard({icon: Icon, title, desc}: serviceCardProps) {
  return (
    <Card className={`max-w-6xl text-center m-2 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow`}>
      <Icon className="w-12 h-12 text-blue-600 mb-3 mx-auto" />
      <h1 className="text-xl text-gray-900 font-semibold mb-1">{title}</h1>
      <p className="text-gray-600">{desc}</p>
    </Card>
  )
}

export default ServiceCard