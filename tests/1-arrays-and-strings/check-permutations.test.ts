import {
  isPermutation,
  isPermutationBySort,
} from "../../src/1-arrays-and-strings/check-permutation";

describe.each([isPermutation, isPermutationBySort])(
  "check permutation tests",
  (isPermutation) => {
    const sameString = ["hello", "hello"];
    const permutation = ["hello", "elolh"];
    const differentLength = ["hello", "yes"];
    const differentWord = ["hello", "world"];
    const emptyStrings = ["", ""];
    it(`${isPermutation.name}: returns false if a is the same as b`, () => {
      expect(isPermutation(sameString[0], sameString[1])).toBe(false);
    });

    it(`${isPermutation.name}: returns false if the lengths of a and b are different`, () => {
      expect(isPermutation(differentLength[0], differentLength[1])).toBe(false);
    });

    it(`${isPermutation.name}: returns false if either string is empty`, () => {
      expect(isPermutation(emptyStrings[0], emptyStrings[1])).toBe(false);
    });

    it(`${isPermutation.name}: returns false if b is not a permutation of a`, () => {
      expect(isPermutation(differentWord[0], differentWord[1])).toBe(false);
    });

    it(`${isPermutation.name}: returns true if b is a permutation of a`, () => {
      expect(isPermutation(permutation[0], permutation[1])).toBe(true);
    });
  }
);
