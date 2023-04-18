import caesarCipher from "./caesarCipher";

test("Doesn't change spaces", () => {
  expect(caesarCipher("42@* aba", null)).toBe("42@* aba");
});

test("Shifts by 0", () => {
  expect(caesarCipher("42@* aba", 0)).toBe("42@* aba");
});

test("Shifts by 1", () => {
  expect(caesarCipher("42@* aba", 1)).toBe("42@* bcb");
});

test("Shifts by -1", () => {
  expect(caesarCipher("42@* aba", -1)).toBe("42@* zaz");
});

test("Shifts by 26", () => {
  expect(caesarCipher("42@* aba", 26)).toBe("42@* aba");
});

test("Shifts by -26", () => {
  expect(caesarCipher("42@* aba", -26)).toBe("42@* aba");
});

test("Shifts by 27", () => {
  expect(caesarCipher("42@* aba", 27)).toBe("42@* bcb");
});

test("Shifts by -27", () => {
  expect(caesarCipher("42@* aba", -27)).toBe("42@* zaz");
});

test("Works with full sentences and trims", () => {
  expect(caesarCipher("  attack at dawn  ", 13)).toBe("nggnpx ng qnja");
});

test("Works with punctuation and case sensitive", () => {
  expect(caesarCipher("  Attack, at Dawn  ", 13)).toBe("Nggnpx, ng Qnja");
});
