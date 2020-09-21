import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import StuLanding from "./StuComponents/stuLanding";
import CrLanding from "./CrComponents/crLanding";
import About from "./about";
import MainNavBar from "./NavBar/mainNavBar";
import NewCr from "./CrComponents/newCr";
import AfterSignup from "./CrComponents/afterSignup";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/student" exact component={StuLanding} />
          <Route path="/newcr" exact component={NewCr} />
          <Route path="/newcr/details" exact component={AfterSignup} />
          <Route path="/cr" exact component={CrLanding} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
