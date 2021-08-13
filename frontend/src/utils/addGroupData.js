export function addGroupData(groupData, boxes, MAX_ITEMS) {
  for (const group of groupData) {
    let [type, count] = group;

    // sets color from type given
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

      // updates minIdx based on box with least number of items
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].length < boxes[minIdx].length) {
          minIdx = i;
        }
      }

      // adds a group to the next most empty box
      for (let j = 0; j < MAX_ITEMS; j++) {
        boxes[minIdx].push(color);
      }
      count--;
    }
  }
}
