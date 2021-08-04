function useCreateRefillBoxes() {
  function createRefillBoxes(refillBoxesData) {
    function createBox(arr) {
      let boxesArr = [];

      for (let i = 0; i < arr.length; i++) {
        const [type, quantity] = arr[i];

        if (type.includes("Quad")) {
          createQuad(type, quantity, boxesArr);
        } else {
          break;
        }
      }

      const remainderArr = arr.filter((el) => el[0].includes("Remainder"));
      const sortedArr = remainderArr.sort((a, b) => a[1] - b[1]);

      let sumRemaining = 0;
      remainderArr.forEach((el) => (sumRemaining += el[1]));

      let type1;
      let type2;
      let type3;
      let quantity1;
      let quantity2;

      if (sortedArr.length === 1) {
        type1 = sortedArr[0][0];
        quantity1 = sortedArr[0][1];
      } else if (sortedArr.length === 2) {
        type1 = sortedArr[0][0];
        quantity1 = sortedArr[0][1];
        type2 = sortedArr[1][0];
        quantity2 = sortedArr[1][1];
      } else if (sortedArr.length === 3) {
        type1 = sortedArr[0][0];
        quantity1 = sortedArr[0][1];
        type2 = sortedArr[1][0];
        quantity2 = sortedArr[1][1];
        type3 = sortedArr[2][0];
      }

      if (sortedArr.length > 0) {
        if (sumRemaining === 9) {
          createRemainingNine(boxesArr);
        } else if (sumRemaining === 8) {
          createRemainingEight(type1, type2, type3, boxesArr);
        } else if (sumRemaining === 7) {
          createRemainingSeven(type1, type2, type3, quantity1, boxesArr);
        } else if (sumRemaining === 6) {
          createRemainingSix(
            type1,
            type2,
            type3,
            quantity1,
            quantity2,
            boxesArr
          );
        } else if (sumRemaining === 5) {
          createRemainingFive(type1, type2, type3, quantity2, boxesArr);
        } else if (sumRemaining === 4) {
          createRemainingFour(type1, type2, type3, quantity2, boxesArr);
        } else if (sumRemaining === 3) {
          createRemainingThree(type1, type2, type3, boxesArr);
        } else if (sumRemaining === 2) {
          createRemainingTwo(type1, type2, boxesArr);
        } else if (sumRemaining === 1) {
          createRemainingOne(type1, boxesArr);
        }
      }

      return boxesArr;
    }

    function createQuad(type, quantity, arr) {
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
        arr.push(
          <div key={arr.length} className="box">
            <i className={`color-${color} ri-drop-line`}></i>
            <div>
              <h3>4 replacement heads</h3>
            </div>
          </div>
        );
        i++;
      }
    }

    function createRemainingNine(arr) {
      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-blue ri-drop-line`}></i>
          <div>
            <h3>3 replacement heads</h3>
          </div>
        </div>
      );

      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-green ri-drop-line`}></i>
          <div>
            <h3>3 replacement heads</h3>
          </div>
        </div>
      );

      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-pink ri-drop-line`}></i>
          <div>
            <h3>3 replacement heads</h3>
          </div>
        </div>
      );
    }

    function createRemainingEight(type1, type2, type3, arr) {
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

      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-${color1} ri-drop-line`}></i>
          <div>
            <h3>2 replacement heads</h3>
          </div>
          <i className={`color-${color2} ri-drop-line`}></i>
          <div>
            <h3>2 replacement heads</h3>
          </div>
        </div>
      );

      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-${color2} ri-drop-line`}></i>
          <div>
            <h3>1 replacement head</h3>
          </div>
          <i className={`color-${color3} ri-drop-line`}></i>
          <div>
            <h3>3 replacement heads</h3>
          </div>
        </div>
      );
    }

    function createRemainingSeven(type1, type2, type3, quantity, arr) {
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

      const first =
        quantity === 1 ? (
          <h3>1 replacement head</h3>
        ) : (
          <h3>2 replacement heads</h3>
        );

      const second =
        quantity === 1 ? (
          <h3>3 replacement heads</h3>
        ) : (
          <h3>2 replacement heads</h3>
        );

      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-${color1} ri-drop-line`}></i>
          <div>{first}</div>
          <i className={`color-${color2} ri-drop-line`}></i>
          <div>{second}</div>
        </div>
      );

      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-${color3} ri-drop-line`}></i>
          <div>
            <h3>3 replacement heads</h3>
          </div>
        </div>
      );
    }

    function createRemainingSix(
      type1,
      type2,
      type3,
      quantity1,
      quantity2,
      arr
    ) {
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

      let firstRemainingSix;
      if (quantity1 + quantity2 === 3) {
        firstRemainingSix = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      } else if (quantity1 + quantity2 === 4) {
        firstRemainingSix = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      } else {
        firstRemainingSix = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>3 replacement heads</h3>
            </div>
          </div>
        );
      }

      arr.push(firstRemainingSix);

      let secondRemainingSix;
      if (quantity1 + quantity2 === 3) {
        secondRemainingSix = (
          <div key={arr.length} className="box">
            <i className={`color-${color3} ri-drop-line`}></i>
            <div>
              <h3>3 replacement heads</h3>
            </div>
          </div>
        );
      } else if (quantity1 + quantity2 === 4) {
        secondRemainingSix = (
          <div key={arr.length} className="box">
            <i className={`color-${color3} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      } else {
        secondRemainingSix = (
          <div key={arr.length} className="box">
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>3 replacement heads</h3>
            </div>
          </div>
        );
      }

      arr.push(secondRemainingSix);
    }

    function createRemainingFive(type1, type2, type3, quantity, arr) {
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

      let firstRemainingFive;
      if (quantity === 1) {
        firstRemainingFive = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
          </div>
        );
      } else if (quantity === 2) {
        firstRemainingFive = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      } else {
        firstRemainingFive = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      }

      arr.push(firstRemainingFive);

      let secondRemainingFive;
      if (quantity === 1) {
        secondRemainingFive = (
          <div key={arr.length} className="box">
            <i className={`color-${color3} ri-drop-line`}></i>
            <div>
              <h3>3 replacement heads</h3>
            </div>
          </div>
        );
      } else if (quantity === 2) {
        secondRemainingFive = (
          <div key={arr.length} className="box">
            <i className={`color-${color3} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      } else {
        secondRemainingFive = (
          <div key={arr.length} className="box">
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>3 replacement heads</h3>
            </div>
          </div>
        );
      }

      arr.push(secondRemainingFive);
    }

    function createRemainingFour(type1, type2, type3, quantity, arr) {
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

      let remainingFour;
      if (quantity === 1) {
        remainingFour = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color3} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      } else if (quantity === 2) {
        remainingFour = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      } else {
        remainingFour = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>3 replacement heads</h3>
            </div>
          </div>
        );
      }

      arr.push(remainingFour);
    }

    function createRemainingThree(type1, type2, type3, arr) {
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

      let remainingThree;
      if (type3) {
        remainingThree = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color3} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
          </div>
        );
      } else if (type2) {
        remainingThree = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      } else {
        remainingThree = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>3 replacement heads</h3>
            </div>
          </div>
        );
      }

      arr.push(remainingThree);
    }

    function createRemainingTwo(type1, type2, arr) {
      let color1;
      let color2;

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

      let remainingTwo;
      if (type2) {
        remainingTwo = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
            <i className={`color-${color2} ri-drop-line`}></i>
            <div>
              <h3>1 replacement head</h3>
            </div>
          </div>
        );
      } else {
        remainingTwo = (
          <div key={arr.length} className="box">
            <i className={`color-${color1} ri-drop-line`}></i>
            <div>
              <h3>2 replacement heads</h3>
            </div>
          </div>
        );
      }

      arr.push(remainingTwo);
    }

    function createRemainingOne(type, arr) {
      let color;

      if (type && type.includes("blue")) {
        color = "blue";
      } else if (type && type.includes("green")) {
        color = "green";
      } else if (type && type.includes("pink")) {
        color = "pink";
      }

      arr.push(
        <div key={arr.length} className="box">
          <i className={`color-${color} ri-drop-line`}></i>
          <div>
            <h3>1 replacement head</h3>
          </div>
        </div>
      );
    }

    const boxes = createBox(refillBoxesData);
    return boxes;
  }

  return { createRefillBoxes };
}

export default useCreateRefillBoxes;
