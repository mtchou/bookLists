import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const instance = axios.create({
  baseURL: BASE_URL, // Set the base URL for all requests
  responseType: 'json' // Set the response type to JSON
});

export default instance;
