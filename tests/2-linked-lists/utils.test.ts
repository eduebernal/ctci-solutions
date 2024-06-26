import { SinglyLinkedList, ListNode } from "../../src/2-linked-lists/utils";

describe("Linked List Utils test", () => {
  const numberArray = [1, 2, 3];
  const stringArray = ["a", "b", "c"];
  const objectArray: any[] = [[1], ["a", "b"], [null, null]];
  const singleArray = [1];

  [numberArray, stringArray, objectArray, singleArray].forEach((arr) => {
    it(`Creates a single linked list from an array of ${typeof arr[0]}`, () => {
      const LinkedList = SinglyLinkedList.fromArray(arr);
      const LinkedListValues = LinkedList.toArray();
      expect(LinkedList?.head?.value).toBe(arr[0]);
      expect(LinkedListValues).toEqual(arr);
    });
  });

  it("Returns an empty list when trying to create a singly linked list from an empty array", () => {
    const LinkedList = SinglyLinkedList.fromArray([]);
    expect(LinkedList).toEqual(new SinglyLinkedList());
  });

  it("Returns the list length", () => {
    const list1 = SinglyLinkedList.fromArray([]);
    expect(list1.length()).toBe(1);
    const list2 = SinglyLinkedList.fromArray([1, 2, 3, 4, 5]);
    expect(list2.length()).toBe(5);
    const list3 = SinglyLinkedList.fromArray(new Array(100).fill(0));
    expect(list3.length()).toBe(100);
  });
});
