import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Bạn có thể thêm file CSS để tùy chỉnh giao diện

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
