import React from "react";
//Define functional component Searchbox that takes props searchValue and setSearchValue 
const SearchBox = ({ searchValue, setSearchValue }) => {
    return (
        //return a div element with class 
      <div className='col col-sm-4'>
        <input
          className='form-control' //Bootstrap class for styling 
          value={searchValue || ''} //value of the input field, defaults to empty string if searchValue is null or undefined 
          onChange={(event) => setSearchValue(event.target.value)} //onChange event handler to update searchValue state
          placeholder='Type to search...' //placeholder text displayed inside the input field 
        />
      </div>
    );
  };
  
  export default SearchBox;