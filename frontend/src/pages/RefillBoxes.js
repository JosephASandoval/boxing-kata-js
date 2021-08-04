import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useCreateRefillBoxesData from "../hooks/useCreateRefillBoxesData";
import useCreateRefillBoxes from "../hooks/useCreateRefillBoxes";

function RefillBoxes() {
  const { numBrushes, numRefill, family } = useContext(Context);
  const { createRefillBoxesData } = useCreateRefillBoxesData();
  const refillBoxesData = createRefillBoxesData(family);
  const { createRefillBoxes } = useCreateRefillBoxes();
  const refillBoxes = createRefillBoxes(refillBoxesData);

  return (
    <div>
      <h1>Refill Boxes</h1>
      <h2>Summary:</h2>
      <div className="summary">
        <h3>Refill Boxes: {numRefill ? numRefill : null}</h3>
        <h3>Replacement Heads: {numBrushes ? numBrushes : null}</h3>
      </div>

      <h1>Boxes:</h1>
      <div className="boxes">{refillBoxes}</div>
    </div>
  );
}

RefillBoxes.propTypes = {
  family: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brush_color: PropTypes.string.isRequired,
  }),
};

export default RefillBoxes;
