export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 p-6 flex flex-col md:flex-row items-start justify-between">
      <section>
        <h1 className="text-lg font-semibold">Laitech</h1>
        <p className="text-sm">Building the future, one line of code at a time.</p> 
      </section>

      <section>
        <h2 className="text-md font-semibold mt-4 md:mt-0">Links</h2>

        <ul className="text-sm">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#service" className="hover:text-blue-500">Service</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-md font-semibold mt-4 md:mt-0">Contact</h2>
        <p className="text-sm">Email: <a href="mailto:contact.laitech@gmail.com" className="hover:text-blue-500">contact.laitech@gmail.com</a></p>

        <p className="text-sm">Phone: <a href="tel:+2347062639160" className="hover:text-blue-500">+234 706 263 9160</a></p>

        <p className="text-sm"> GitHub: 
          <a
            href="https://github.com/Laitech001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            GitHub
          </a>
        </p>
      </section>
    </footer>
  )
}
