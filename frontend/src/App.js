import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StarterBoxes from "./pages/StarterBoxes";
import RefillBoxes from "./pages/RefillBoxes";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Switch>
        <Route exact path="/">
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
