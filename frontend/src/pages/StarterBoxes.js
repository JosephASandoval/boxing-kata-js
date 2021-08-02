import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useColorCount from "../hooks/useColorCount";

function StarterBoxes() {
  const { numBrushes, numStarter, family } = useContext(Context);
  const { colorCount } = useColorCount();
  const { blue, green, pink } = colorCount(family);

  return (
    <div>
      <h1>Starter Boxes</h1>
      <h2>Summary:</h2>
      <div className="summary">
        <h3>Starter Boxes: {numStarter ? numStarter : null}</h3>
        <h3>Brushes: {numBrushes ? numBrushes : null}</h3>
        <h3>Replacement Heads: {numBrushes ? numBrushes : null}</h3>
      </div>

      <h1>Boxes:</h1>
      <div className="boxes">
        <h3>{blue} blue brushes</h3>
        <h3>{blue} blue replacement heads</h3>
        <h3>{green} green brushes</h3>
        <h3>{green} green replacement heads</h3>
        <h3>{pink} pink brush</h3>
        <h3>{pink} pink replacement head</h3>
      </div>
    </div>
  );
}

StarterBoxes.propTypes = {
  family: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brush_color: PropTypes.string.isRequired,
  }),
};

export default StarterBoxes;
