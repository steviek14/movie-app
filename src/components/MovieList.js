import React, { useState } from 'react';
import StarRating from './Stars'; // Import the StarRating component 

//Define a functional component MovieList that takes props movies 
const MovieList = ({ movies }) => {
    //State to store movie rating, initalized as an empty object 
  const [movieRatings, setMovieRatings] = useState({});
//Function to handle changes in movie ratings
  const handleRatingChange = (movieId, newRating) => {
    //update movieratings state with the n ew rating for specified movieID
    setMovieRatings({ ...movieRatings, [movieId]: newRating });
  };
//If there are no movies or movies array is empty, render a message
  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>;
  }
//Render the component 
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