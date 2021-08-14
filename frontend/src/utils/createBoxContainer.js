export function createBoxContainer(boxItems, numBoxes, MAX_ITEMS) {
  // step 0: initalize boxContainer with number of boxes needed
  let boxContainer = new Array(numBoxes).fill(null).map(() => []);
  ////////////// refactor: put box instances instead of []

  // step 1: fill boxContainer with boxItems according to sorting scheme
  fillBoxContainer(boxItems, boxContainer, MAX_ITEMS);

  // step 2: sort boxes
  boxContainer.sort(); // color
  boxContainer.sort((a, b) => b.length - a.length); // length
  ////////////// refactor: then sort by complexity

  // step 3: process boxContainer to have proper jsx and css styling
  const finishedBoxContainer = processBoxContainer(boxContainer, MAX_ITEMS);
  return finishedBoxContainer;
}

function fillBoxContainer(boxItems, boxContainer, MAX_ITEMS) {
  // step 0: perform greedy algorithm until there is no more items left to sort
  while (boxItems.length > 0) {
    // step 1: set color and count variable based on color with most items
    let [color, count] = boxItems[0];

    // step 2: find most empty box
    let minIdx = 0;
    for (let i = 0; i < boxContainer.length; i++) {
      if (boxContainer[i].length < boxContainer[minIdx].length) {
        minIdx = i;
      }
    }

    // step 3: fill most empty box and update count
    while (count > 0 && boxContainer[minIdx].length < MAX_ITEMS) {
      boxContainer[minIdx].push(color);
      boxItems[0][1]--;
      count--;
    }

    // step 4: remove first element from list of items if count reaches 0
    if (boxItems[0][1] === 0) {
      boxItems.splice(0, 1);
    }

    // step 5: re-sort list of items to access color with most items left
    boxItems.sort((a, b) => b[1] - a[1]);
  }
}

function processBoxContainer(boxContainer, MAX_ITEMS) {
  // step 0: change boxes from arrays to objects
  let formattedBoxContainer = [];
  for (const box of boxContainer) {
    let boxObj = {};
    for (const color of box) {
      boxObj[color] = boxObj[color] || 0;
      boxObj[color] += 1;
    }
    formattedBoxContainer.push(boxObj);
  }

  // step 1: add proper jsx and styling to each box
  let processedBoxContainer = [];
  for (let i = 0; i < formattedBoxContainer.length; i++) {
    const { blue, green, pink } = formattedBoxContainer[i];

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

    const processedBox = (
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
    processedBoxContainer.push(processedBox);
  }
  return processedBoxContainer;
}
