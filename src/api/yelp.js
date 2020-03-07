/** @format */

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ELFSsmapUFjimTyFhBFQjk-3aY4dBh3PZqE5Oo3TIo9AZ8zEUh0fmgxHeXwEYRYpZc7YCVKGZg-Qk_A-swrffYSJi4omA3vOQetJkO9CNVPwmHJ6Zrx3lEHC5aNiXnYx',
  },
});
