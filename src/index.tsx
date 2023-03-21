import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollToTop from "react-scroll-to-top";
import 'aos/dist/aos.css';
import "swiper/swiper.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScrollToTop smooth color="#000" />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
