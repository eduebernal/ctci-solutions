import {
  swapNumbers,
  swapNumbersGeneric,
} from "../../src/16-moderate/number-swapper";

describe("Number swapper tests", () => {
  it.each([swapNumbers, swapNumbersGeneric])(
    "should swap two numbers",
    (implementation) => {
      expect(implementation([3, 5])).toEqual([5, 3]);
      expect(implementation([0, 1])).toEqual([1, 0]);
      expect(implementation([-4, 8])).toEqual([8, -4]);
      expect(implementation([-44, -21])).toEqual([-21, -44]);
    }
  );
});
