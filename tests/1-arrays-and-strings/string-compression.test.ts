import { compressString } from "../../src/1-arrays-and-strings/string-compression";

describe("String compression tests", () => {
  const testCases = [
    ["aaabcccca", "a3b1c4a1"],
    ["casa", "casa"],
    ["aaacdef", "aaacdef"],
    ["aaaaaaaaaabbbbbccddddddee", "a10b5c2d6e2"],
  ];

  it("Should compress strings", () => {
    testCases.forEach((test) => {
      expect(compressString(test[0])).toEqual(test[1]);
    });
  });
});
