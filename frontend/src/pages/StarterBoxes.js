import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useCreateStarterBoxesData from "../hooks/useCreateStarterBoxesData";
import useCreateStarterBoxes from "../hooks/useCreateStarterBoxes";

function StarterBoxes() {
  const { numBrushes, numStarter, family } = useContext(Context);
  const { createStarterBoxesData } = useCreateStarterBoxesData();
  const starterBoxesData = createStarterBoxesData(family);
  const { createStarterBoxes } = useCreateStarterBoxes();
  const starterBoxes = createStarterBoxes(starterBoxesData);

  let startScreen =
    family.length > 0 ? (
      <div className="boxes">{starterBoxes}</div>
    ) : (
      <h1 className="error">Error: Could not receive family preferences</h1>
    );

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
      {startScreen}
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
