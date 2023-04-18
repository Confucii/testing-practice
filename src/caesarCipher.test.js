import caesarCipher from "./caesarCipher";

test("Remove Special Characters and numbers", () => {
  expect(caesarCipher("42@*", null)).toBe("");
});

test("Doesn't change spaces", () => {
  expect(caesarCipher("42@* aba", null)).toBe("aba");
});

test("Shifts by 0", () => {
  expect(caesarCipher("42@* aba", 0)).toBe("aba");
});

test("Shifts by 1", () => {
  expect(caesarCipher("42@* aba", 1)).toBe("bcb");
});

test("Shifts by -1", () => {
  expect(caesarCipher("42@* aba", -1)).toBe("zaz");
});

test("Shifts by 26", () => {
  expect(caesarCipher("42@* aba", 26)).toBe("aba");
});

test("Shifts by -26", () => {
  expect(caesarCipher("42@* aba", -26)).toBe("aba");
});

test("Shifts by 27", () => {
  expect(caesarCipher("42@* aba", 27)).toBe("bcb");
});

test("Shifts by -27", () => {
  expect(caesarCipher("42@* aba", -27)).toBe("zaz");
});

test("Works with full sentences and trims", () => {
  expect(caesarCipher("  attack at dawn  ", 13)).toBe("nggnpx ng qnja");
});
