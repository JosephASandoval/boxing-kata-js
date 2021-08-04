import React, { useContext } from "react";
import RefillSummary from "../components/RefillSummary";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useFormatData from "../hooks/useFormatData";
import { createRefillBoxes } from "../utils/createRefillBoxes";

const BOX_TYPE = "refill";

function RefillBoxes() {
  const { family } = useContext(Context);
  const { formatData } = useFormatData();
  const refillBoxesData = formatData(family, BOX_TYPE);
  const refillBoxes = createRefillBoxes(refillBoxesData);

  return (
    <div>
      <RefillSummary />

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
