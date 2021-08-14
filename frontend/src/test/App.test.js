// Unit tests for my greedy box sorting algorithm:
import {
  createBoxContainer,
  fillBoxContainer,
} from "../utils/createBoxContainer";
import Box from "../utils/boxClass";
import useGetItems from "../hooks/useGetItems";
import { testData } from "./testData";

test("test getItems function", () => {
  const { getItems } = useGetItems();
  expect(getItems(testData)).toEqual([
    ["blue", 2],
    ["green", 2],
    ["pink", 1],
  ]);
});

test("test fillBoxContainer", () => {
  const { getItems } = useGetItems();
  const boxItems = getItems(testData);
  const numBoxes = 2;
  const MAX_ITEMS = 4;
  let boxContainer = new Array(numBoxes)
    .fill(null)
    .map(() => new Box(MAX_ITEMS));
  fillBoxContainer(boxItems, boxContainer);
  expect(boxContainer[0].content).toEqual(["blue", "blue", "pink"]);
  expect(boxContainer[1].content).toEqual(["green", "green"]);
});

test("test createBoxContainer function", () => {
  const { getItems } = useGetItems();
  const items = getItems(testData);
  const numBoxes = 2;
  const MAX_ITEMS = 4;
  expect(createBoxContainer(items, numBoxes, MAX_ITEMS).length).toBe(2);
});
