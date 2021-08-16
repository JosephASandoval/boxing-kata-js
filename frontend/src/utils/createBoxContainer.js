import Box from "./boxClass";

export function createBoxContainer(boxItems, numBoxes, MAX_ITEMS) {
  // step 0: initalize boxContainer with number of boxes needed
  let boxContainer = new Array(numBoxes)
    .fill(null)
    .map(() => new Box(MAX_ITEMS));

  // step 1: fill boxContainer with boxItems according to sorting scheme
  fillBoxContainer(boxItems, boxContainer, MAX_ITEMS);

  // step 2: sort boxes by color and complexity as a UI design choice
  boxContainer.sort((a, b) => a.colorOrder - b.colorOrder);
  boxContainer.sort((a, b) => a.complexity - b.complexity);

  // step 3: process boxContainer to have proper jsx and css styling
  const finishedBoxContainer = processBoxContainer(boxContainer);
  return finishedBoxContainer;
}

// step 0: perform greedy algorithm until there is no more items left to sort
export function fillBoxContainer(boxItems, boxContainer, MAX_ITEMS) {
  while (boxItems[0][1] > 0) {
    // step 1: set color and count variable based on color with most items
    let boxItem = boxItems[0];
    let [color, count] = boxItem;
    let groupCount = Math.floor(count / MAX_ITEMS);
    count = count % MAX_ITEMS;

    // step 2: find most empty box
    let maxSpaceIdx = 0;
    for (let i = 0; i < boxContainer.length; i++) {
      if (boxContainer[i].length < boxContainer[maxSpaceIdx].length) {
        maxSpaceIdx = i;
      }
    }

    // step 3: fill most empty box and update count
    if (groupCount > 0) {
      for (let i = 0; i < groupCount; i++) {
        let groupColor = new Array(MAX_ITEMS).fill(color);
        boxContainer[maxSpaceIdx + i].content.push(...groupColor);
      }
    } else {
      while (count > 0 && boxContainer[maxSpaceIdx].length < MAX_ITEMS) {
        boxContainer[maxSpaceIdx].content.push(color);
        count--;
      }
    }

    // step 4: re-sort list of items to access color with most items left
    boxItem[1] = count;
    boxItems.sort((a, b) => b[1] - a[1]);
  }
}

export function processBoxContainer(boxContainer) {
  let processedBoxContainer = [];
  for (let i = 0; i < boxContainer.length; i++) {
    let box = boxContainer[i];
    let processedBox = box.processBox(i);
    processedBoxContainer.push(processedBox);
  }
  return processedBoxContainer;
}
