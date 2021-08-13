import React, { useContext } from "react";
import RefillSummary from "../components/RefillSummary";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useFormatData from "../hooks/useFormatData";
import { createBoxes } from "../utils/createBoxes";

const MAX_ITEMS = 4;

function RefillBoxes() {
  const { family, numRefillBoxes } = useContext(Context);
  const { formatData } = useFormatData();
  const refillBoxesData = formatData(family, MAX_ITEMS);
  const refillBoxes = createBoxes(
    refillBoxesData,
    numRefillBoxes,
    MAX_ITEMS
  );

  return (
    <div>
      <RefillSummary />

      <h1 className="box-title">Boxes:</h1>
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
