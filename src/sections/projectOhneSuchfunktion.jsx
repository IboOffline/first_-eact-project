import SectionHeading from '../components/SectionHeading'
import projects from '../data/projects.json'

export default function Projects() {
  return (
    <section className="py-16">
      <SectionHeading title="Projekte" />
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id}>
            <h3 className="font-semibold text-brand-600">
              {project.title}
            </h3>
            <p className="text-sky-700">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}