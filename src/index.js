import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDsuqcPq7OGT_p3tU9lkly9q1ITZEcei0s",
    authDomain: "game-on-react-bdad0.firebaseapp.com",
    projectId: "game-on-react-bdad0",
    storageBucket: "game-on-react-bdad0.appspot.com",
    messagingSenderId: "712526598877",
    appId: "1:712526598877:web:67425725567f5f8c068134"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
