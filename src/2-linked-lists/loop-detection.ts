import { ListNode, SinglyLinkedList } from "./utils";

export const detectLoop = <T>(list: SinglyLinkedList<T>): ListNode<T> => {
  let collisionNode = findCollisionNode(list.head);
  if (collisionNode === null) return null;
  let headPointer = list.head;
  while (collisionNode !== headPointer) {
    headPointer = headPointer.next;
    collisionNode = collisionNode.next;
  }
  return collisionNode;
};

const findCollisionNode = <T>(listHead: ListNode<T>): ListNode<T> => {
  let slow = listHead.next;
  let fast = listHead.next.next;
  while (slow !== fast) {
    if (slow === null || fast === null) return null;
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
