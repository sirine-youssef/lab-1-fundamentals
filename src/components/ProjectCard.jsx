// src/components/ProjectCard/ProjectCard.jsx
import './ProjectCard.css'

export default function ProjectCard({ name, description, technologies }) {
  return (
    <div className="project-card">
      <h3>{name} ⭐</h3>
      <p>{description}</p>
      <p>Tech: {technologies.join(', ')}</p>
    </div>
  )
}
