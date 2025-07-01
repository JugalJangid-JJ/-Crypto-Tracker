import React from 'react';

const CryptoCard = ({ id, price, isFavorite, toggleFavorite }) => (
  <div className="card">
    <h2>{id.toUpperCase()}</h2>
    <p>Price: ${price || 'Loading...'}</p>
    <button onClick={() => toggleFavorite(id)}>
      {isFavorite ? '★ Favorite' : '☆ Mark Favorite'}
    </button>
  </div>
);