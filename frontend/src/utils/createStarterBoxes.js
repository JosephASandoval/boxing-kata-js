export function createStarterBoxes(starterBoxesData) {
  function createBox(arr) {
    let hybridArr = [];
    let boxesArr = [];

    for (let i = 0; i < arr.length; i++) {
      const [type, quantity] = arr[i];

      if (type.includes("Group")) {
        createDouble(type, quantity, boxesArr);
      } else {
        hybridArr.push(type);
        if (hybridArr.length === 2) {
          const [type1, type2] = hybridArr;
          createHybrid(type1, type2, boxesArr);
          hybridArr = [];
        }
      }
    }

    if (hybridArr.length > 0) {
      const [type] = hybridArr;
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
          <i className={`color-${color} ri-focus-3-line`}></i>
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
        <i className={`color-${color1} ri-focus-3-line`}></i>
        <div>
          <h3>1 brush</h3>
          <h3>1 replacement head</h3>
        </div>
        <i className={`color-${color2} ri-focus-3-line`}></i>
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
        <i className={`color-${color} ri-focus-3-line`}></i>
        <div>
          <h3>1 brush</h3>
          <h3>1 replacement head</h3>
        </div>
      </div>
    );
  }

  const boxes = createBox(starterBoxesData);
  return boxes;
}
