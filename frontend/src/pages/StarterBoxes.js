import React, { useContext } from "react";
import StarterSummary from "../components/StarterSummary";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useFormatData from "../hooks/useFormatData"
import { createStarterBoxes } from "../utils/createStarterBoxes";

const BOX_TYPE = "starter"

function StarterBoxes() {
  const { family } = useContext(Context);
  const { formatData } = useFormatData();
  const starterBoxesData = formatData(family, BOX_TYPE)
  const starterBoxes = createStarterBoxes(starterBoxesData);

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
