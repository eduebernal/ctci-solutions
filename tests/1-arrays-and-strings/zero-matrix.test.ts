import {
  zeroMatrix,
  zeroMatrixOptimized,
} from "../../src/1-arrays-and-strings/zero-matrix";

describe("Zero matrix tests", () => {
  const emptyCase = [];
  const emptyCaseTwo = [[]];
  const unitCase = [[1]];
  it("Should handle special cases", () => {
    [emptyCase, emptyCaseTwo, unitCase].forEach((matrix) => {
      expect(zeroMatrix(matrix)).toEqual(matrix);
    });
  });

  it.each([zeroMatrix, zeroMatrixOptimized])(
    "Should return zero matrix",
    (implementation) => {
      const matrix = [
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 0],
      ];
      const expectedMatrix = [
        [0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      expect(implementation(matrix)).toEqual(expectedMatrix);
    }
  );
});
