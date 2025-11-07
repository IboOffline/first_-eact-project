import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

export default function Contact() {
    return (
        <section id="contact" className="py-16 text-center">
            <SectionHeading title="Kontakt" />
            <p className="text-gray-700 mb-6">
                Du möchtest mit mir arbeiten oder einfach Hallo sagen?
            </p>
            <Button label="Schreib mir eine E-Mail" href="mailto:info@canbeonline.com" />
        </section>
    )
}