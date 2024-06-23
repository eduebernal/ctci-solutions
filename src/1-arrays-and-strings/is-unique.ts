//O(n)
export const isUnique = (string: string): boolean => {
  if (string == "") return false;

  const uniqueChars = new Set();

  for (let i = 0; i < string.length; i++) {
    if (uniqueChars.has(string.charAt(i))) return false;
    uniqueChars.add(string.charAt(i));
  }
  return true;
};

//O(n^2)
export const isUniqueNoAdditionalDS = (string: string): boolean => {
  if (string == "") return false;
  for (let i = 0; i <= string.length; i++) {
    for (let j = 0; j <= string.length; j++) {
      if (i !== j && string.charAt(i) === string.charAt(j)) return false;
    }
  }
  return true;
};

//O(n * log n)
export const isUniqueNoAdditionalDSOptimized = (string: string): boolean => {
  if (string == "") return false;
  const sortedCharArray = string.split("").sort();
  for (let i = 0; i < sortedCharArray.length; i++) {
    if (sortedCharArray[i] === sortedCharArray[i + 1]) return false;
  }
  return true;
};
