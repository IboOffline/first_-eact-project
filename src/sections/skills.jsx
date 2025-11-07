import SectionHeading from '../components/SectionHeading'

export default function Skills() {
  return (
    <section className="py-16">
      <SectionHeading title="Fähigkeiten" />
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
        <li>HTML</li>
        <li>CSS / Tailwind</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Laravel</li>
        <li>Figma</li>
      </ul>
    </section>
  )
}