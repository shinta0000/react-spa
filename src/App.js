import { BrowserRouter, Route, Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
