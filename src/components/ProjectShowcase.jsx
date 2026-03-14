// src/components/ProjectShowcase.jsx
import ProjectCard from './ProjectCard'; 
import './ProjectCard.css';             

export default function ProjectShowcase({ projects }) {
  return (
    <section className="project-showcase">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            name={proj.name}
            description={proj.description}
            technologies={proj.technologies}
          />
        ))}
      </div>
    </section>
  )
}
