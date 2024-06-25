import { ListNode } from "./utils";

export const deleteMiddleNode = (node: ListNode<any> | null) => {
  if (node == null || node.next == null) return;
  node.value = node.next.value;
  node.next = node.next.next;
};
