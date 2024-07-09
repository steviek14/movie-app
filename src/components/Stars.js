import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';
//Define a functional component StarRating that takes props rating and onRatingChange
const StarRating = ({ rating, onRatingChange }) => {
    //state to manage the hover state of stars 
  const [hoverRating, setHoverRating] = useState(0);
//function to handle the mouse over event
  const handleMouseOver = (index) => {
    setHoverRating(index);//Sets the hoverRating state to the current star index 
  };
//function to handle the mouse leave event 
  const handleMouseLeave = () => {
    setHoverRating(0); //Resets hoverRating state when mouse leaves the stars 
  };
//Function to handle click event on a star 
  const handleClick = (index) => {
    onRatingChange(index); //Calls the onRatingChange function with the selected star index 
  };
//Render the component 
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className="star"
            color={starValue <= (hoverRating || rating) ? '#ffc107' : '#e4e5e9'}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;