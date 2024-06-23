//Naive solution: O(n!): generate all permutations of string b and check for string b

//O(n) solution:
export const isPermutation = (stringA: string, stringB: string): boolean => {
  if (stringA === stringB) return false;
  if (stringA.length !== stringB.length) return false;
  if (stringA === "" || stringB === "") return false;

  //ASCII, should change size with different encodings
  const charCountA: number[] = new Array(128).fill(0);
  const charCountB = [...charCountA];

  for (let i = 0; i < stringA.length; i++) {
    charCountA[stringA.charCodeAt(i)] += 1;
    charCountB[stringB.charCodeAt(i)] += 1;
  }

  return charCountA.toString() === charCountB.toString();
};

//O(n * log n) solution:
export const isPermutationBySort = (
  stringA: string,
  stringB: string
): boolean => {
  if (stringA === stringB) return false;
  if (stringA.length !== stringB.length) return false;
  if (stringA === "" || stringB === "") return false;

  const sortedA = stringA.split("").sort().join();
  const sortedB = stringB.split("").sort().join();

  return sortedA === sortedB;
};

//Notes: should ask about whitespace and case sensitivity
