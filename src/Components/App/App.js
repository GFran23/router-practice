import React from "react";
import "./App.css";
import Navbar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route component={Error} />
          </Switch>
        </header>
      </div>
    </>
  );
}

export default App;
