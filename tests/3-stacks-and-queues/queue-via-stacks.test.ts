import { StackQueue } from "../../src/3-stacks-and-queues/queue-via-stacks";

describe("Queue via stacks tests", () => {
  it("Should behave like a queue", () => {
    const queue = new StackQueue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.lastOnTop.peek()).toBe(3);
    expect(queue.firstOnTop.isEmpty()).toBeTruthy();
    expect(queue.peek()).toBe(1);
    expect(queue.lastOnTop.isEmpty()).toBeTruthy();
    expect(queue.remove()).toBe(1);
    expect(queue.peek()).toBe(2);
    queue.add(4);
    expect(queue.peek()).toBe(2);
  });
});
