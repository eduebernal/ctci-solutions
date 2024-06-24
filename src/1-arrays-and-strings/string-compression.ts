export const compressString = (input: string) => {
  const compressedString: string[] = [];
  let repeats = 1;
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === input.charAt(i + 1)) {
      repeats++;
    } else {
      compressedString.push(input.charAt(i));
      compressedString.push(repeats.toString());
      repeats = 1;
    }
  }
  const result = compressedString.join("");
  return result.length < input.length ? result : input;
};
