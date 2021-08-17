import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Classic, Bmi, Bmr } from "./components";

function App() {
  return (
    <div className="App, font">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/classic" exact component={() => <Classic />} />
          <Route path="/bmi" exact component={() => <Bmi />} />
          <Route path="/bmr" exact component={() => <Bmr />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;