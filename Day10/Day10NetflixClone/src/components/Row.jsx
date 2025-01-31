import MovieCard from './MovieCard';

function Row({ title, fetchUrl }) {
  const movies = Array(10).fill({ id: 1, title: 'Sample Movie', imageUrl: 'https://via.placeholder.com/150' });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__movies">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Row;
