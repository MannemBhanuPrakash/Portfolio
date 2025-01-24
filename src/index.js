import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "./ThemeContext";
import { AlertProvider } from './common/Alert';
// import HotjarInit from './hotjar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AlertProvider>
        <HotjarInit/>
        <App />
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>
);


