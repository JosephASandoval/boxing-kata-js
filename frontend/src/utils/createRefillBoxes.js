export function createRefillBoxes(refillBoxesData, numRefillBoxes) {
  // refillBoxesData = [[blue, 2], [green, 2], [pink, 1]] (works for this simple one)
  const MAX_ITEMS = 4;
  let boxesArr = new Array(numRefillBoxes).fill(null).map(() => []); // [[], []]

  // goal: is to fill this box with display items and return it at the end
  for (const colorSet of refillBoxesData) {
    const [color, numItems] = colorSet; // blue, 3; green, 3; pink, 2
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

  // boxesArr = [[blue, blue, blue, pink], [green, green, green, pink]]

  // [[blue, blue, pink], [green, green]]

  console.log(boxesArr);

  // return boxesArr;
  // boxesArr = [[blue, blue, blue, pink], [green, green, green, pink]]
}
