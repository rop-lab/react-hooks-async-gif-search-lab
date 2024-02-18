import React from 'react';

const GifSearch = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" placeholder="Search GIFs" />
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;