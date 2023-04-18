import analyzeArray from "./analyzeArray";

test("Returns objects with correct values", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Returns objects with correct values for smaller object", () => {
  expect(analyzeArray([1, 6, 5, 2, -1])).toEqual({
    average: 2.6,
    min: -1,
    max: 6,
    length: 5,
  });
});

test("Throws an error for non array inputs", () => {
  expect(analyzeArray("ba")).toEqual(new Error("Not an array"));
});

test("Filters non number inputs in array", () => {
  expect(analyzeArray([1, 6, 5, 2, -1, "A", []])).toEqual({
    average: 2.6,
    min: -1,
    max: 6,
    length: 7,
  });
});

test("Does not break with NaN", () => {
  expect(analyzeArray([1, 6, 5, 2, -1, "A", [], NaN])).toEqual({
    average: 2.6,
    min: -1,
    max: 6,
    length: 8,
  });
});
