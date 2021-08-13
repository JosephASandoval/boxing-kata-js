export function createRefillBoxes(refillBoxesData, numRefillBoxes, MAX_ITEMS) {
  // console.log(refillBoxesData, numRefillBoxes, MAX_ITEMS);
  // refillBoxesData = [[blue, 2], [green, 2], [pink, 1]] (works for this simple one)
  let boxesArr = new Array(numRefillBoxes).fill(null).map(() => []); // [[], []]

  const groupsData = refillBoxesData.filter((elem) =>
    elem[0].includes("Group")
  );

  if (groupsData.length > 0) {
    handleGroups(groupsData, boxesArr, MAX_ITEMS);
  }

  const remainingData = refillBoxesData.filter(
    (elem) => !elem[0].includes("Group")
  );

  // goal: is to fill this box with display items and return it at the end
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

  console.log(boxesArr);

  // return boxesArr;
}

function handleGroups(groupsData, boxesArr, MAX_ITEMS) {
  // [[blueGroup, 1], [greenGroup, 1], [pinkGroup, 1]]

  for (const group of groupsData) {
    let [type, count] = group; // [blueGroup, 2]

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
