import { Mail, MessageCircle, PhoneCall} from 'lucide-react'
import { Card } from '@/ui'


export default function ContactDetails() {

  const whatsappLink = "https://wa.me/2347062639160?text=Hello%20LAITECH%20I%20want%20to%20build%20a%20website"

  return (
    <Card className=''>
      <h1 className='text-xl md:text-2xl text-gray-900 text-center m-2'>Contact Details</h1>
      
      <ul className='flex flex-col justify-center items-center gap-3'>
        <li className='techstack-li mb-3 w-100'>
          <Mail /> 
          <a href="mailto:contact.laitech@gmail.com">
            contact.laitech@gmail.com
          </a>
        </li>

        <li className='techstack-li mb-3 w-100'>
          <MessageCircle /> 
          <button>
            <a href={whatsappLink} target="_blank"
            rel="noopener noreferrer">
              Chat on Whatsapp
            </a>
          </button>
        </li>

        <li className='techstack-li w-100 mb-3'>
          <PhoneCall />
          <a href="tel:+2347062639160">
            +234 706 263 9160
          </a>
        </li>
      </ul>
    </Card>
  )
}