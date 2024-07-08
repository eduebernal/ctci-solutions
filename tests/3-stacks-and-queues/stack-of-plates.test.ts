import { SetOfStacks } from "../../src/3-stacks-and-queues/stack-of-plates";

describe("Stack of plates tests", () => {
  it("Pushes and pops stack as if it were a normal stack", () => {
    const stackSet = new SetOfStacks(3);
    stackSet.push(1);
    stackSet.push(2);
    stackSet.push(3);
    stackSet.push(4);
    expect(stackSet.peek()).toBe(4);
    expect(stackSet.pop()).toBe(4);
    expect(stackSet.peek()).toBe(3);
  });

  it("Pops at specific index and rolls over", () => {
    const stackSet = new SetOfStacks(2);
    stackSet.push(1);
    stackSet.push(2);
    stackSet.push(3);
    stackSet.push(4);
    stackSet.push(5);
    expect(stackSet.peek()).toBe(5);
    expect(stackSet.popAt(1)).toBe(4);
    expect(stackSet.popAt(1)).toBe(5);
    expect(stackSet.popAt(0)).toBe(2);
  });
});
