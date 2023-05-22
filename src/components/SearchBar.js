import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  
  //add a parament to the event method
  //to prevent the browser from relaoding the form
  const handleFormSubmit = (event) => {
    //prevents browser reload
    event.preventDefault();

    //set the term as a param for the onSubmit function
    onSubmit(term);
  };

  const handleChange = (event) => {
    //event.target.value gets the value in the input tag
    // console.log(event.target.value);
    setTerm(event.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleFormSubmit} style={{ marginBottom: '25px' }}>
        <input
          value={term}
          onChange={handleChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            width: '300px',
          }}
          placeholder="Enter a term..."
        />
      </form>
    </div>

  );
}

export default SearchBar;

