import SectionHeading from '../components/SectionHeading'
import skills from '../data/skills.json'

export default function Skills() {
  return (
    <section className="py-16">
      <SectionHeading title="Fähigkeiten" />
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}