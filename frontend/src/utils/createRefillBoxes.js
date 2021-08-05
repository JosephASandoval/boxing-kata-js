import { createOneRefill } from "./refills/createOneRefill";
import { createTwoRefills } from "./refills/createTwoRefills";
import { createThreeRefills } from "./refills/createThreeRefills";
import { createFourRefills } from "./refills/createFourRefills";
import { createFiveRefills } from "./refills/createFiveRefills";
import { createSixRefills } from "./refills/createSixRefills";
import { createSevenRefills } from "./refills/createSevenRefills";
import { createEightRefills } from "./refills/createEightRefills";
import { createNineRefills } from "./refills/createNineRefills";

export function createRefillBoxes(refillBoxesData) {
  function createBox(refillBoxesData) {
    let boxesArr = []; 
    // goal is to fill this box with display items and return it at the end

    for (let i = 0; i < refillBoxesData.length; i++) {
      const [type, quantity] = refillBoxesData[i]; 

      if (type.includes("Group")) { 
        // using iteration becuase I know that the "Group" types are at the beginning if they exist
        createQuad(type, quantity, boxesArr);
      } else {
        break;
      }
    }

    const remainderArr = refillBoxesData.filter((el) =>
      el[0].includes("Remainder")
    );
    const sortedArr = remainderArr.sort((a, b) => a[1] - b[1]);
    // want to now just deal with the "Non-Group" type and sort them in ascending order

    let sumRemaining = 0;
    remainderArr.forEach((el) => (sumRemaining += el[1]));
    // varible to keep track of the remaining replacements that need to be placed in boxes

    let type1;
    let type2;
    let type3;
    let quantity1;
    let quantity2;
    let sortedArrLen = sortedArr.length;

    if (sortedArrLen === 1) {
      type1 = sortedArr[0][0];
      quantity1 = sortedArr[0][1];
    } else if (sortedArrLen === 2) {
      type1 = sortedArr[0][0];
      quantity1 = sortedArr[0][1];
      type2 = sortedArr[1][0];
      quantity2 = sortedArr[1][1];
    } else if (sortedArrLen === 3) {
      type1 = sortedArr[0][0];
      quantity1 = sortedArr[0][1];
      type2 = sortedArr[1][0];
      quantity2 = sortedArr[1][1];
      type3 = sortedArr[2][0];
    }
    // these variables help me create a unique key that helps me create a specific box using the createRemainder function

    if (sortedArrLen > 0) {
      createRemainder(
        type1,
        type2,
        type3,
        quantity1,
        quantity2,
        boxesArr,
        sumRemaining,
        sortedArrLen
      );
    }
    return boxesArr;
  }

  function createQuad(type, quantity, boxesArr) {
    let color;

    if (type && type.includes("blue")) {
      color = "blue";
    } else if (type && type.includes("green")) {
      color = "green";
    } else if (type && type.includes("pink")) {
      color = "pink";
    }

    let i = 0;
    while (i < quantity) {
      boxesArr.push(
        <div key={boxesArr.length} className="box">
          <i className={`color-${color} ri-drop-line`}></i>
          <div>
            <h3>4 replacement heads</h3>
          </div>
        </div>
      );
      i++;
    }
  }

  function createRemainder(
    type1,
    type2,
    type3,
    quantity1,
    quantity2,
    boxesArr,
    sumRemaining,
    sortedArrLen
  ) {
    let key;
    switch (sumRemaining) {
      case 9:
        key = type1;
        break;
      case 8:
        key = type1;
        break;
      case 7:
        key = quantity1;
        break;
      case 6:
        key = quantity1 + quantity2;
        break;
      case 5:
        key = quantity2;
        break;
      case 4:
        key = quantity2;
        break;
      case 3:
        key = sortedArrLen;
        break;
      case 2:
        key = type2;
        break;
      case 1:
        key = type1;
        break;
      default:
        break;
    }
    // A creative solution for asigning a unique key that helps me decipher between what specific box to create

    let color1;
    let color2;
    let color3;

    if (type1 && type1.includes("blue")) {
      color1 = "blue";
    } else if (type1 && type1.includes("green")) {
      color1 = "green";
    } else if (type1 && type1.includes("pink")) {
      color1 = "pink";
    }

    if (type2 && type2.includes("blue")) {
      color2 = "blue";
    } else if (type2 && type2.includes("green")) {
      color2 = "green";
    } else if (type2 && type2.includes("pink")) {
      color2 = "pink";
    }

    if (type3 && type3.includes("blue")) {
      color3 = "blue";
    } else if (type3 && type3.includes("green")) {
      color3 = "green";
    } else if (type3 && type3.includes("pink")) {
      color3 = "pink";
    }
    // Another creative solution for keeping track of the colors

    switch (sumRemaining) {
      case 9:
        createNineRefills(key, color1, color2, color3, boxesArr);
        break;
      case 8:
        createEightRefills(key, color1, color2, color3, boxesArr);
        break;
      case 7:
        createSevenRefills(key, color1, color2, color3, boxesArr);
        break;
      case 6:
        createSixRefills(key, color1, color2, color3, boxesArr);
        break;
      case 5:
        createFiveRefills(key, color1, color2, color3, boxesArr);
        break;
      case 4:
        createFourRefills(key, color1, color2, color3, boxesArr);
        break;
      case 3:
        createThreeRefills(key, color1, color2, color3, boxesArr);
        break;
      case 2:
        createTwoRefills(key, color1, color2, color3, boxesArr);
        break;
      case 1:
        createOneRefill(key, color1, color2, color3, boxesArr);
        break;
      default:
        break;
    }
  }

  const boxes = createBox(refillBoxesData);
  return boxes;
}
