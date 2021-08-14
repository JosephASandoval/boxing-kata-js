import React, { useContext } from "react";
import RefillSummary from "../components/RefillSummary";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useFormatData from "../hooks/useFormatData";
import { createBoxContainer } from "../utils/createBoxContainer";

const MAX_ITEMS = 4;

function RefillBoxes() {
  const { family, numRefillBoxes } = useContext(Context);
  const { formatData } = useFormatData();
  const refillBoxItems = formatData(family);
  const refillBoxContainer = createBoxContainer(
    refillBoxItems,
    numRefillBoxes,
    MAX_ITEMS
  );

  return (
    <div>
      <RefillSummary />

      <h1 className="box-title">Boxes:</h1>
      <div className="boxes">{refillBoxContainer}</div>
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
