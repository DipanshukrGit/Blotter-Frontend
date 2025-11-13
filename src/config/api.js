// API Configuration
const getBaseUrl = () => {
  // Use environment variable if set, otherwise determine based on environment
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Check if running in production (Vercel)
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === "localhost" || 
                       window.location.hostname === "127.0.0.1";
    
    // Use deployed Render backend URL for production (Vercel)
    if (!isLocalhost) {
      return "https://blotter-backend-enoo.onrender.com";
    }
  }
  
  // Default to localhost for development
  return "http://localhost:4000";
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

