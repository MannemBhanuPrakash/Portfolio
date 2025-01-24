import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "./ThemeContext";
import { AlertProvider } from './common/Alert';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>
);


