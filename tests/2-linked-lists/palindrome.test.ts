import {
  isPalindromeByReversing,
  isPalindromeWithStack,
  reverseAndClone,
  reverseList,
} from "../../src/2-linked-lists/palindrome";
import { SinglyLinkedList } from "../../src/2-linked-lists/utils";

describe("Reverse linked list tests", () => {
  it("reverses a linked list", () => {
    const result = reverseList(SinglyLinkedList.fromArray([1, 2, 3, 4, 5]));
    expect(result.toArray()).toEqual([5, 4, 3, 2, 1]);
  });

  it("reverses and clones a linked list", () => {
    const originalList = SinglyLinkedList.fromArray([1, 2, 3, 4, 5]);
    const result = reverseAndClone(originalList);
    expect(result == originalList).toBeFalsy();
    expect(result.toArray()).toEqual([5, 4, 3, 2, 1]);
  });
  it("reverses a linked list of length 1 and 0", () => {
    const result = reverseList(SinglyLinkedList.fromArray([1]));
    expect(result.toArray()).toEqual([1]);
    const result2 = reverseList(SinglyLinkedList.fromArray([]));
    expect(result2.toArray()).toEqual([null]);
  });
});

describe("Is Palindrome tests", () => {
  [isPalindromeByReversing, isPalindromeWithStack].forEach((isPalindrome) => {
    it(`checks even and odd palindromes with ${isPalindrome.name}`, () => {
      const oddList = SinglyLinkedList.fromArray("racecar".split(""));
      const evenList = SinglyLinkedList.fromArray("anna".split(""));
      const nonPalindrome = SinglyLinkedList.fromArray(
        "helloworld!!".split("")
      );
      expect(isPalindrome(oddList)).toBeTruthy();
      expect(isPalindrome(evenList)).toBeTruthy();
      expect(isPalindrome(nonPalindrome)).toBeFalsy();
    });
  });
});
