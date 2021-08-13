import React, { useContext } from "react";
import StarterSummary from "../components/StarterSummary";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useFormatData from "../hooks/useFormatData";
import { createBoxes } from "../utils/createBoxes";

const MAX_ITEMS = 2;

function StarterBoxes() {
  const { family, numStarterBoxes } = useContext(Context);
  const { formatData } = useFormatData();
  const starterBoxesData = formatData(family, MAX_ITEMS);
  const starterBoxes = createBoxes(
    starterBoxesData,
    numStarterBoxes,
    MAX_ITEMS
  );

  return (
    <div>
      <StarterSummary />

      <h1 className="box-title">Boxes:</h1>
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
