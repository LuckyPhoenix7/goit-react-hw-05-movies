import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'e83fa151a85aa806fd7d4370653073b9';

export const getTrend = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const getSearch = async query => {
  const params = {
    api_key: KEY,
    query,
    include_adult: false,
    language: 'en-US',
  };
  const response = await axios.get('search/movie', { params });
  return response.data.results;
};

export const getDetails = async movie_id => {
  const params = {
    api_key: KEY,
    language: 'en-US',
  };
  const response = await axios.get(`movie/${movie_id}`, { params });
  return response.data;
};

export const getCast = async movie_id => {
  const params = {
    api_key: KEY,
    language: 'en-US',
  };
  const response = await axios.get(`movie/${movie_id}/credits`, { params });
  return response.data.cast;
};

export const getReviews = async movie_id => {
  const params = {
    api_key: KEY,
    language: 'en-US',
  };
  const response = await axios.get(`movie/${movie_id}/reviews`, { params });
  return response.data.results;
};
