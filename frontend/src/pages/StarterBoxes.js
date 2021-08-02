import React, { useContext } from "react";
// import Boxes from "../components/Boxes"
import { Context } from "../Context";

function StarterBoxes() {
  const { numBrushes, numStarter } = useContext(Context);

  return (
    <div>
      <h1>Starter Boxes</h1>
      <h2>Summary:</h2>
      <div className="summary"> {/* apply styling here */}
        <h3>Starter Boxes: {numStarter ? numStarter : null}</h3>
        <h3>Brushes: {numBrushes ? numBrushes : null}</h3>
        <h3>Replacement Heads: {numBrushes ? numBrushes : null}</h3>
      </div>

      <h1>Boxes:</h1>
      <div className="boxes">
        <h3>2 brushes</h3>
        <h3>2 replacement heads</h3>
        <h3>2 brushes</h3>
        <h3>2 replacement heads</h3>
        <h3>1 brush</h3>
        <h3>1 replacement head</h3>
      </div>
    </div>
  );
}

export default StarterBoxes;
