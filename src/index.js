import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from './utils/firebaseConfig'

const root = ReactDOM.createRoot(document.getElementById('root'));
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null);

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode >
);

