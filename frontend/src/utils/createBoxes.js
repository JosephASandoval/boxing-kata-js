export function createBoxes(boxesData, numBoxes, MAX_ITEMS) {
  let boxesArr = new Array(numBoxes).fill(null).map(() => []);

  let groupsData = boxesData.filter((elem) => elem[0].includes("Group"));
  groupsData.sort((a, b) => b[1] - a[1]);
  if (groupsData.length > 0) {
    handleGroups(groupsData, boxesArr, MAX_ITEMS);
  }

  let remainingData = boxesData.filter((elem) => !elem[0].includes("Group"));
  remainingData.sort((a, b) => b[1] - a[1]);
  if (remainingData.length > 0) {
    handleRemaining(remainingData, boxesArr, MAX_ITEMS);
  }

  let formattedBoxesArr = [];
  for (const box of boxesArr) {
    let hash = {};

    for (const color of box) {
      hash[color] = hash[color] || 0;
      hash[color] += 1;
    }

    formattedBoxesArr.push(hash);
  }

  const answerArr = renderBoxes(formattedBoxesArr, MAX_ITEMS);
  return answerArr;
}

function handleGroups(groupsData, boxesArr, MAX_ITEMS) {
  for (const group of groupsData) {
    let [type, count] = group;

    // set color from type
    let color;
    if (type.includes("blue")) {
      color = "blue";
    } else if (type.includes("green")) {
      color = "green";
    } else if (type.includes("pink")) {
      color = "pink";
    }

    while (count) {
      // initialize minIdx
      let minIdx = 0;

      // updates minIdx
      for (let i = 0; i < boxesArr.length; i++) {
        if (boxesArr[i].length < boxesArr[minIdx].length) {
          minIdx = i;
        }
      }

      // push 4 of one color into the boxesArr
      for (let j = 0; j < MAX_ITEMS; j++) {
        boxesArr[minIdx].push(color);
      }
      count--;
    }
  }
}

function handleRemaining(remainingData, boxesArr, MAX_ITEMS) {
  for (const colorSet of remainingData) {
    // set color and count
    const [color, numItems] = colorSet;
    let count = numItems;

    // initialize minIdx
    let minIdx = 0;

    // updates minIdx
    for (let i = 0; i < boxesArr.length; i++) {
      if (boxesArr[i].length < boxesArr[minIdx].length) {
        minIdx = i;
      }
    }

    // push colors into minBox
    if (boxesArr[minIdx].length + numItems <= MAX_ITEMS) {
      for (let j = 0; j < numItems; j++) {
        boxesArr[minIdx].push(color);
      }
    } else {
      // splitting step
      for (let i = 0; i < boxesArr.length; i++) {
        if (count && boxesArr[i].length + 1 <= MAX_ITEMS) {
          boxesArr[i].push(color);
          count--;
        }
      }
    }
  }
}

function renderBoxes(formattedBoxesArr, MAX_ITEMS) {
  let answer = [];

  for (let i = 0; i < formattedBoxesArr.length; i++) {
    const box = formattedBoxesArr[i];
    const { blue, green, pink } = box;

    let renderBlue;
    if (blue > 1) {
      renderBlue =
        MAX_ITEMS === 4 ? (
          <h3>{blue} replacement heads</h3>
        ) : (
          <>
            <h3>{blue} brushes</h3>
            <h3>{blue} replacement heads</h3>
          </>
        );
    } else if (blue === 1) {
      renderBlue =
        MAX_ITEMS === 4 ? (
          <h3>{blue} replacement head</h3>
        ) : (
          <>
            <h3>{blue} brush</h3>
            <h3>{blue} replacement head</h3>
          </>
        );
    }

    let renderGreen;
    if (green > 1) {
      renderGreen =
        MAX_ITEMS === 4 ? (
          <h3>{green} replacement heads</h3>
        ) : (
          <>
            <h3>{green} brushes</h3>
            <h3>{green} replacement heads</h3>
          </>
        );
    } else if (green === 1) {
      renderGreen =
        MAX_ITEMS === 4 ? (
          <h3>{green} replacement head</h3>
        ) : (
          <>
            <h3>{green} brush</h3>
            <h3>{green} replacement head</h3>
          </>
        );
    }

    let renderPink;
    if (pink > 1) {
      renderPink =
        MAX_ITEMS === 4 ? (
          <h3>{pink} replacement heads</h3>
        ) : (
          <>
            <h3>{pink} brushes</h3>
            <h3>{pink} replacement heads</h3>
          </>
        );
    } else if (pink === 1) {
      renderPink =
        MAX_ITEMS === 4 ? (
          <h3>{pink} replacement head</h3>
        ) : (
          <>
            <h3>{pink} brush</h3>
            <h3>{pink} replacement head</h3>
          </>
        );
    }

    const formattedBox = (
      <div key={i} className="box">
        {renderBlue ? (
          <>
            <i className={`color-blue ri-focus-3-line`}></i>
            <div>{renderBlue}</div>
          </>
        ) : (
          ""
        )}
        {renderGreen ? (
          <>
            <i className={`color-green ri-focus-3-line`}></i>
            <div>{renderGreen}</div>
          </>
        ) : (
          ""
        )}
        {renderPink ? (
          <>
            <i className={`color-pink ri-focus-3-line`}></i>
            <div>{renderPink}</div>
          </>
        ) : (
          ""
        )}
      </div>
    );

    answer.push(formattedBox);
  }

  return answer;
}
