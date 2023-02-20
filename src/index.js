import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
