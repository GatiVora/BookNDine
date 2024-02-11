// import React from "react";
// import { useContext, createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";


// import api from '../api'

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {

//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("site") || "");

//   const navigate = useNavigate();

//   const loginAction = async (data) => {
//     try {
//       const res = await api.post('/login/', data);

//       if(res.data){
//         setUser(res.data.user);
//         setToken(res.data.access_token)
//          // Store the access token in local storage
//          localStorage.setItem("site", res.data.access_token);
  
//          // Navigate to the home page or any other route as needed
//          navigate("/home");

//       }

//       // console.log(res)
  
//       // if (res.data && res.data.access_token) { // Assuming res.data contains the response data
//       //   // Extract the access token from the response
//       //   const { access_token } = res.data;
  
//       //   // Store the access token in local storage
//       //   localStorage.setItem("site", access_token);
  
//       //   // Navigate to the home page or any other route as needed
//       //   navigate("/home");
//       // }
//        else {
//         // Handle invalid response or missing access token
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };
  

//   const logOut = () => {
//     setUser(null);
//     setToken("");
//     localStorage.removeItem("site");
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );

// };

// export default AuthProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
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
      const res = await api.post('/login/', data);

      if (res.data) {
        setUser(res.data.user);
        setToken(res.data.access_token);

        // Store user and token in localStorage
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("site", res.data.access_token);

        // Navigate to the home page or any other route as needed
        navigate("/home");
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
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
