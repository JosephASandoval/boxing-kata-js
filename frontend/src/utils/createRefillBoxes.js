export function createRefillBoxes(refillBoxesData, numRefillBoxes, MAX_ITEMS) {
  let boxesArr = new Array(numRefillBoxes).fill(null).map(() => []);

  const groupsData = refillBoxesData.filter((elem) =>
    elem[0].includes("Group")
  );

  if (groupsData.length > 0) {
    handleGroups(groupsData, boxesArr, MAX_ITEMS);
  }

  const remainingData = refillBoxesData.filter(
    (elem) => !elem[0].includes("Group")
  );

  if (remainingData.length > 0) {
    handleRemaining(remainingData, boxesArr, MAX_ITEMS);
  }

  console.log(boxesArr);

  // return boxesArr;
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
