import React, { useContext } from "react";
import { Context } from "../Context";

function RefillSummary() {
  const { numBrushes, numRefillBoxes } = useContext(Context);

  return (
    <div>
      <h1>Refill Boxes</h1>
      <h2>Summary:</h2>
      <div className="summary">
        <h3>Refill Boxes: {numRefillBoxes ? numRefillBoxes : null}</h3>
        <h3>Replacement Heads: {numBrushes ? numBrushes : null}</h3>
      </div>
    </div>
  );
}

export default RefillSummary;
