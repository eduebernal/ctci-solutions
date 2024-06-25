import { ListNode, SinglyLinkedList } from "./utils";

export const kthToLast = <T>(
  list: SinglyLinkedList<T>,
  k: number
): ListNode<T> | null => {
  let currentNode = list.head;
  let endNodeSearcher = list.head;
  for (let i = 1; i < k; i++) {
    if (endNodeSearcher == null) return null;
    endNodeSearcher = endNodeSearcher.next!;
  }
  while (endNodeSearcher) {
    if (endNodeSearcher.next === null) {
      return currentNode;
    }
    endNodeSearcher = endNodeSearcher.next;
    currentNode = currentNode.next!;
  }
  return null;
};
