import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function GetInTouch() {
  return (
    <div className="relative isolate bg-gradient-to-b from-slate-800 to-sky-950 -mt-px">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}