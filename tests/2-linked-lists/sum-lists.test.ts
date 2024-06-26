import {
  sumList,
  sumListReverseOrder,
} from "../../src/2-linked-lists/sum-lists";
import { SinglyLinkedList } from "../../src/2-linked-lists/utils";

describe("Sum lists tests", () => {
  it("Should sum two numbers with equal digit length", () => {
    const listA = SinglyLinkedList.fromArray([7, 1, 6]);
    const listB = SinglyLinkedList.fromArray([5, 9, 2]);
    expect(sumList(listA, listB).toArray()).toEqual([2, 1, 9]);
  });
  it("Should sum two numbers with different digit length", () => {
    const listA = SinglyLinkedList.fromArray([7, 1, 6, 8, 5]);
    const listB = SinglyLinkedList.fromArray([5, 9, 2]);
    expect(sumList(listA, listB).toArray()).toEqual([2, 1, 9, 8, 5]);
  });

  it("Should sum two numbers when one is null", () => {
    const listA = SinglyLinkedList.fromArray([7, 1, 6, 8]);
    const listB = SinglyLinkedList.fromArray([]);
    expect(sumList(listA, listB).toArray()).toEqual([7, 1, 6, 8]);
  });
  it("Should sum two numbers when both are null", () => {
    const listA = SinglyLinkedList.fromArray([]);
    const listB = SinglyLinkedList.fromArray([]);
    expect(sumList(listA, listB).toArray()).toEqual([0]);
  });
});

describe("Sum lists reverse order tests", () => {
  it("Should sum two numbers with equal digit length", () => {
    const listA = SinglyLinkedList.fromArray([7, 1, 6].reverse());
    const listB = SinglyLinkedList.fromArray([5, 9, 2].reverse());
    expect(sumListReverseOrder(listA, listB).toArray()).toEqual(
      [2, 1, 9].reverse()
    );
  });
  it("Should sum two numbers with different digit length", () => {
    const listA = SinglyLinkedList.fromArray([7, 1, 6, 8, 5].reverse());
    const listB = SinglyLinkedList.fromArray([5, 9, 2].reverse());
    expect(sumListReverseOrder(listA, listB).toArray()).toEqual(
      [2, 1, 9, 8, 5].reverse()
    );
  });

  it("Should sum two numbers when one is null", () => {
    const listA = SinglyLinkedList.fromArray([7, 1, 6, 8].reverse());
    const listB = SinglyLinkedList.fromArray([]);
    expect(sumListReverseOrder(listA, listB).toArray()).toEqual(
      [7, 1, 6, 8].reverse()
    );
  });
  it("Should sum two numbers when both are null", () => {
    const listA = SinglyLinkedList.fromArray([]);
    const listB = SinglyLinkedList.fromArray([]);
    expect(sumListReverseOrder(listA, listB).toArray()).toEqual([0]);
  });
});
