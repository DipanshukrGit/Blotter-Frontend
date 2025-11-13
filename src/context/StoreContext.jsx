import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";

export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
      }
    }
  }, []);

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get(API_ENDPOINTS.BLOG.ALL);
        if (res.data.success && res.data.blogs) {
          setBlogData(res.data.blogs);
        }
      } catch (error) {
        console.log("error in all blogs api", error);
      }
    };
    allBlogs();
  }, []);

  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const contextValue = { blogData, user, loginUser, logoutUser };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;