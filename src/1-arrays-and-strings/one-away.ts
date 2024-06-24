//O(n) solution
export const isOneAway = (a: string, b: string) => {
  // edge cases
  if (a == b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  if (a.length <= 1 || b.length <= 1) return true;

  let foundDiff = false;
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        if (foundDiff) {
          return false;
        }
        foundDiff = true;
      }
    }
    return true;
  }
  const [longerString, shorterString] = a.length > b.length ? [a, b] : [b, a];
  let shiftIndex = 0;
  for (let i = 0; i < shorterString.length; i++) {
    if (shorterString[i] !== longerString[i + shiftIndex]) {
      if (shiftIndex > 0) {
        return false;
      }
      shiftIndex++;
      i--; //repeat comparison with shifted index
    }
  }
  return true;
};
