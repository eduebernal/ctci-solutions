type NumberPair = [a: number, b: number];
type Pair = [a: any, b: any];

export const swapNumbers = (pair: NumberPair): NumberPair => {
  pair[0] = pair[0] - pair[1];
  pair[1] = pair[0] + pair[1];
  pair[0] = pair[1] - pair[0];
  return pair;
};

export const swapNumbersGeneric = (pair: Pair): Pair => {
  pair[0] = pair[0] ^ pair[1];
  pair[1] = pair[0] ^ pair[1];
  pair[0] = pair[1] ^ pair[0];
  return pair;
};
