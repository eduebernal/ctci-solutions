export class Stack<T> {
  top: StackNode<T>;
  public push(item: T): void {
    const prev = this.top;
    this.top = new StackNode(item);
    this.top.next = prev;
  }
  public pop(): T {
    if (this.top == null) return null;
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }
  public peek(): T {
    if (this.top) return this.top.value;
  }
  public isEmpty(): boolean {
    return !this.top;
  }

  public sort() {
    const r = new Stack<T>();
    while (!this.isEmpty()) {
      const temp = this.pop();
      while (!r.isEmpty() && r.peek() > temp) {
        this.push(r.pop());
      }
      r.push(temp);
    }

    while (!r.isEmpty()) {
      this.push(r.pop());
    }
  }
}

class StackNode<T> {
  value: T;
  next: StackNode<T>;
  constructor(item: T) {
    this.value = item;
    this.next = null;
  }
}
