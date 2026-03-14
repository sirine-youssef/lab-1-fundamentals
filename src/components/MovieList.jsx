import Movie from './Movie';

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          director={movie.director}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </div>
  )
}