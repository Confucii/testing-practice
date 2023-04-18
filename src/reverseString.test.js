import reverseString from "./reverseString";

test("Reverses a letter", () => {
  expect(reverseString("a")).toBe("a");
});

test("Reverses a word", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("Reverses a sentence with spaces", () => {
  expect(reverseString("ab ab")).toBe("ba ba");
});

test("Reverses a sentence with special symbols", () => {
  expect(reverseString("!ab ab")).toBe("ba ba!");
});

test("Reverses a sentence with numbers", () => {
  expect(reverseString("!ab ab1")).toBe("1ba ba!");
});

test("Works without input", () => {
  expect(reverseString("!ab ab1")).toBe("1ba ba!");
});
