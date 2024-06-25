import { deleteMiddleNode } from "../../src/2-linked-lists/delete-middle-node";
import { SinglyLinkedList } from "../../src/2-linked-lists/utils";

describe("Delete middle node tests", () => {
  let list: SinglyLinkedList<any>;
  beforeEach(() => {
    list = SinglyLinkedList.fromArray([1, 2, 3, 4, 5]);
  });
  it("Should delete middle node", () => {
    deleteMiddleNode(list.head.next);
    expect(list.toArray()).toEqual([1, 3, 4, 5]);
  });

  it("Should delete first node", () => {
    deleteMiddleNode(list.head);
    expect(list.toArray()).toEqual([2, 3, 4, 5]);
  });

  it("Should handle special cases", () => {
    deleteMiddleNode(list.head?.next?.next?.next?.next!);
    expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
    deleteMiddleNode(null);
    expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
  });
});
