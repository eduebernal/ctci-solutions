export class AnimalQueue {
  dogQueue: Queue<Dog>;
  catQueue: Queue<Cat>;
  private order = 0;
  constructor() {
    this.catQueue = new Queue<Cat>();
    this.dogQueue = new Queue<Dog>();
  }
  public dequeueAny(): Animal {
    if (this.dogQueue.isEmpty()) {
      return this.dequeueCat();
    }
    if (this.catQueue.isEmpty()) {
      return this.dequeueDog();
    }
    const dog = this.dogQueue.peek();
    const cat = this.catQueue.peek();
    if (cat.isOlderThan(dog)) {
      return this.dequeueCat();
    } else {
      return this.dequeueDog();
    }
  }
  public dequeueCat(): Cat {
    return this.catQueue.remove();
  }
  public dequeueDog(): Dog {
    return this.dogQueue.remove();
  }
  public enqueue(animal: Animal) {
    animal.setOrder(this.order);
    this.order++;
    if (animal instanceof Dog) {
      this.dogQueue.add(animal);
    }
    if (animal instanceof Cat) {
      this.catQueue.add(animal);
    }
  }
}

abstract class Animal {
  order: number;
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  public setOrder(order: number) {
    this.order = order;
  }
  public getOrder(): number {
    return this.order;
  }

  public getName(): string {
    return this.name;
  }

  public isOlderThan(animal: Animal): boolean {
    return this.order < animal.getOrder();
  }
}

export class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
}

export class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}

class Queue<T> {
  first: QueueNode<T> | null = null;
  last: QueueNode<T> | null = null;
  public add(data: T) {
    const node = new QueueNode(data);
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
    if (!this.first) {
      this.first = this.last;
    }
  }
  public remove() {
    const value = this.first.data;
    this.first = this.first.next;
    return value;
  }
  public peek() {
    return this.first.data;
  }
  public isEmpty() {
    return !this.first;
  }
}

class QueueNode<T> {
  data: T;
  next: QueueNode<T>;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
