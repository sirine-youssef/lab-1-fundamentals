// src/components/About/About.jsx
import './About.css'

export default function About({ profileImage, bio, skills }) {
  return (
    <section className="about">
      <img src={profileImage} alt="Profile" className="profile-img" />
      <p>{bio}</p>
      <h4>Skills:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
