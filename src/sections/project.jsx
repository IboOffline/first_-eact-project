import SectionHeading from '../components/SectionHeading'

export default function Projects() {
  return (
    <section className="py-16">
      <SectionHeading title="Projekte" />
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-brand-600">Drive More</h3>
          <p className="text-gray-700">KFZ-Meisterbetrieb Webseite mit Laravel & Tailwind.</p>
        </div>
        <div>
          <h3 className="font-semibold text-brand-600">Soleia Skincare</h3>
          <p className="text-gray-700">E-Commerce Konzept mit React & Vite.</p>
        </div>
      </div>
    </section>
  )
}