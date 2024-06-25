export class ListNode<T> {
  value: T | null;
  next: ListNode<T> | null = null;

  constructor(value?: T) {
    this.value = value ?? null;
  }
}

export class SinglyLinkedList<T> {
  head: ListNode<T>;
  constructor(head?: ListNode<T>) {
    this.head = head ?? new ListNode();
  }

  public run(fn: (node: ListNode<T>) => void) {
    let current: ListNode<T> | null = this.head;
    while (current) {
      fn(current);
      current = current.next;
    }
  }

  public toArray(): (T | null)[] {
    const arr: (T | null)[] = [];
    this.run((node) => {
      arr.push(node.value);
    });
    return arr;
  }

  static fromArray<T>(array: T[]): SinglyLinkedList<T> {
    let head: ListNode<T> | null = null;
    let prev: ListNode<T> | null = null;
    let current: ListNode<T>;
    for (let i = 0; i < array.length; i++) {
      current = new ListNode(array[i]);
      if (i == 0) {
        head = current;
      }
      if (prev) {
        prev.next = current;
      }
      prev = current;
    }

    return head ? new SinglyLinkedList(head) : new SinglyLinkedList();
  }
}
