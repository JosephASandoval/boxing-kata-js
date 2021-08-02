import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useColorCount from "../hooks/useColorCount";

function RefillBoxes() {
  const { numBrushes, numRefill, family } = useContext(Context);
  const { colorCount } = useColorCount();
  const { blue, green, pink } = colorCount(family);

  return (
    <div>
      <h1>Refill Boxes</h1>
      <h2>Summary:</h2>
      <div className="summary">
        <h3>Refill Boxes: {numRefill ? numRefill : null}</h3>
        <h3>Replacement Heads: {numBrushes ? numBrushes : null}</h3>
      </div>

      <h1>Boxes:</h1>
      <div className="boxes">
        <h3>{blue} blue replacement heads</h3>
        <h3>{green} green replacement heads</h3>
        <h3>{pink} pink replacement head</h3>
      </div>
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
