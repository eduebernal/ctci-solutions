export const isPalindromePermutation = (input: string): boolean => {
  const charCount = new Map();
  const formattedInput = input.toLowerCase().replace(/ /g, "").split("");
  if (input === "") return false;

  //Count the characters
  formattedInput.forEach((char) => {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  });

  let hasCenter = false;
  for (let value of charCount.values()) {
    if (value % 2 !== 0) {
      if (hasCenter) {
        return false;
      }
      hasCenter = true;
    }
  }
  return true;
};
