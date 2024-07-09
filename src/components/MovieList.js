import React, { useState } from 'react';
import StarRating from './Stars'; // Ensure the import path is correct

const MovieList = ({ movies }) => {
  const [movieRatings, setMovieRatings] = useState({});

  const handleRatingChange = (movieId, newRating) => {
    setMovieRatings({ ...movieRatings, [movieId]: newRating });
  };

  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <>
      {movies.map(movie => (
        <div key={movie.imdbID} className="col-md-3 mb-4">
          <div className="card">
            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">{movie.Year}</p>
              <StarRating
                rating={movieRatings[movie.imdbID] || 0}
                onRatingChange={(newRating) => handleRatingChange(movie.imdbID, newRating)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;