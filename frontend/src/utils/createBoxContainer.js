import Box from "./boxClass";

export function createBoxContainer(boxItems, numBoxes, MAX_ITEMS) {
  // step 0: initalize boxContainer with number of boxes needed
  let boxContainer = new Array(numBoxes)
    .fill(null)
    .map(() => new Box(MAX_ITEMS));

  // step 1: fill boxContainer with boxItems according to sorting scheme
  fillBoxContainer(boxItems, boxContainer);

  // step 2: sort boxes by color and complexity as a UI design choice
  boxContainer.sort((a, b) => a.colorOrder - b.colorOrder);
  boxContainer.sort((a, b) => a.complexity - b.complexity);

  // step 3: process boxContainer to have proper jsx and css styling
  const finishedBoxContainer = processBoxContainer(boxContainer);
  return finishedBoxContainer;
}

export function fillBoxContainer(boxItems, boxContainer) {
  // step 0: perform greedy algorithm until there is no more items left to sort
  while (boxItems.length > 0) {
    // step 1: set color and count variable based on color with most items
    let boxItem = boxItems[0];
    let [color, count] = boxItem;

    // step 2: find most empty box
    let maxSpaceIdx = 0;
    for (let i = 0; i < boxContainer.length; i++) {
      if (boxContainer[i].length < boxContainer[maxSpaceIdx].length) {
        maxSpaceIdx = i;
      }
    }

    // step 3: fill most empty box and update count
    while (
      count > 0 &&
      boxContainer[maxSpaceIdx].length < boxContainer[maxSpaceIdx].size
    ) {
      boxContainer[maxSpaceIdx].content.push(color);
      count--;
    }
    boxItem[1] = count;

    // step 4: remove first element from list of items if count reaches 0
    if (boxItem[1] === 0) {
      boxItems.splice(0, 1);
    }

    // step 5: re-sort list of items to access color with most items left
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
