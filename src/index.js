import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './utils/firebaseConfig'


// Initialize Firebase
const root = ReactDOM.createRoot(document.getElementById('root'));
firebase.initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
