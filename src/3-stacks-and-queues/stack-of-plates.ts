export class SetOfStacks<T> {
  private capacity: number;
  private stacks: Stack<T>[] = [];
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public push(item: T) {
    const lastStack = this.getLastStack();
    if (lastStack === null || lastStack.isFull()) {
      const newStack = new Stack<T>(this.capacity);
      newStack.push(item);
      this.stacks.push(newStack);
    } else {
      lastStack.push(item);
    }
  }

  public pop(): T {
    const lastStack = this.getLastStack();
    const poppedNode = lastStack.pop();
    if (lastStack.size == 0) {
      this.stacks.pop();
    }
    return poppedNode.data;
  }

  public peek(): T {
    const lastStack = this.getLastStack();
    return lastStack.peek();
  }

  public popAt(index: number): T {
    return this.leftShift(index, true).data;
  }

  private leftShift(index: number, removeTop: boolean): StackNode<T> {
    const stack = this.stacks[index];
    let removedItem;
    if (removeTop) {
      removedItem = stack.pop();
    } else {
      removedItem = stack.removeBottom();
    }
    if (stack.isEmpty()) {
      this.stacks.splice(index);
    } else if (this.stacks.length > index + 1) {
      const v = this.leftShift(index + 1, false);
      stack.push(v.data);
    }
    return removedItem;
  }

  private getLastStack(): Stack<T> {
    if (this.stacks.length === 0) return null;
    return this.stacks[this.stacks.length - 1];
  }
}

class Stack<T> {
  capacity: number;
  size: number = 0;
  top: StackNode<T>;
  bottom: StackNode<T>;
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public push(item: T): boolean {
    if (this.size >= this.capacity) return false;
    this.size++;
    const node = new StackNode(item);
    node.below = this.top;
    if (this.size == 1) {
      this.bottom = node;
    }
    this.join(node, this.top);
    this.top = node;
    return true;
  }

  public pop(): StackNode<T> {
    this.size--;
    const poppedNode = this.top;
    this.top = this.top.below;
    return poppedNode;
  }

  public removeBottom(): StackNode<T> {
    const bottom = this.bottom;
    this.bottom = bottom.above;
    if (this.bottom != null) {
      this.bottom.below = null;
    }
    this.size--;
    return bottom;
  }

  public peek(): T {
    return this.top.data;
  }

  public isFull(): boolean {
    return this.capacity == this.size;
  }
  public isEmpty(): boolean {
    return this.size == 0;
  }

  private join(above, below) {
    if (below != null) {
      below.above = above;
    }
    if (above != null) {
      above.below = below;
    }
  }
}

class StackNode<T> {
  data: T;
  above: StackNode<T>;
  below: StackNode<T>;
  constructor(data: T) {
    this.data = data;
  }
}
