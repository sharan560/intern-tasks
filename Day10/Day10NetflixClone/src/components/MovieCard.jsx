import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </div>
  );
}

export default MovieCard;
