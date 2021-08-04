import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StarterSummary from "./components/StarterSummary";
import StarterBoxes from "./pages/StarterBoxes";
import RefillBoxes from "./pages/RefillBoxes";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          <StarterSummary />
        </Route>

        <Route path="/starter">
          <StarterBoxes />
        </Route>

        <Route path="/refill">
          <RefillBoxes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
