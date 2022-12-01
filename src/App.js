import React, { useContext } from 'react';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import Loader from './components/Loader/Loader';
import { Context } from "./index";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loader />


  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
