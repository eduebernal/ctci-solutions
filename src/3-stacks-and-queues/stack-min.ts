export class StackMin<T> {
  private top: StackMinNode<T>;

  public push(data: T) {
    const top = new StackMinNode(data);
    if (this.top && this.top.min.data < top.data) {
      top.min = this.top.min;
    }
    top.next = this.top;
    this.top = top;
  }

  public pop() {
    if (this.top == null) {
      throw new Error("Stack is empty");
    }
    const value = this.top.data;
    this.top = this.top.next;
    return value;
  }

  public peek() {
    return this.top.data;
  }

  public isEmpty() {
    return this.top == null;
  }

  public min() {
    return this.top.min.data;
  }
}

class StackMinNode<T> {
  data: T;
  min: StackMinNode<T>;
  next: StackMinNode<T>;
  constructor(data: T) {
    this.data = data;
    this.min = this;
  }
}
