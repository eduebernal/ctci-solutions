//O(n^2) solution
export const zeroMatrix = (matrix: number[][]): number[][] => {
  if (matrix.length == 0 || (matrix.length === 1 && matrix[0].length <= 1)) {
    return matrix;
  }

  const zeroRows = new Set();
  const zeroColumns = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroColumns.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    zeroRows.has(i) && nullifyRow(matrix, i);
  }
  for (let j = 0; j < matrix[0].length; j++) {
    zeroColumns.has(j) && nullifyColumn(matrix, j);
  }

  return matrix;
};

//Optimized to use O(1) memory
export const zeroMatrixOptimized = (matrix: number[][]): number[][] => {
  if (matrix.length == 0 || (matrix.length === 1 && matrix[0].length <= 1)) {
    return matrix;
  }

  const [firstRowHasZero, firstColumnHasZero] = checkForZeroes(matrix);

  for (let i = 1; i < matrix.length; i++) {
    matrix[i][0] == 0 && nullifyRow(matrix, i);
  }
  for (let j = 1; j < matrix[0].length; j++) {
    matrix[0][j] == 0 && nullifyColumn(matrix, j);
  }

  firstColumnHasZero && nullifyColumn(matrix, 0);
  firstRowHasZero && nullifyRow(matrix, 0);

  return matrix;
};

//Utils
const nullifyColumn = (matrix: number[][], index: number) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][index] = 0;
  }
};

const nullifyRow = (matrix: number[][], index: number) => {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[index][j] = 0;
  }
};

const checkForZeroes = (
  matrix: number[][]
): [firstRowHasZero: boolean, firstColumnHasZero: boolean] => {
  let firstRowHasZero = false;
  let firstColumnHasZero = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (i == 0) {
          firstRowHasZero = true;
        }
        if (j == 0) {
          firstColumnHasZero = true;
        }

        if (i && j) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  }
  return [firstRowHasZero, firstColumnHasZero];
};
