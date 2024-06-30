import { detectLoop } from "../../src/2-linked-lists/loop-detection";
import { ListNode, SinglyLinkedList } from "../../src/2-linked-lists/utils";

describe("Loop detection tests", () => {
  const loopPart = SinglyLinkedList.fromArray([1, 2, 3, 4, 5, 6], true);
  const completeList = SinglyLinkedList.fromArray([7, 8, 9]);
  completeList.head.next.next.next = loopPart.head;
  it("Should return first node of the loop", () => {
    expect(detectLoop(completeList)).toEqual({
      value: 1,
      next: expect.any(ListNode),
    });
  });
  it("Should return listhead if loop has no extra part", () => {
    expect(detectLoop(loopPart)).toEqual(loopPart.head);
  });
  it("Should return null if list does not loop", () => {
    expect(
      detectLoop(SinglyLinkedList.fromArray([1, 2, 3, 4, 5, 6]))
    ).toBeNull();
  });
});
