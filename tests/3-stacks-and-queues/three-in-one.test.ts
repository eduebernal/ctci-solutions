import { ThreeStack } from "../../src/3-stacks-and-queues/three-in-one";

describe("Three in one tests", () => {
  it("Should push elements to the different stacks", () => {
    const threeStack = new ThreeStack(5);
    threeStack.pushTo(1, 4);
    threeStack.pushTo(2, 5);
    threeStack.pushTo(3, 6);
    expect(threeStack.data[0]).toBe(4);
    expect(threeStack.data[5]).toBe(5);
    expect(threeStack.data[10]).toBe(6);
  });
  it("Should throw error if stack is full", () => {
    const threeStack = new ThreeStack(3);
    threeStack.pushTo(1, 1);
    threeStack.pushTo(1, 2);
    threeStack.pushTo(1, 3);
    expect(() => threeStack.pushTo(1, 4)).toThrow();
  });

  it("Should pop elements from the stacks", () => {
    const threeStack = new ThreeStack(3);
    threeStack.pushTo(1, 1);
    threeStack.pushTo(2, 2);
    threeStack.pushTo(3, 3);
    expect(threeStack.popAt(1)).toBe(1);
    expect(threeStack.popAt(2)).toBe(2);
    expect(threeStack.popAt(3)).toBe(3);
    expect(threeStack.data[0]).toBeNull();
    expect(threeStack.data[3]).toBeNull();
    expect(threeStack.data[6]).toBeNull();
  });
  it("Should peek elements from the stacks", () => {
    const threeStack = new ThreeStack(3);
    threeStack.pushTo(1, 1);
    threeStack.pushTo(2, 2);
    threeStack.pushTo(3, 3);
    expect(threeStack.peekAt(1)).toBe(1);
    expect(threeStack.peekAt(2)).toBe(2);
    expect(threeStack.peekAt(3)).toBe(3);
  });

  it("Should return if stack is empty or not", () => {
    const threeStack = new ThreeStack(5);
    expect(threeStack.isEmptyAt(1)).toBeTruthy();
    expect(threeStack.isEmptyAt(2)).toBeTruthy();
    expect(threeStack.isEmptyAt(3)).toBeTruthy();
    threeStack.pushTo(1, 4);
    threeStack.pushTo(2, 5);
    threeStack.pushTo(3, 6);
    expect(threeStack.isEmptyAt(1)).toBeFalsy();
    expect(threeStack.isEmptyAt(2)).toBeFalsy();
    expect(threeStack.isEmptyAt(3)).toBeFalsy();
  });
});
