import useFormatData from "./hooks/useFormatData";
import { createStarterBoxes } from "./utils/createStarterBoxes";
import { createRefillBoxes } from "./utils/createRefillBoxes";

const data = [
  {
    id: 2,
    name: "Anakin",
    brush_color: "blue",
    primary_insured_id: null,
    contract_effective_date: "2018-01-01",
  },
  {
    id: 3,
    name: "Padme",
    brush_color: "green",
    primary_insured_id: 2,
    contract_effective_date: "",
  },
  {
    id: 4,
    name: "Luke",
    brush_color: "pink",
    primary_insured_id: 2,
    contract_effective_date: "",
  },
];

const formattedData = [
  ["blueRemainder", 1],
  ["greenRemainder", 1],
  ["pinkRemainder", 1],
];

test("test formatData function", () => {
  const { formatData } = useFormatData();
  const BOX_TYPE = "starter";
  expect(formatData(data, BOX_TYPE)).toEqual(formattedData);
});

test("test createStarterBoxes function", () => {
  expect(createStarterBoxes(formattedData).length).toBe(2);
});

test("test createRefillBoxes function", () => {
  expect(createRefillBoxes(formattedData).length).toBe(1);
});
