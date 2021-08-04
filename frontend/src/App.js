import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StarterBoxes from "./pages/StarterBoxes";
import StarterBoxSummary from "./components/StarterBoxSummary"
import RefillBoxes from "./pages/RefillBoxes";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <StarterBoxSummary />
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
