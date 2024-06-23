import {
  isUnique,
  isUniqueNoAdditionalDSOptimized,
  isUniqueNoAdditionalDS,
} from "../../src/1-arrays-and-strings/is-unique";

describe.each([
  isUnique,
  isUniqueNoAdditionalDS,
  isUniqueNoAdditionalDSOptimized,
])("isUnique Tests", (isUniqueFunction) => {
  const uniqueStrings = [
    "murcielago",
    "proteina",
    "abcdefghijklmnopqrstuvwxyz",
    "{}';.,-=+",
    "AaBbCc",
    "123456789",
  ];

  const nonUniqueStrings = [
    "aaaa",
    "abcdefghijklmnopqrstuvwxyza",
    "banana",
    "++==//",
    "12345678910",
  ];
  it(`${isUniqueFunction.name}: detects unique strings`, () => {
    uniqueStrings.forEach((string) => {
      const result = isUniqueFunction(string);
      expect(result).toBe(true);
    });
  });
  it(`${isUniqueFunction.name}: returns false when string is empty`, () => {
    const result = isUniqueFunction("");
    expect(result).toBe(false);
  });

  it(`${isUniqueFunction.name}: detects non-unique strings`, () => {
    nonUniqueStrings.forEach((string) => {
      const result = isUniqueFunction(string);
      expect(result).toBe(false);
    });
  });
});
