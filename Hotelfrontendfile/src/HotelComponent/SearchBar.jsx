import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:8080/api/location/fetch'; // Replace with your API URL
    fetch(`${apiUrl}?location=${searchTerm}&name=${searchTerm}`)
     .then(response => response.json())
     .then(data => setSearchResults(data));
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search by location or hotel name"
          style={{
            width: '300px',
            height: '40px',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>
      <ul>
        {searchResults.map((hotel) => (
          <li key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.location.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;