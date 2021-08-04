import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useCreateRefillBoxesData from "../hooks/useCreateRefillBoxesData";
import useCreateRefillBoxes from "../hooks/useCreateRefillBoxes";
import RefillBoxSummary from "../components/RefillBoxSummary";


function RefillBoxes() {
  const { family } = useContext(Context);
  const { createRefillBoxesData } = useCreateRefillBoxesData();
  const refillBoxesData = createRefillBoxesData(family);
  const { createRefillBoxes } = useCreateRefillBoxes();
  const refillBoxes = createRefillBoxes(refillBoxesData);

  return (
    <div>
      <RefillBoxSummary />

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
