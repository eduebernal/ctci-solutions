import { SinglyLinkedList } from "./utils";

//O(n^2) solution O(N) space
export const removeDups = <T>(list: SinglyLinkedList<T>): typeof list => {
  const uniqueValues = new Set();
  let prev = list.head;

  list.run((node) => {
    if (uniqueValues.has(node.value)) {
      prev.next = node.next;
    } else {
      prev = node;
    }
    uniqueValues.add(node.value);
  });
  return list;
};

//O(n^2) without additional space
export const removeDupsNoBuffer = <T>(
  list: SinglyLinkedList<T>
): SinglyLinkedList<T> => {
  const head = list.head;
  list.run((nodeToCompare) => {
    let prev = nodeToCompare;
    list.run((currentNode) => {
      if (nodeToCompare.value == currentNode.value) {
        prev.next = currentNode.next;
      } else {
        prev = currentNode;
      }
    });
    if (nodeToCompare.next) {
      list.head = nodeToCompare.next;
    }
  });
  list.head = head;
  return list;
};
