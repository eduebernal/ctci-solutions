export class StackQueue<T> {
  firstOnTop: Stack<T>;
  lastOnTop: Stack<T>;
  constructor() {
    this.firstOnTop = new Stack();
    this.lastOnTop = new Stack();
  }

  public add(item: T): void {
    this.lastOnTop.push(new Node(item));
  }
  public remove(): T {
    if (this.firstOnTop.isEmpty()) {
      this.moveToStack(this.lastOnTop, this.firstOnTop);
    }
    return this.firstOnTop.pop().value;
  }
  public peek(): T {
    if (this.firstOnTop.isEmpty()) {
      this.moveToStack(this.lastOnTop, this.firstOnTop);
    }
    return this.firstOnTop.top.value;
  }
  public isEmpty() {
    return this.firstOnTop.top === null && this.lastOnTop.top === null;
  }

  private moveToStack(originalStack: Stack<T>, targetStack: Stack<T>) {
    while (originalStack.top) {
      const node = originalStack.pop();
      targetStack.push(node);
    }
  }
}

class Stack<T> {
  top: Node<T> | null = null;
  public push(node: Node<T>): void {
    const prev = this.top;
    this.top = node;
    this.top.next = prev;
  }
  public pop(): Node<T> {
    const node = this.top;
    this.top = this.top.next;
    return node;
  }
  public peek(): T {
    return this.top.value;
  }
  public isEmpty() {
    return this.top === null;
  }
}

class Node<T> {
  value: T;
  next: Node<T>;
  constructor(item: T) {
    this.value = item;
    this.next = null;
  }
}
