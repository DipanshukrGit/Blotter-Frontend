// API Configuration
const getBaseUrl = () => {
  if (typeof window === 'undefined') {
    return import.meta.env.VITE_API_URL || "http://localhost:4000";
  }
  
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
  const DEPLOYED_API_URL = "https://blotter-backend-enoo.onrender.com";
  
  // Use local URL if running on localhost, otherwise use deployed URL
  return (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    ? API_BASE_URL
    : DEPLOYED_API_URL;
};

export const BASE_URL = getBaseUrl();

export const API_ENDPOINTS = {
  USER: {
    SIGNUP: `${BASE_URL}/user/signup`,
    LOGIN: `${BASE_URL}/user/login`,
  },
  BLOG: {
    ALL: `${BASE_URL}/blog/all`,
    CREATE: `${BASE_URL}/blog/create`,
    DELETE: (id) => `${BASE_URL}/blog/delete/${id}`,
    SINGLE: (id) => `${BASE_URL}/blog/${id}`,
    USER_BLOGS: `${BASE_URL}/blog/user/blogs`,
  },
  IMAGES: (filename) => `${BASE_URL}/images/${filename}`,
};

