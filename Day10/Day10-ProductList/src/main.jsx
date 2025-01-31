import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your Tailwind CSS and custom styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Add dark mode support via Tailwind CSS in HTML or CSS class
root.render(
  <React.StrictMode>
    <div className="dark">
      <App />
    </div>
  </React.StrictMode>
);
