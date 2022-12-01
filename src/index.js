import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCltosyLwogA_jFgm81DwaRTW_9NaS--RQ",
  authDomain: "fir-react-messanger-f5f10.firebaseapp.com",
  projectId: "fir-react-messanger-f5f10",
  storageBucket: "fir-react-messanger-f5f10.appspot.com",
  messagingSenderId: "1030203397454",
  appId: "1:1030203397454:web:546b336ca9e4a635523a1f",
  measurementId: "G-6D7FJDQGL5"
};

// Initialize Firebase
const root = ReactDOM.createRoot(document.getElementById('root'));
firebase.initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
