// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="page-container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
        <div className="padding-footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
