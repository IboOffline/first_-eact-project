import { useState } from "react";
import projects from "../data/projects.json";

export default function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const title = project.title?.toLowerCase() ?? "";
    const description = project.description?.toLowerCase() ?? "";
    const term = searchTerm.toLowerCase();

    return (
      title.includes(term) ||
      description.includes(term)
    );
  });

  return (
    <section className="font-poppins text-sky-900 bg-white min-h-screen w-full">
      <h2 className="text-xl font-semibold mb-4">Projekte</h2>

      <input
        type="text"
        className="border rounded px-2 py-1 mb-4 w-full max-w-md"
        placeholder="Suche nach Projektname oder Beschreibung..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="space-y-3">
        {filteredProjects.map((project) => (
          <li key={project.id} className="border rounded p-3">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-sky-800">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}