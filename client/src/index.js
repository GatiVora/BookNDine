import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { AuthProvider } from './Components/AuthContext';
import AuthProvider from './Components/Auth.jsx';
import { BrowserRouter, Routes } from 'react-router-dom';
// import { AuthProvider } from './Components/AuthContext.jsx';
import AuthProvider2 from './Components/ResAuth.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <AuthProvider2>
      <AuthProvider>
        <App />
      </AuthProvider>
      </AuthProvider2>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
