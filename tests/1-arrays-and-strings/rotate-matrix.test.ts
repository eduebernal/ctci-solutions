import {
  rotateMatrix,
  rotateMatrixInLayers,
} from "../../src/1-arrays-and-strings/rotate-matrix";

describe("rotate Matrix test", () => {
  const caseOne = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const caseOneResult = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];

  const caseTwo = [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5],
  ];

  const caseTwoResult = [
    [5, 4, 3, 2, 1],
    [5, 4, 3, 2, 1],
    [5, 4, 3, 2, 1],
    [5, 4, 3, 2, 1],
    [5, 4, 3, 2, 1],
  ];

  const caseThree = [
    [1, 2, 3],
    [1, 2, 3],
  ];

  it.each([rotateMatrix, rotateMatrixInLayers])(
    "should rotate matrix 90 degrees clockwise",
    (rotate) => {
      expect(rotate(caseOne)).toEqual(caseOneResult);
      expect(rotate(caseTwo)).toEqual(caseTwoResult);
      expect(rotate(caseThree)).toEqual([]);
      expect(rotate([])).toEqual([]);
      expect(rotate([[1]])).toEqual([[1]]);
    }
  );
});
