/** @format */

import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'toronto',
        },
      });
      setResults(response.data.businesses);

      return;
    } catch (err) {
      setErrorMessage('Oops... Sorry something went wrong');
    }
  };

  // Call searchApi when component is first rendered
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};

export default useResults;
