//O(n) solution
//Assumptions: string has necessary extra spaces
export const URLify = (input: string, trueLength: number): string => {
  throw new Error()
  //   console.log("Input", input);
  //   console.log("TrueLength", trueLength);
  // Special cases
  if (input === "" || trueLength === 0 || input == null) return "";
  const inputArray = input.split("");
  const whitespace = countCharacters(input, trueLength, " ");

  if (whitespace === 0) return input;

  // Regular case
  const newLength = trueLength + whitespace * 2;
  // Remove extra spaces
  if (newLength < input.length) {
    inputArray.splice(newLength);
  }

  let currentShift = newLength - trueLength;

  for (let i = trueLength - 1; i >= 0; i--) {
    // console.log("current char:", inputArray[i], i);
    if (inputArray[i] === " ") {
      inputArray[i + currentShift] = "0";
      inputArray[i + currentShift - 1] = "2";
      inputArray[i + currentShift - 2] = "%";
      currentShift -= 2;
    } else {
      inputArray[i + currentShift] = inputArray[i];
    }
  }

  return inputArray.join("");
};

//Utils
export const countCharacters = (
  input: string,
  trueLength: number,
  target: string
): number => {
  if (target.length !== 1) {
    throw new Error("target must have length of 1");
  }
  let count = 0;
  for (let i = 0; i < trueLength; i++) {
    if (input.charAt(i) == target) {
      count++;
    }
  }
  return count;
};
