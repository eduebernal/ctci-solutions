import { isOneAway } from "../../src/1-arrays-and-strings/one-away";

describe("One Away tests", () => {
  const testCases: [a: string, b: string, result: boolean][] = [
    ["hello", "hello", true],
    ["", "a", true],
    ["aabbcc", "aabcc", true],
    ["holidays", "holdays", true],
    ["adventure", "adventurx", true],
    ["aabbcc", "aabbx", false],
    ["abccc", "aabbcc", false],
    ["aabbcc", "abbcc", true],
    ["Hello World", "Hello Peter", false],
  ];

  it("Should determine if string is one edit away from another", () => {
    testCases.forEach((test) => {
      const result = isOneAway(test[0], test[1]);
      const expected = test[2];
      console.log(test, result);
      expect(result).toBe(expected);
    });
  });
});
