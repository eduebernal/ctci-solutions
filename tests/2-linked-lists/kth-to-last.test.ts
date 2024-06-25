import { kthToLast } from "../../src/2-linked-lists/kth-to-last";
import { SinglyLinkedList } from "../../src/2-linked-lists/utils";

describe("Kth to last tests", () => {
  it("should return k to last node", () => {
    const list = SinglyLinkedList.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(kthToLast(list, 2)?.value).toBe(9);
    expect(kthToLast(list, 0)?.value).toBe(10);
    expect(kthToLast(list, 1)?.value).toBe(10);
    expect(kthToLast(list, 4)?.value).toBe(7);
    expect(kthToLast(list, 10)?.value).toBe(1);
    expect(kthToLast(list, 11)).toBeNull();
  });
});
