export class Node<T> {
  value: T | null = null;
  next: Node<T> | null = null;

  constructor(value?: T) {
    if (value) {
      this.value = value;
    }
  }
}

export class SinglyLinkedList<T> {
  head: Node<T> | null = null;
  constructor(head: Node<T>) {
    this.head = head;
  }

  static fromArray<T>(array: T[]): SinglyLinkedList<T> | null {
    let head: Node<T> | null = null;
    let prev: Node<T> | null = null;
    let current: Node<T>;
    for (let i = 0; i < array.length; i++) {
      current = new Node(array[i]);
      if (i == 0) {
        head = current;
      }
      if (prev) {
        prev.next = current;
      }
      prev = current;
    }
    if (head) {
      return new SinglyLinkedList(head);
    }
    return null;
  }
}
