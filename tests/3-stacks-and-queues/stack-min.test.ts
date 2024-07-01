import { StackMin } from "../../src/3-stacks-and-queues/stack-min";

describe("Stack min tests", () => {
  it("Should return the min value", () => {
    const minStack = new StackMin();
    minStack.push(1);
    minStack.push(2);
    minStack.push(3);
    expect(minStack.min()).toBe(1);
    minStack.push(0);
    minStack.push(-1);
    minStack.push(-2);
    expect(minStack.min()).toBe(-2);
    minStack.pop();
    minStack.pop();
    minStack.pop();
    expect(minStack.min()).toBe(1);
  });
});
