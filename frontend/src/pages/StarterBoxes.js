import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useColorCount from "../hooks/useColorCount";

function StarterBoxes() {
  const { numBrushes, numStarter, family } = useContext(Context);
  const { colorCount } = useColorCount();
  const colorCountObj = colorCount(family);

  function createBoxes() {
    const boxesArr = [];
    let firstColor;
    let secondColor;

    const colorCountArr = Object.entries(colorCountObj);
    const filteredColorCountArr = colorCountArr.filter((el) => el[1] > 0);
    filteredColorCountArr.sort((a, b) => b[1] - a[1]);

    const formattedColorCountArr = formatArr(filteredColorCountArr);

    for (let i = 0; i < formattedColorCountArr.length; i++) {
      let [currentColor, currentValue] = formattedColorCountArr[i];
      let nextElement = formattedColorCountArr[i + 1] || ["", 0];

      while (currentValue > 0) {
        if (currentValue >= 2) {
          firstColor = currentColor;
          secondColor = firstColor;
          currentValue -= 2;
          createBox(firstColor, secondColor, boxesArr);
        } else if (currentValue === 1 && nextElement[1] > 0) {
          firstColor = currentColor;
          secondColor = nextElement[0];
          currentValue -= 1;
          nextElement[1] -= 1;
          createBox(firstColor, secondColor, boxesArr);
        } else {
          firstColor = currentColor;
          secondColor = null;
          currentValue -= 1;
          createBox(firstColor, secondColor, boxesArr);
        }
      }
    }
    return boxesArr;
  }

  function formatArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let [color, value] = arr[i];

      let nextValue = arr[i + 1] ? arr[i + 1][1] : 0;

      while (value > 0) {
        if (value >= 2) {
          newArr.push([color, 2]);
          value -= 2;
        } else if (value === 1 && nextValue > 0) {
          arr.push([color, 1]);
          value -= 1;
        } else {
          newArr.push([color, 1]);
          value -= 1;
        }
      }
    }

    return newArr;
  }

  function createBox(firstColor, secondColor, arr) {
    if (firstColor === secondColor) {
      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-${firstColor} ri-drop-line`}></i>
          <div>
            <h3>2 brushes</h3>
            <h3>2 replacement heads</h3>
          </div>
        </div>
      );
    } else if (secondColor && firstColor !== secondColor) {
      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-${firstColor} ri-drop-line`}></i>
          <div>
            <h3>1 brush</h3>
            <h3>1 replacement head</h3>
          </div>
          <i className={`color-${secondColor} ri-drop-line`}></i>
          <div>
            <h3>1 brush</h3>
            <h3>1 replacement head</h3>
          </div>
        </div>
      );
    } else {
      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-${firstColor} ri-drop-line`}></i>
          <div>
            <h3>1 brush</h3>
            <h3>1 replacement head</h3>
          </div>
        </div>
      );
    }
  }

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
      <div className="boxes">{createBoxes()}</div>
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
