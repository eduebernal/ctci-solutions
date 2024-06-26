import { ListNode, SinglyLinkedList } from "./utils";

export const sumList = (
  listA: SinglyLinkedList<number>,
  listB: SinglyLinkedList<number>
): SinglyLinkedList<number> => {
  let pointerA: ListNode<number> | null = listA.head;
  let pointerB: ListNode<number> | null = listB.head;

  let localSum = (pointerA.value ?? 0) + (pointerB.value ?? 0);
  let carryOver = localSum > 9 ? 1 : 0;
  const resultHead = new ListNode(localSum % 10);
  let pointerC = resultHead;
  pointerA = pointerA.next;
  pointerB = pointerB.next;

  while (pointerA || pointerB) {
    localSum = 0;
    localSum += carryOver;
    if (pointerA) {
      localSum += pointerA.value!;
      pointerA = pointerA.next;
    }
    if (pointerB) {
      localSum += pointerB.value!;
      pointerB = pointerB.next;
    }
    carryOver = localSum > 9 ? 1 : 0;
    pointerC.next = new ListNode(localSum % 10);

    pointerC = pointerC.next;
  }

  return new SinglyLinkedList(resultHead);
};

export const sumListReverseOrder = (
  listA: SinglyLinkedList<number>,
  listB: SinglyLinkedList<number>
): SinglyLinkedList<number> => {
  equalizeDigitLength(listA, listB);
  let pointerA: ListNode<number> | null = listA.head;
  let pointerB: ListNode<number> | null = listB.head;

  let localSum = (pointerA.value ?? 0) + (pointerB.value ?? 0);
  let carryOver = localSum > 9 ? 1 : 0;
  const firstSumNode = new ListNode(localSum % 10);
  let resultHead: ListNode<number>;
  if (carryOver) {
    resultHead = new ListNode(carryOver);
    resultHead.next = firstSumNode;
  } else {
    resultHead = firstSumNode;
  }
  let pointerC = firstSumNode;
  pointerA = pointerA.next;
  pointerB = pointerB.next;

  while (pointerA || pointerB) {
    localSum = 0;
    if (pointerA) {
      localSum += pointerA.value!;
      pointerA = pointerA.next;
    }
    if (pointerB) {
      localSum += pointerB.value!;
      pointerB = pointerB.next;
    }
    carryOver = localSum > 9 ? 1 : 0;
    pointerC.value! += carryOver;
    pointerC.next = new ListNode(localSum % 10);

    pointerC = pointerC.next;
  }

  return new SinglyLinkedList(resultHead);
};

const equalizeDigitLength = (
  listA: SinglyLinkedList<number>,
  listB: SinglyLinkedList<number>
) => {
  const lengthDiff = listA.length() - listB.length();
  if (lengthDiff > 0) {
    padWithZeros(listB, lengthDiff);
  }
  if (lengthDiff < 0) {
    padWithZeros(listA, lengthDiff * -1);
  }
};

const padWithZeros = (list: SinglyLinkedList<number>, padding: number) => {
  for (let i = 0; i < padding; i++) {
    const newHead = new ListNode(0);
    newHead.next = list.head;
    list.head = newHead;
  }
};
