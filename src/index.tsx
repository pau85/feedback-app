import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // The '!' tells TypeScript that 'container' is not null

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);