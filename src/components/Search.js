import React, { useState } from 'react';
import ListingCard from './ListingCard';
// import listings from "./App"

function Search({ onSearch }) {
  // const [listings, setListings] = useState([]);
  const [search, setSearch] = useState('');
  // console.log('search', listings);

  function handleSubmit(e) {
    e.preventDefault();
    // setSearch(searchListings);
    onSearch(search);
  }
  // function handleSearch(e) {
  //   setSearch(e.target.value);

  // }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
      {/* <ul> {projectElement} </ul> */}
    </form>
  );
}

export default Search;
