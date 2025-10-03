import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Entry point for the React application. ReactDOM.createRoot
// initializes the app and attaches it to the #root element in
// index.html. StrictMode helps highlight potential problems during
// development.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
