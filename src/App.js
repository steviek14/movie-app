//imports
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import MovieList from "./components/MovieList"; 
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

//Define functional component App
const App = () => {
  //State variables using useState hook
  const [movies, setMovies] = useState([]); //state to store list of movies 
  const [searchValue, setSearchValue] = useState(''); //State to store search input value 

  // Hard-coded object array of movies data 
  const movieData = [
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      imdbID: "tt0111161",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/I/71715eBi1sL._AC_UF894,1000_QL80_.jpg",
      reviews: []
    },
    {
      Title: "The Godfather",
      Year: "1972",
      imdbID: "tt0068646",
      Type: "movie",
      Poster: "https://i5.walmartimages.com/seo/The-Godfather-Original-Movie-Poster-poster-Frameless-Gift-12-x-18-inch-30cm-x-46cm_c6df3fd5-1e9c-49ca-8cb6-1af6078df4c2.b21fd8bc877c5645b9340a53580833a2.jpeg",
      reviews: []
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      imdbID: "tt0468569",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg",
      reviews: []
    },
    {
      Title: "Inception",
      Year: "2010",
      imdbID: "tt1375666",
      Type: "movie",
      Poster: "https://i.ebayimg.com/images/g/B8oAAOSw2fdg5A-h/s-l1600.jpg",
      reviews: []
    },
   

  ];
//useEffect hook it inialize movies state with movieData array when component mounts 
  useEffect(() => {
    setMovies(movieData); //Set inital movies state 
  }, []);
//Function to handle search input change
  const handleSearch = (value) => {
    setSearchValue(value); //update search input value state 
    //Filter movies based on search input value 
    const filteredMovies = movieData.filter(movie =>
      movie.Title.toLowerCase().includes(value.toLowerCase()) //update movies state with filtered movies 
    );
    setMovies(filteredMovies);
  };
//Render the component 
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={handleSearch} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;