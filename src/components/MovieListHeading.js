import React from 'react';
//Define funcgtional component MovieListHeading that takes props 
const MovieListHeading = (props) =>{
    return(
        //Return a div element with the class 'col' containing an h1 element with heading text from props
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
    )
};
export default MovieListHeading;