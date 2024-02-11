
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api';

const AuthContext2 = createContext();

const AuthProvider2 = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user and token from localStorage
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("site");

    if (storedToken) {
      // Set token state if it exists in localStorage
      setToken(storedToken);
    }

    if (storedUser) {
      // Set user state if it exists in localStorage
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loginAction = async (data) => {
    try {
      const res = await api.post('/reslogin/', data);

      if (res.data) {
        setUser(res.data.user);
        setToken(res.data.access_token);

        // Store user and token in localStorage
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("site", res.data.access_token);

        // Navigate to the home page or any other route as needed
        navigate("/reshome");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      throw new Error("Invalid credentials");
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext2.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext2.Provider>
  );
};

export default AuthProvider2;

export const useAuth2 = () => {
  return useContext(AuthContext2);
};
