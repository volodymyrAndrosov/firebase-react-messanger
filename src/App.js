import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
