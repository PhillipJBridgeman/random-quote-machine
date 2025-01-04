import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import for ReactDOM
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create the root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service Worker
serviceWorker.unregister();
