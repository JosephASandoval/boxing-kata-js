import { addGroupData } from "./addGroupData";
import { addNonGroupData } from "./addNonGroupData";
import { processBoxes } from "./processBoxes";

export function createBoxes(boxesData, numBoxes, MAX_ITEMS) {
  let boxes = new Array(numBoxes).fill(null).map(() => []);

  // sorts groups into boxes
  let groupData = boxesData.filter((elem) => elem[0].includes("Group"));
  groupData.sort((a, b) => b[1] - a[1]);
  if (groupData.length > 0) {
    addGroupData(groupData, boxes, MAX_ITEMS);
  }

  // sorts non-groups into boxes
  let nonGroupData = boxesData.filter((elem) => !elem[0].includes("Group"));
  nonGroupData.sort((a, b) => b[1] - a[1]);
  if (nonGroupData.length > 0) {
    addNonGroupData(nonGroupData, boxes, MAX_ITEMS);
  }

  // processes the boxes so they return proper jsx and styling
  const finishedBoxes = processBoxes(boxes, MAX_ITEMS);
  return finishedBoxes;
}
