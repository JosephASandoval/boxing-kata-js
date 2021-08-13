import { createBoxes } from "../utils/createBoxes";
import useFormatData from "../hooks/useFormatData";
import { dataOne } from "./data";
import { dataTwo } from "./data";
import { dataThree } from "./data";
import { dataFour } from "./data";
import { dataFive } from "./data";
import { dataSix } from "./data";
import { dataSeven } from "./data";
import { dataEight } from "./data";
import { dataNine } from "./data";
const { formatData } = useFormatData();

// test createBoxes function for starter boxes
test("test creating starter boxes with one member", () => {
  let MAX_ITEMS = 2;
  let formattedDataOne = formatData(dataOne, MAX_ITEMS);
  expect(createBoxes(formattedDataOne, 1, MAX_ITEMS).length).toBe(1);
});
test("test creating starter boxes with two members", () => {
  let MAX_ITEMS = 2;
  let formattedDataTwo = formatData(dataTwo, MAX_ITEMS);
  expect(createBoxes(formattedDataTwo, 1, MAX_ITEMS).length).toBe(1);
});
test("test creating starter boxes with three members", () => {
  let MAX_ITEMS = 2;
  let formattedDataThree = formatData(dataThree, MAX_ITEMS);
  expect(createBoxes(formattedDataThree, 2, MAX_ITEMS).length).toBe(2);
});
test("test creating starter boxes with four members", () => {
  let MAX_ITEMS = 2;
  let formattedDataFour = formatData(dataFour, MAX_ITEMS);
  expect(createBoxes(formattedDataFour, 2, MAX_ITEMS).length).toBe(2);
});
test("test creating starter boxes with five members", () => {
  let MAX_ITEMS = 2;
  let formattedDataFive = formatData(dataFive, MAX_ITEMS);
  expect(createBoxes(formattedDataFive, 3, MAX_ITEMS).length).toBe(3);
});
test("test creating starter boxes with six members", () => {
  let MAX_ITEMS = 2;
  let formattedDataSix = formatData(dataSix, MAX_ITEMS);
  expect(createBoxes(formattedDataSix, 3, MAX_ITEMS).length).toBe(3);
});
test("test creating starter boxes with seven members", () => {
  let MAX_ITEMS = 2;
  let formattedDataSeven = formatData(dataSeven, MAX_ITEMS);
  expect(createBoxes(formattedDataSeven, 4, MAX_ITEMS).length).toBe(4);
});
test("test creating starter boxes with eight members", () => {
  let MAX_ITEMS = 2;
  let formattedDataEight = formatData(dataEight, MAX_ITEMS);
  expect(createBoxes(formattedDataEight, 4, MAX_ITEMS).length).toBe(4);
});
test("test creating starter boxes with nine members", () => {
  let MAX_ITEMS = 2;
  let formattedDataNine = formatData(dataNine, MAX_ITEMS);
  expect(createBoxes(formattedDataNine, 5, MAX_ITEMS).length).toBe(5);
});

// test createBoxes function for refill boxes
test("test creating refill boxes with one remainder", () => {
  let MAX_ITEMS = 4;
  let formattedDataOne = formatData(dataOne, MAX_ITEMS);
  expect(createBoxes(formattedDataOne, 1, MAX_ITEMS).length).toBe(1);
});
test("test creating refill boxes with two remainder", () => {
  let MAX_ITEMS = 4;
  let formattedDataTwo = formatData(dataTwo, MAX_ITEMS);
  expect(createBoxes(formattedDataTwo, 1, MAX_ITEMS).length).toBe(1);
});
test("test creating refill boxes with three remainder", () => {
  let MAX_ITEMS = 4;
  let formattedDataThree = formatData(dataThree, MAX_ITEMS);
  expect(createBoxes(formattedDataThree, 1, MAX_ITEMS).length).toBe(1);
});
test("test creating refill boxes with four remainder", () => {
  let MAX_ITEMS = 4;
  let formattedDataFour = formatData(dataFour, MAX_ITEMS);
  expect(createBoxes(formattedDataFour, 1, MAX_ITEMS).length).toBe(1);
});
test("test creating refill boxes with five remainder", () => {
  let MAX_ITEMS = 4;
  let formattedDataFive = formatData(dataFive, MAX_ITEMS);
  expect(createBoxes(formattedDataFive, 2, MAX_ITEMS).length).toBe(2);
});
test("test creating refill boxes with six remainder", () => {
  let MAX_ITEMS = 4;
  let formattedDataSix = formatData(dataSix, MAX_ITEMS);
  expect(createBoxes(formattedDataSix, 2, MAX_ITEMS).length).toBe(2);
});
test("test creating refill boxes with seven remainder", () => {
  let MAX_ITEMS = 4;
  let formattedDataSeven = formatData(dataSeven, MAX_ITEMS);
  expect(createBoxes(formattedDataSeven, 2, MAX_ITEMS).length).toBe(2);
});
test("test creating refill boxes with eight remainder", () => {
  let MAX_ITEMS = 4;
  let formattedDataEight = formatData(dataEight, MAX_ITEMS);
  expect(createBoxes(formattedDataEight, 2, MAX_ITEMS).length).toBe(2);
});
test("test creating refill boxes with nine remainder", () => {
  let MAX_ITEMS = 4;
  let formattedDataNine = formatData(dataNine, MAX_ITEMS);
  expect(createBoxes(formattedDataNine, 3, MAX_ITEMS).length).toBe(3);
});
