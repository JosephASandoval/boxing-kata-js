import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StarterBoxes from "./pages/StarterBoxes";
import TestStarterBoxes from "./pages/TestStarterBoxes";
import RefillBoxes from "./pages/RefillBoxes";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <TestStarterBoxes />
        </Route>

        <Route path="/refill">
          <RefillBoxes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
