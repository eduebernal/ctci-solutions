import { partitionAroundValue } from "../../src/2-linked-lists/partition";
import { SinglyLinkedList } from "../../src/2-linked-lists/utils";

describe("Partition test", () => {
  const array = [5, 3, 4, 1, 6, 9, 7, 10];
  const list1 = SinglyLinkedList.fromArray(array);
  const list2 = SinglyLinkedList.fromArray(array);
  const list3 = SinglyLinkedList.fromArray(array);
  const checkResult = (arr: number[], partitionValue: number) => {
    let foundPartition = false;
    arr.forEach((val) => {
      if (val < partitionValue && foundPartition) {
        throw new Error("Bad partition");
      }
      if (val && !foundPartition && val >= partitionValue) {
        foundPartition = true;
      }
    });
  };
  it("should partition list correctly", () => {
    const result1 = partitionAroundValue(list1, 3).toArray() as number[];
    const result2 = partitionAroundValue(list2, 6).toArray() as number[];
    const result3 = partitionAroundValue(list3, 9).toArray() as number[];

    expect(() => checkResult(result1, 3)).not.toThrow();
    expect(() => checkResult(result2, 6)).not.toThrow();
    expect(() => checkResult(result3, 9)).not.toThrow();
  });
});
