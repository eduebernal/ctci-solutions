import { Stack } from "../../src/3-stacks-and-queues/sort-stacks";

describe("Sort stack tests", () => {
  it("Should sort a stack", () => {
    const stack = new Stack<number>();
    stack.push(4);
    stack.push(10);
    stack.push(1);
    stack.push(7);
    stack.push(3);
    stack.push(8);
    stack.sort();
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(7);
    expect(stack.pop()).toBe(8);
    expect(stack.pop()).toBe(10);
  });
});
