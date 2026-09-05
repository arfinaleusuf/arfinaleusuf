import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker with automatic background cache update
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('New portfolio content available, caching update.');
  },
  onOfflineReady() {
    console.log('Arfin.dev portfolio is ready for offline usage.');
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
