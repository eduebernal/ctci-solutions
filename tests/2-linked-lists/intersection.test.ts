import { intersection } from "../../src/2-linked-lists/intersection";
import { SinglyLinkedList } from "../../src/2-linked-lists/utils";

describe("Intersection tests", () => {
  it("should return intersection node on lists with same length", () => {
    const list1 = SinglyLinkedList.fromArray([1, 2, 3, 4, 5, 6]);
    const list2 = SinglyLinkedList.fromArray([7, 8, 9]);
    const intersectionNode = list1.head.next.next.next;
    list2.head.next.next.next = intersectionNode;
    expect(intersection(list1, list2)).toBe(intersectionNode);
  });

  it("should return intersection node on lists with different lengths", () => {
    const list1 = SinglyLinkedList.fromArray([1, 2, 3, 4, 5, 6]);
    const list2 = SinglyLinkedList.fromArray([7, 8]);
    const intersectionNode = list1.head.next.next.next;
    list2.head.next.next = intersectionNode;
    expect(intersection(list1, list2)).toBe(intersectionNode);
  });

  it("should return null on lists with no intersection", () => {
    const list1 = SinglyLinkedList.fromArray([1, 2, 3, 4, 5, 6]);
    const list2 = SinglyLinkedList.fromArray([7, 8]);
    expect(intersection(list1, list2)).toBeNull();
  });
});
