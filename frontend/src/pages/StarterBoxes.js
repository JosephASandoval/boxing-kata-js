import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useCreateStarterBoxesData from "../hooks/useCreateStarterBoxesData";
import useCreateStarterBoxes from "../hooks/useCreateStarterBoxes";
import StarterBoxSummary from "../components/StarterBoxSummary"

function StarterBoxes() {
  const { family } = useContext(Context);
  const { createStarterBoxesData } = useCreateStarterBoxesData();
  const starterBoxesData = createStarterBoxesData(family);
  const { createStarterBoxes } = useCreateStarterBoxes();
  const starterBoxes = createStarterBoxes(starterBoxesData);

  return (
    <div>
      <StarterBoxSummary />

      <h1>Boxes:</h1>
      <div className="boxes">{starterBoxes}</div>
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
