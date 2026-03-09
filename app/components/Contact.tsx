import { Mail, MessageCircle, PhoneCall} from 'lucide-react'

export default function Contact() {

  const whatsappLink = "https://wa.me/2347062639160?text=Hello%20LAITECH%20I%20want%20to%20build%20a%20website"

  return (
    <div className="contact">
      <h1 id='contact' className="text-center text-xl text-blue-800 mb-2 md:text-3x1 lg:text-4x1">Contact Info:</h1>
      
      <ul>
        <li className='techstack-li'>
          <Mail /> 
          <a href="mailto:contact.laitech@gmail.com">
            contact.laitech@gmail.com
          </a>
        </li>

        <li className='techstack-li'>
          <MessageCircle /> 
          <button>
            <a href={whatsappLink} target="_blank"
            rel="noopener noreferrer">
              Chat on Whatsapp
            </a>
          </button>
        </li>

        <li className='techstack-li mb-3'>
          <PhoneCall />
          <a href="tel:+2347062639160">
            +234 706 263 9160
          </a>
        </li>
      </ul>
    </div>
  )
}