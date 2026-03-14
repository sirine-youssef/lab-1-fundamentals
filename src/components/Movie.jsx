import "./Movie.css"

export default function Movie({ title, director, year, rating }) {
  // Create stars string
  const stars = "⭐".repeat(Math.round(rating))

  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Rating:</strong> {stars}</p>
    </div>
  )
}
