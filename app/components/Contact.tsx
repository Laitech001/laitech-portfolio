import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="px-4">
      <h1 id='contact' className="heading mb-3">Contact Info:</h1>

      <section className="flex flex-col md:flex-row justiify-center items-center gap-6">
        <ContactDetails />

        <ContactForm />
      </section>

    </div>
  )
}