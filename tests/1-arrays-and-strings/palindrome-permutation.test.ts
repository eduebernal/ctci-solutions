import { isPalindromePermutation } from "../../src/1-arrays-and-strings/palindrome-permutation";

describe("Palindrome permutation tests", () => {
  const palindromePermutations = [
    "a",
    "aA",
    "ana",
    "anna",
    "anita lava la tina",
    "atina aval al nati",
    "racecar",
  ];

  const notPalindromePermutations = [
    "",
    "botella",
    "barco",
    "avion",
    "television",
    "la muralla verde",
    "la rallamu dever",
  ];

  it("Identifies palindrome permutations", () => {
    palindromePermutations.forEach((input) => {
      expect(isPalindromePermutation(input)).toBe(true);
    });
  });

  it("returns false when input is not a palindrome permutation", () => {
    notPalindromePermutations.forEach((input) => {
      expect(isPalindromePermutation(input)).toBe(false);
    });
  });
});
