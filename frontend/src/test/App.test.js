import { createStarterBoxes } from "../utils/createStarterBoxes";
import { createRefillBoxes } from "../utils/createRefillBoxes";
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

// test createStarterBoxes function
test("test createStarterBoxes function with one member", () => {
  let BOX_TYPE = "starter"
  let formattedDataOne = formatData(dataOne, BOX_TYPE);
  expect(createStarterBoxes(formattedDataOne).length).toBe(1);
});
test("test createStarterBoxes function with two members", () => {
  let BOX_TYPE = "starter";
  let formattedDataTwo = formatData(dataTwo, BOX_TYPE);
  expect(createStarterBoxes(formattedDataTwo).length).toBe(1);
});
test("test createStarterBoxes function with three members", () => {
  let BOX_TYPE = "starter";
  let formattedDataThree = formatData(dataThree, BOX_TYPE);
  expect(createStarterBoxes(formattedDataThree).length).toBe(2);
});
test("test createStarterBoxes function with four members", () => {
  let BOX_TYPE = "starter";
  let formattedDataFour = formatData(dataFour, BOX_TYPE);
  expect(createStarterBoxes(formattedDataFour).length).toBe(2);
});
test("test createStarterBoxes function with five members", () => {
  let BOX_TYPE = "starter";
  let formattedDataFive = formatData(dataFive, BOX_TYPE);
  expect(createStarterBoxes(formattedDataFive).length).toBe(3);
});
test("test createStarterBoxes function with six members", () => {
  let BOX_TYPE = "starter";
  let formattedDataSix = formatData(dataSix, BOX_TYPE);
  expect(createStarterBoxes(formattedDataSix).length).toBe(3);
});
test("test createStarterBoxes function with seven members", () => {
  let BOX_TYPE = "starter";
  let formattedDataSeven = formatData(dataSeven, BOX_TYPE);
  expect(createStarterBoxes(formattedDataSeven).length).toBe(4);
});
test("test createStarterBoxes function with eight members", () => {
  let BOX_TYPE = "starter";
  let formattedDataEight = formatData(dataEight, BOX_TYPE);
  expect(createStarterBoxes(formattedDataEight).length).toBe(4);
});
test("test createStarterBoxes function with nine members", () => {
  let BOX_TYPE = "starter";
  let formattedDataNine = formatData(dataNine, BOX_TYPE);
  expect(createStarterBoxes(formattedDataNine).length).toBe(5);
});

// test createStarterBoxes function
test("test createRefillBoxes function with one remainder", () => {
  let BOX_TYPE = "refill";
  let formattedDataOne = formatData(dataOne, BOX_TYPE);
  expect(createRefillBoxes(formattedDataOne).length).toBe(1);
});
test("test createRefillBoxes function with two remainder", () => {
  let BOX_TYPE = "refill";
  let formattedDataTwo = formatData(dataTwo, BOX_TYPE);
  expect(createRefillBoxes(formattedDataTwo).length).toBe(1);
});
test("test createRefillBoxes function with three remainder", () => {
  let BOX_TYPE = "refill";
  let formattedDataThree = formatData(dataThree, BOX_TYPE);
  expect(createRefillBoxes(formattedDataThree).length).toBe(1);
});
test("test createRefillBoxes function with four remainder", () => {
  let BOX_TYPE = "refill";
  let formattedDataFour = formatData(dataFour, BOX_TYPE);
  expect(createRefillBoxes(formattedDataFour).length).toBe(1);
});
test("test createRefillBoxes function with five remainder", () => {
  let BOX_TYPE = "refill";
  let formattedDataFive = formatData(dataFive, BOX_TYPE);
  expect(createRefillBoxes(formattedDataFive).length).toBe(2);
});
test("test createRefillBoxes function with six remainder", () => {
  let BOX_TYPE = "refill";
  let formattedDataSix = formatData(dataSix, BOX_TYPE);
  expect(createRefillBoxes(formattedDataSix).length).toBe(2);
});
test("test createRefillBoxes function with seven remainder", () => {
  let BOX_TYPE = "refill";
  let formattedDataSeven = formatData(dataSeven, BOX_TYPE);
  expect(createRefillBoxes(formattedDataSeven).length).toBe(2);
});
test("test createRefillBoxes function with eight remainder", () => {
  let BOX_TYPE = "refill";
  let formattedDataEight = formatData(dataEight, BOX_TYPE);
  expect(createRefillBoxes(formattedDataEight).length).toBe(2);
});
test("test createRefillBoxes function with nine remainder", () => {
  let BOX_TYPE = "refill";
  let formattedDataNine = formatData(dataNine, BOX_TYPE);
  expect(createRefillBoxes(formattedDataNine).length).toBe(3);
});
