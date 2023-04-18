import calculator from "./calculator";

test("Adds numbers", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Subtracts numbers", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test("Multiplies numbers", () => {
  expect(calculator.multiply(1000, 0)).toBe(0);
});

test("Divides numbers", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test("Does not divide by zero", () => {
  expect(calculator.divide(2, 0)).toBe("Cannot divide by zero");
});
