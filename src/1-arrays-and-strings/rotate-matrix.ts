//naive solution time complexity O(n^2) space O(N)
export const rotateMatrix = (matrix: number[][]): number[][] => {
  if (matrix.length == 0) return [];
  if (matrix.length != matrix[0].length) return [];
  const n = matrix.length;
  if (n === 1) return matrix;
  const newMatrix = new Array(n).fill(null).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newMatrix[i][j] = matrix[n - 1 - j][i];
    }
  }
  return newMatrix;
};

//Space-optimized solution
export const rotateMatrixInLayers = (matrix: number[][]): number[][] => {
  if (matrix.length == 0) return [];
  if (matrix.length != matrix[0].length) return [];
  const n = matrix.length;
  if (n > 1) {
    for (let layer = 0; layer < n / 2; layer++) {
      const first = layer;
      const last = n - 1 - layer;
      for (let i = first; i < last; i++) {
        const offset = i - first;
        const top = matrix[first][i];
        matrix[first][i] = matrix[last - offset][first];
        matrix[last - offset][first] = matrix[last][last - offset];
        matrix[last][last - offset] = matrix[i][last];
        matrix[i][last] = top;
      }
    }
  }
  return matrix;
};
