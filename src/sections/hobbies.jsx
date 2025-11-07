import SectionHeading from '../components/SectionHeading'

export default function Hobbies() {
  return (
    <section className="py-16">
      <SectionHeading title="Hobbys" />
      <ul className="flex flex-wrap gap-4 text-gray-700">
        <li>🎵 Musik</li>
        <li>✈️ Reisen</li>
        <li>📷 Drohnenfotografie</li>
        <li>🎨 Design</li>
      </ul>
    </section>
  )
}