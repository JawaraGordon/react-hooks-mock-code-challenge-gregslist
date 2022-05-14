import React from 'react';
import ListingCard from './ListingCard';

// setListings={listingItems}

function ListingsContainer({ listings, onDelete }) {
  console.log('LSContainer', listings);
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
