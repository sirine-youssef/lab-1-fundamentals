import "./Card.css"

export default function Card({ title, children }) {
  return (
    <div className="card-wrapper">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}
