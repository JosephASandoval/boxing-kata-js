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

    for (let i = 0; i < refillBoxesData.length; i++) {
      const [type, quantity] = refillBoxesData[i];

      if (type.includes("Group")) {
        createQuad(type, quantity, boxesArr);
      } else {
        break;
      }
    }

    const remainderArr = refillBoxesData.filter((el) =>
      el[0].includes("Remainder")
    );
    const sortedArr = remainderArr.sort((a, b) => a[1] - b[1]);

    let sumRemaining = 0;
    remainderArr.forEach((el) => (sumRemaining += el[1]));

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
      case 9 || 8 || 1:
        key = type1;
        break;
      case 7:
        key = quantity1;
        break;
      case 6:
        key = quantity1 + quantity2;
        break;
      case 5 || 4:
        key = quantity2;
        break;
      case 3:
        key = sortedArrLen;
        break;
      case 2:
        key = type2;
        break;
      default:
        break;
    }

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

  // function createRemainingNine(
  //   type1,
  //   type2,
  //   type3,
  //   quantity1,
  //   quantity2,
  //   boxesArr,
  //   sumRemaining,
  //   sortedArrLen
  // ) {
  //   let key;
  //   switch (sumRemaining) {
  //     case 9 || 8 || 1:
  //       key = type1;
  //       break;
  //     case 7:
  //       key = quantity1;
  //       break;
  //     case 6:
  //       key = quantity1 + quantity2;
  //       break;
  //     case 5 || 4:
  //       key = quantity2;
  //       break;
  //     case 3:
  //       key = sortedArrLen;
  //       break;
  //     case 2:
  //       key = type2;
  //       break;
  //   }

  //   let color1;
  //   let color2;
  //   let color3;

  //   if (type1 && type1.includes("blue")) {
  //     color1 = "blue";
  //   } else if (type1 && type1.includes("green")) {
  //     color1 = "green";
  //   } else if (type1 && type1.includes("pink")) {
  //     color1 = "pink";
  //   }

  //   if (type2 && type2.includes("blue")) {
  //     color2 = "blue";
  //   } else if (type2 && type2.includes("green")) {
  //     color2 = "green";
  //   } else if (type2 && type2.includes("pink")) {
  //     color2 = "pink";
  //   }

  //   if (type3 && type3.includes("blue")) {
  //     color3 = "blue";
  //   } else if (type3 && type3.includes("green")) {
  //     color3 = "green";
  //   } else if (type3 && type3.includes("pink")) {
  //     color3 = "pink";
  //   }

  //   let first;
  //   if (key) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(first);

  //   let second;
  //   if (key) {
  //     second = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(second);

  //   let third;
  //   if (key) {
  //     third = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color3} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(third);
  // }

  // function createRemainingEight(
  //   type1,
  //   type2,
  //   type3,
  //   quantity1,
  //   quantity2,
  //   boxesArr,
  //   sumRemaining,
  //   sortedArrLen
  // ) {
  //   let key;
  //   switch (sumRemaining) {
  //     case 9 || 8 || 1:
  //       key = type1;
  //       break;
  //     case 7:
  //       key = quantity1;
  //       break;
  //     case 6:
  //       key = quantity1 + quantity2;
  //       break;
  //     case 5 || 4:
  //       key = quantity2;
  //       break;
  //     case 3:
  //       key = sortedArrLen;
  //       break;
  //     case 2:
  //       key = type2;
  //       break;
  //   }

  //   let color1;
  //   let color2;
  //   let color3;

  //   if (type1 && type1.includes("blue")) {
  //     color1 = "blue";
  //   } else if (type1 && type1.includes("green")) {
  //     color1 = "green";
  //   } else if (type1 && type1.includes("pink")) {
  //     color1 = "pink";
  //   }

  //   if (type2 && type2.includes("blue")) {
  //     color2 = "blue";
  //   } else if (type2 && type2.includes("green")) {
  //     color2 = "green";
  //   } else if (type2 && type2.includes("pink")) {
  //     color2 = "pink";
  //   }

  //   if (type3 && type3.includes("blue")) {
  //     color3 = "blue";
  //   } else if (type3 && type3.includes("green")) {
  //     color3 = "green";
  //   } else if (type3 && type3.includes("pink")) {
  //     color3 = "pink";
  //   }

  //   let first;
  //   if (key) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(first);

  //   let second;
  //   if (key) {
  //     second = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color3} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(second);
  // }

  // function createRemainingSeven(
  //   type1,
  //   type2,
  //   type3,
  //   quantity1,
  //   quantity2,
  //   boxesArr,
  //   sumRemaining,
  //   sortedArrLen
  // ) {
  //   let key;
  //   switch (sumRemaining) {
  //     case 9 || 8 || 1:
  //       key = type1;
  //       break;
  //     case 7:
  //       key = quantity1;
  //       break;
  //     case 6:
  //       key = quantity1 + quantity2;
  //       break;
  //     case 5 || 4:
  //       key = quantity2;
  //       break;
  //     case 3:
  //       key = sortedArrLen;
  //       break;
  //     case 2:
  //       key = type2;
  //       break;
  //   }

  //   let color1;
  //   let color2;
  //   let color3;

  //   if (type1 && type1.includes("blue")) {
  //     color1 = "blue";
  //   } else if (type1 && type1.includes("green")) {
  //     color1 = "green";
  //   } else if (type1 && type1.includes("pink")) {
  //     color1 = "pink";
  //   }

  //   if (type2 && type2.includes("blue")) {
  //     color2 = "blue";
  //   } else if (type2 && type2.includes("green")) {
  //     color2 = "green";
  //   } else if (type2 && type2.includes("pink")) {
  //     color2 = "pink";
  //   }

  //   if (type3 && type3.includes("blue")) {
  //     color3 = "blue";
  //   } else if (type3 && type3.includes("green")) {
  //     color3 = "green";
  //   } else if (type3 && type3.includes("pink")) {
  //     color3 = "pink";
  //   }

  //   let first;
  //   if (key === 1) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 2) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(first);

  //   let second;
  //   if (key) {
  //     second = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color3} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(second);
  // }

  // function createRemainingSix(
  //   type1,
  //   type2,
  //   type3,
  //   quantity1,
  //   quantity2,
  //   boxesArr,
  //   sumRemaining,
  //   sortedArrLen
  // ) {
  //   let key;
  //   switch (sumRemaining) {
  //     case 9 || 8 || 1:
  //       key = type1;
  //       break;
  //     case 7:
  //       key = quantity1;
  //       break;
  //     case 6:
  //       key = quantity1 + quantity2;
  //       break;
  //     case 5 || 4:
  //       key = quantity2;
  //       break;
  //     case 3:
  //       key = sortedArrLen;
  //       break;
  //     case 2:
  //       key = type2;
  //       break;
  //   }

  //   let color1;
  //   let color2;
  //   let color3;

  //   if (type1 && type1.includes("blue")) {
  //     color1 = "blue";
  //   } else if (type1 && type1.includes("green")) {
  //     color1 = "green";
  //   } else if (type1 && type1.includes("pink")) {
  //     color1 = "pink";
  //   }

  //   if (type2 && type2.includes("blue")) {
  //     color2 = "blue";
  //   } else if (type2 && type2.includes("green")) {
  //     color2 = "green";
  //   } else if (type2 && type2.includes("pink")) {
  //     color2 = "pink";
  //   }

  //   if (type3 && type3.includes("blue")) {
  //     color3 = "blue";
  //   } else if (type3 && type3.includes("green")) {
  //     color3 = "green";
  //   } else if (type3 && type3.includes("pink")) {
  //     color3 = "pink";
  //   }

  //   let first;
  //   if (key === 3) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 4) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 6) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(first);

  //   let second;
  //   if (key === 3) {
  //     second = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color3} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 4) {
  //     second = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color3} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 6) {
  //     second = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(second);
  // }

  // function createRemainingFive(
  //   type1,
  //   type2,
  //   type3,
  //   quantity1,
  //   quantity2,
  //   boxesArr,
  //   sumRemaining,
  //   sortedArrLen
  // ) {
  //   let key;
  //   switch (sumRemaining) {
  //     case 9 || 8 || 1:
  //       key = type1;
  //       break;
  //     case 7:
  //       key = quantity1;
  //       break;
  //     case 6:
  //       key = quantity1 + quantity2;
  //       break;
  //     case 5 || 4:
  //       key = quantity2;
  //       break;
  //     case 3:
  //       key = sortedArrLen;
  //       break;
  //     case 2:
  //       key = type2;
  //       break;
  //   }

  //   let color1;
  //   let color2;
  //   let color3;

  //   if (type1 && type1.includes("blue")) {
  //     color1 = "blue";
  //   } else if (type1 && type1.includes("green")) {
  //     color1 = "green";
  //   } else if (type1 && type1.includes("pink")) {
  //     color1 = "pink";
  //   }

  //   if (type2 && type2.includes("blue")) {
  //     color2 = "blue";
  //   } else if (type2 && type2.includes("green")) {
  //     color2 = "green";
  //   } else if (type2 && type2.includes("pink")) {
  //     color2 = "pink";
  //   }

  //   if (type3 && type3.includes("blue")) {
  //     color3 = "blue";
  //   } else if (type3 && type3.includes("green")) {
  //     color3 = "green";
  //   } else if (type3 && type3.includes("pink")) {
  //     color3 = "pink";
  //   }

  //   let first;
  //   if (key === 1) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 2) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 3) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(first);

  //   let second;
  //   if (key === 1) {
  //     second = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color3} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 2) {
  //     second = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color3} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 3) {
  //     second = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(second);
  // }

  // function createRemainingFour(
  //   type1,
  //   type2,
  //   type3,
  //   quantity1,
  //   quantity2,
  //   boxesArr,
  //   sumRemaining,
  //   sortedArrLen
  // ) {
  //   let key;
  //   switch (sumRemaining) {
  //     case 9 || 8 || 1:
  //       key = type1;
  //       break;
  //     case 7:
  //       key = quantity1;
  //       break;
  //     case 6:
  //       key = quantity1 + quantity2;
  //       break;
  //     case 5 || 4:
  //       key = quantity2;
  //       break;
  //     case 3:
  //       key = sortedArrLen;
  //       break;
  //     case 2:
  //       key = type2;
  //       break;
  //   }

  //   let color1;
  //   let color2;
  //   let color3;

  //   if (type1 && type1.includes("blue")) {
  //     color1 = "blue";
  //   } else if (type1 && type1.includes("green")) {
  //     color1 = "green";
  //   } else if (type1 && type1.includes("pink")) {
  //     color1 = "pink";
  //   }

  //   if (type2 && type2.includes("blue")) {
  //     color2 = "blue";
  //   } else if (type2 && type2.includes("green")) {
  //     color2 = "green";
  //   } else if (type2 && type2.includes("pink")) {
  //     color2 = "pink";
  //   }

  //   if (type3 && type3.includes("blue")) {
  //     color3 = "blue";
  //   } else if (type3 && type3.includes("green")) {
  //     color3 = "green";
  //   } else if (type3 && type3.includes("pink")) {
  //     color3 = "pink";
  //   }

  //   let first;
  //   if (key === 1) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color3} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 2) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 3) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(first);
  // }

  // function createRemainingThree(
  //   type1,
  //   type2,
  //   type3,
  //   quantity1,
  //   quantity2,
  //   boxesArr,
  //   sumRemaining,
  //   sortedArrLen
  // ) {
  //   let key;
  //   switch (sumRemaining) {
  //     case 9 || 8 || 1:
  //       key = type1;
  //       break;
  //     case 7:
  //       key = quantity1;
  //       break;
  //     case 6:
  //       key = quantity1 + quantity2;
  //       break;
  //     case 5 || 4:
  //       key = quantity2;
  //       break;
  //     case 3:
  //       key = sortedArrLen;
  //       break;
  //     case 2:
  //       key = type2;
  //       break;
  //   }

  //   let color1;
  //   let color2;
  //   let color3;

  //   if (type1 && type1.includes("blue")) {
  //     color1 = "blue";
  //   } else if (type1 && type1.includes("green")) {
  //     color1 = "green";
  //   } else if (type1 && type1.includes("pink")) {
  //     color1 = "pink";
  //   }

  //   if (type2 && type2.includes("blue")) {
  //     color2 = "blue";
  //   } else if (type2 && type2.includes("green")) {
  //     color2 = "green";
  //   } else if (type2 && type2.includes("pink")) {
  //     color2 = "pink";
  //   }

  //   if (type3 && type3.includes("blue")) {
  //     color3 = "blue";
  //   } else if (type3 && type3.includes("green")) {
  //     color3 = "green";
  //   } else if (type3 && type3.includes("pink")) {
  //     color3 = "pink";
  //   }

  //   let first;
  //   if (key === 3) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color3} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 2) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (key === 1) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>3 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(first);
  // }

  // function createRemainingTwo(
  //   type1,
  //   type2,
  //   type3,
  //   quantity1,
  //   quantity2,
  //   boxesArr,
  //   sumRemaining,
  //   sortedArrLen
  // ) {
  //   let key;
  //   switch (sumRemaining) {
  //     case 9 || 8 || 1:
  //       key = type1;
  //       break;
  //     case 7:
  //       key = quantity1;
  //       break;
  //     case 6:
  //       key = quantity1 + quantity2;
  //       break;
  //     case 5 || 4:
  //       key = quantity2;
  //       break;
  //     case 3:
  //       key = sortedArrLen;
  //       break;
  //     case 2:
  //       key = type2;
  //       break;
  //   }

  //   let color1;
  //   let color2;
  //   let color3;

  //   if (type1 && type1.includes("blue")) {
  //     color1 = "blue";
  //   } else if (type1 && type1.includes("green")) {
  //     color1 = "green";
  //   } else if (type1 && type1.includes("pink")) {
  //     color1 = "pink";
  //   }

  //   if (type2 && type2.includes("blue")) {
  //     color2 = "blue";
  //   } else if (type2 && type2.includes("green")) {
  //     color2 = "green";
  //   } else if (type2 && type2.includes("pink")) {
  //     color2 = "pink";
  //   }

  //   if (type3 && type3.includes("blue")) {
  //     color3 = "blue";
  //   } else if (type3 && type3.includes("green")) {
  //     color3 = "green";
  //   } else if (type3 && type3.includes("pink")) {
  //     color3 = "pink";
  //   }

  //   let first;
  //   if (key) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //         <i className={`color-${color2} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //       </div>
  //     );
  //   } else if (!key) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>2 replacement heads</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(first);
  // }

  // function createRemainingOne(
  //   type1,
  //   type2,
  //   type3,
  //   quantity1,
  //   quantity2,
  //   boxesArr,
  //   sumRemaining,
  //   sortedArrLen
  // ) {
  //   let key;
  //   switch (sumRemaining) {
  //     case 9 || 8 || 1:
  //       key = type1;
  //       break;
  //     case 7:
  //       key = quantity1;
  //       break;
  //     case 6:
  //       key = quantity1 + quantity2;
  //       break;
  //     case 5 || 4:
  //       key = quantity2;
  //       break;
  //     case 3:
  //       key = sortedArrLen;
  //       break;
  //     case 2:
  //       key = type2;
  //       break;
  //   }

  //   let color1;
  //   let color2;
  //   let color3;

  //   if (type1 && type1.includes("blue")) {
  //     color1 = "blue";
  //   } else if (type1 && type1.includes("green")) {
  //     color1 = "green";
  //   } else if (type1 && type1.includes("pink")) {
  //     color1 = "pink";
  //   }

  //   if (type2 && type2.includes("blue")) {
  //     color2 = "blue";
  //   } else if (type2 && type2.includes("green")) {
  //     color2 = "green";
  //   } else if (type2 && type2.includes("pink")) {
  //     color2 = "pink";
  //   }

  //   if (type3 && type3.includes("blue")) {
  //     color3 = "blue";
  //   } else if (type3 && type3.includes("green")) {
  //     color3 = "green";
  //   } else if (type3 && type3.includes("pink")) {
  //     color3 = "pink";
  //   }

  //   let first;
  //   if (key) {
  //     first = (
  //       <div key={boxesArr.length} className="box">
  //         <i className={`color-${color1} ri-drop-line`}></i>
  //         <div>
  //           <h3>1 replacement head</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   boxesArr.push(first);
  // }

  const boxes = createBox(refillBoxesData);
  return boxes;
}
