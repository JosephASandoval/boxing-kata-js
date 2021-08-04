import React, { useContext } from "react";
import { Context } from "../Context";

function StarterBoxSummary() {
  const { numBrushes, numStarter } = useContext(Context);

  return (
    <div>
      <h1>Starter Boxes</h1>
      <h2>Summary:</h2>
      <div className="summary">
        <h3>Starter Boxes: {numStarter ? numStarter : null}</h3>
        <h3>Brushes: {numBrushes ? numBrushes : null}</h3>
        <h3>Replacement Heads: {numBrushes ? numBrushes : null}</h3>
      </div>
    </div>
  );
}

export default StarterBoxSummary;
