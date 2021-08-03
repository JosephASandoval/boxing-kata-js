import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useColorCount from "../hooks/useColorCount";

function TestStarterBoxes() {
  const { numBrushes, numStarter, family } = useContext(Context);
  const { colorCount } = useColorCount();
  const colorCountObj = colorCount(family);

  function boxesDataFunc(colorCountObj) {
    const { blue, green, pink } = colorCountObj;

    const blueDouble = Math.floor(blue / 2);
    const greenDouble = Math.floor(green / 2);
    const pinkDouble = Math.floor(pink / 2);
    const blueSingle = blue % 2;
    const greenSingle = green % 2;
    const pinkSingle = pink % 2;

    return {
      blueDouble,
      greenDouble,
      pinkDouble,
      blueSingle,
      greenSingle,
      pinkSingle,
    };
  }

  const boxesDataObj = boxesDataFunc(colorCountObj);
  const boxesDataArr = Object.entries(boxesDataObj);
  const filteredBoxesData = boxesDataArr.filter((el) => el[1] > 0);
  console.log(filteredBoxesData)

  function createBoxes(arr) {
    let singlesArr = [];
    let boxesArr = [];

    for (let i = 0; i < arr.length; i++) {
      const [type, quantity] = arr[i];

      if (type.includes("Double")) {
        createDouble(type, quantity, boxesArr);
      } else {
        singlesArr.push(type);
        if (singlesArr.length === 2) {
          const [type1, type2] = singlesArr;
          createHybrid(type1, type2, boxesArr);
          singlesArr = [];
        }
      }
    }

    if (singlesArr.length > 0) {
      const [type] = singlesArr;
      createSingle(type, boxesArr);
    }

    return boxesArr;
  }

  function createDouble(type, quantity, arr) {
    let color;

    if (type.includes("blue")) {
      color = "blue";
    } else if (type.includes("green")) {
      color = "green";
    } else {
      color = "pink";
    }

    let i = 0;
    while (i < quantity) {
      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-${color} ri-drop-line`}></i>
          <div>
            <h3>2 brushes</h3>
            <h3>2 replacement heads</h3>
          </div>
        </div>
      );
      i++;
    }
  }

  function createHybrid(type1, type2, arr) {
    let color1;
    let color2;

    if (type1.includes("blue")) {
      color1 = "blue";
    } else if (type1.includes("green")) {
      color1 = "green";
    } else {
      color1 = "pink";
    }

    if (type2.includes("blue")) {
      color2 = "blue";
    } else if (type2.includes("green")) {
      color2 = "green";
    } else {
      color2 = "pink";
    }

    arr.push(
      <div key={arr.length} className="box">
        <i className={`color-${color1} ri-drop-line`}></i>
        <div>
          <h3>1 brush</h3>
          <h3>1 replacement head</h3>
        </div>
        <i className={`color-${color2} ri-drop-line`}></i>
        <div>
          <h3>1 brush</h3>
          <h3>1 replacement head</h3>
        </div>
      </div>
    );
  }

  function createSingle(type, arr) {
    let color;

    if (type.includes("blue")) {
      color = "blue";
    } else if (type.includes("green")) {
      color = "green";
    } else {
      color = "pink";
    }

    arr.push(
      <div key={arr.length} className="box">
        <i className={`color-${color} ri-drop-line`}></i>
        <div>
          <h3>1 brush</h3>
          <h3>1 replacement head</h3>
        </div>
      </div>
    );
  }

  const boxes = createBoxes(filteredBoxesData);

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
      <div className="boxes">{boxes}</div>
    </div>
  );
}

TestStarterBoxes.propTypes = {
  family: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brush_color: PropTypes.string.isRequired,
  }),
};

export default TestStarterBoxes;
