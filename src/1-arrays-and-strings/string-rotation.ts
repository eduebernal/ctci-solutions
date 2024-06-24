export const isStringRotation = (a: string, b: string) => {
  if (a.length == 0 || b.length == 0 || a.length !== b.length) return false;
  return isSubstring(b + b, a);
};

const isSubstring = (a: string, b: string): boolean => {
  return a.search(b) > 0;
};
