// src/components/Header/Header.jsx
import './Header.css'

export default function Header({ name, tagline }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <h2>{tagline}</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
