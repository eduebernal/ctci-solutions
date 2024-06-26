import { ListNode, SinglyLinkedList } from "./utils";

export const intersection = (
  listA: SinglyLinkedList<any>,
  listB: SinglyLinkedList<any>
): ListNode<any> => {
  const aLength = listA.length();
  const bLength = listB.length();
  if (aLength == 1 || bLength == 1) return null;
  let pointerA = listA.head;
  let pointerB = listB.head;
  if (aLength > bLength) {
    pointerA = getAhead(pointerA, aLength - bLength);
  }
  if (aLength < bLength) {
    pointerB = getAhead(pointerB, bLength - aLength);
  }
  while (pointerA && pointerB) {
    if (pointerA == pointerB) return pointerA;
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }
  return null;
};

const getAhead = (node: ListNode<any>, distance: number): ListNode<any> => {
  while (distance > 0) {
    node = node.next;
    distance--;
  }
  return node;
};
