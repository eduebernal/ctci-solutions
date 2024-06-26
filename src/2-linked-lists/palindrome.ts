import { ListNode, SinglyLinkedList } from "./utils";

export const reverseList = (list: SinglyLinkedList<any>) => {
  let prev = null;
  let current = list.head;
  let next = current.next;
  if (next == null) {
    return list;
  }
  while (current) {
    current.next = prev;
    prev = current;
    current = next;
    next = next?.next;
  }
  return new SinglyLinkedList(prev);
};

export const reverseAndClone = (list: SinglyLinkedList<any>) => {
  let prev = null;
  let current = list.head;
  let next = current.next;
  if (next == null) {
    return new SinglyLinkedList(new ListNode(current.value));
  }
  while (current) {
    const currentClone = new ListNode(current.value);
    currentClone.next = prev;
    prev = currentClone;
    current = next;
    next = next?.next;
  }
  return new SinglyLinkedList(prev);
};

export const isPalindromeByReversing = (list: SinglyLinkedList<any>) => {
  const reversedList = reverseAndClone(list);
  let currentReversed = reversedList.head;
  let current = list.head;
  while (current && currentReversed) {
    if (current.value !== currentReversed.value) return false;
    current = current.next;
    currentReversed = currentReversed.next;
  }
  return true;
};

export const isPalindromeWithStack = <T>(list: SinglyLinkedList<T>) => {
  let slow = list.head;
  let fast = list.head;
  const stack: T[] = [];
  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next?.next;
  }
  if (fast) {
    slow = slow.next;
  }
  while (slow) {
    const current = stack.pop();
    if (current !== slow.value) return false;
    slow = slow.next;
  }
  return true;
};
