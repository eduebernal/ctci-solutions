import { isStringRotation } from "../../src/1-arrays-and-strings/string-rotation";

describe("String rotation tests", () => {
  it("Should detect if string is rotation of another string", () => {
    const example = ["waterbottle", "erbottlewat"];
    const example2 = ["Hello World", "llo WorldHe"];
    const example3 = [
      "crackingthecodinginterview",
      "thecodinginterviewcrackeng",
    ];
    const emptyCase = ["", ""];
    const differentLengths = ["a", "bbbb"];
    expect(isStringRotation(emptyCase[0], emptyCase[1])).toBe(false);
    expect(isStringRotation(differentLengths[0], differentLengths[1])).toBe(
      false
    );
    expect(isStringRotation(example[0], example[1])).toBe(true);
    expect(isStringRotation(example2[0], example2[1])).toBe(true);
    expect(isStringRotation(example3[0], example3[1])).toBe(false);
  });
});
