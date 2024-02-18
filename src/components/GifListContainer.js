import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=pUl1GhYdY6707LiACNKivW1AtNawpwHl&rating=g&limit=3`
      );
      const result = await response.json();
      setGifs(result.data);
    };

    if (search !== '') {
      fetchData();
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearch(searchValue);
  };

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
