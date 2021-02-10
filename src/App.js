import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper/wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar/navbar"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

function App() {

  return (
    <Router>
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
                  </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
