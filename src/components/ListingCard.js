import React, { useState } from 'react';

function ListingCard({
  listing: { id, image, description, location },
  onDelete,
}) {
  const [favorite, setFavorite] = useState(false);

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    });

    onDelete(id);
  }

  console.log(image);
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
