import {
  removeDups,
  removeDupsNoBuffer,
} from "../../src/2-linked-lists/remove-dups";
import { SinglyLinkedList } from "../../src/2-linked-lists/utils";

describe("Remove duplicates tests", () => {
  it.each([removeDups, removeDupsNoBuffer])(
    "Should remove duplicates from array",
    (removeDupsImplementation) => {
      const input = [1, 2, 2, 3, 4, 4, 1];
      const expected = [1, 2, 3, 4];
      const result = removeDupsImplementation(
        SinglyLinkedList.fromArray(input)
      );
      expect(result.toArray()).toEqual(expected);
    }
  );
});
