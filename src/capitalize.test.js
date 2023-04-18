import capitalize from "./capitalize";

test("Capitalizes a letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("Capitalizes a word", () => {
  expect(capitalize("abba")).toBe("Abba");
});

test("Capitalizes a word with capitals", () => {
  expect(capitalize("aBBA")).toBe("ABBA");
});

test("Does not break without input", () => {
  expect(capitalize("")).toBe("");
});
