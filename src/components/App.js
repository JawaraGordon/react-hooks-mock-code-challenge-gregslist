import React, { useState, useEffect } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';
import Search from './Search';

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState('');

  // console.log("state" ,listings)

  function onDelete(id) {
    const filteredItem = listings.filter((item) => item.id !== id);
    setListings(filteredItem);
  }

  useEffect(() => {
    // console.log('useEffect 1');
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch('http://localhost:6001/listings');
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      setListings(data);
    }
  };

  const searchListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  //   function setListings(updatedItem) {
  //   const updatedItems = listings.map((item) => {
  //     if (item.id === updatedItem.id) {
  //       return updatedItem;
  //     } else {
  //       return item;
  //     }
  //   });
  //   setListings(updatedItems);
  // }

  return (
    <div className="app">
      {/* <Search listings={listings} /> */}
      <Header onSearch={setSearch} />
      <ListingsContainer listings={searchListings} onDelete={onDelete} />
    </div>
  );
}

export default App;
