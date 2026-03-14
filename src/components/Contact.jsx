// src/components/Contact/Contact.jsx
import './Contact.css'

export default function Contact({ email, github, linkedin }) {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Email: {email}</p>
      <p>GitHub: {github}</p>
      <p>LinkedIn: {linkedin}</p>
    </section>
  )
}
