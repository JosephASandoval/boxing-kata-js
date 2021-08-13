export function addNonGroupData(nonGroupData, boxes, MAX_ITEMS) {
  for (const nonGroup of nonGroupData) {
    // sets color and count
    const [color, count] = nonGroup;

    // initialize minIdx
    let minIdx = 0;

    // updates minIdx based on box with least number of items
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].length < boxes[minIdx].length) {
        minIdx = i;
      }
    }

    // adds a non-group to the next most empty box if possible
    if (boxes[minIdx].length + count <= MAX_ITEMS) {
      for (let i = 0; i < count; i++) {
        boxes[minIdx].push(color);
      }
    } else {
      // if unable to add non-group, then split up non-group and add
      let itemsRemaining = count;
      for (let i = 0; i < boxes.length; i++) {
        if (itemsRemaining > 0 && boxes[i].length + 1 <= MAX_ITEMS) {
          boxes[i].push(color);
          itemsRemaining--;
        }
      }
    }
  }
}
