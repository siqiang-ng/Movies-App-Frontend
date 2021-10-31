import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#282c34",
        }}
      >
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/update/:id" component={Update}></Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
