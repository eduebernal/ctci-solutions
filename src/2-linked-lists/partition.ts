import { ListNode, SinglyLinkedList } from "./utils";

//O(n) solution
export const partitionAroundValue = (
  list: SinglyLinkedList<number>,
  partition: number
): typeof list => {
  let prev = list.head;
  let node: ListNode<number> | null = list.head;
  let isInWrongSideOfPartition = false;
  while (node) {
    isInWrongSideOfPartition =
      node.value! < partition && prev.value! >= partition;
    if (isInWrongSideOfPartition) {
      //extract node
      prev.next = node.next;

      // make extracted node new head
      node.next = list.head;
      list.head = node;

      // continue from extraction point
      node = prev.next!;
    } else {
      //keep going
      prev = node;
      node = node.next;
    }
  }
  console.log(
    list
      .toArray()
      .map((val) => (val! < partition ? `${val} > ` : ` < ${val}`))
      .join(" ")
  );
  return list;
};
