import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample movie data
  const movies = {
    1: {
      title: "Inception",
      description:
        "A skilled thief is given a chance at redemption if he can successfully perform inception—planting an idea into someone's subconscious.",
      releaseDate: "2010-07-16",
      rating: "8.8",
      genres: ["Action", "Sci-Fi", "Thriller"],
      image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    },
    2: {
      title: "The Dark Knight",
      description:
        "Batman faces the Joker, a criminal mastermind who wants to see Gotham descend into anarchy.",
      releaseDate: "2008-07-18",
      rating: "9.0",
      genres: ["Action", "Crime", "Drama"],
      image: "https://m.media-amazon.com/images/I/51F4JmfOTsL._AC_.jpg",
    },
    3: {
      title: "Interstellar",
      description:
        "A team of astronauts travels through a wormhole in search of a new home for humanity.",
      releaseDate: "2014-11-07",
      rating: "8.6",
      genres: ["Adventure", "Drama", "Sci-Fi"],
      image: "https://m.media-amazon.com/images/I/71ySp1D24PL._AC_SL1024_.jpg",
    },
  };

  useEffect(() => {
    // Simulate fetching movie data
    setLoading(true);
    setTimeout(() => {
      setMovie(movies[id]);
      setLoading(false);
    }, 1000); // Simulate network delay
  }, [id]);

  if (loading) {
    return (
      <div className="movie-details">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="movie-details">
        <h1>Movie Not Found</h1>
        <p>We couldn't find any movie with ID: {id}.</p>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-description">{movie.description}</p>
      <div className="movie-info">
        <p>
          <strong>Release Date:</strong> {movie.releaseDate}
        </p>
        <p>
          <strong>Rating:</strong> {movie.rating}/10
        </p>
        <p>
          <strong>Genres:</strong> {movie.genres.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
