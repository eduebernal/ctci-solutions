import { URLify } from "../../src/1-arrays-and-strings/URLify";
describe.each([URLify])("URLify tests", (implementation) => {
  const testCases = {
    example: "Mr John Smith         ",
    emptyString: "",
    nullCase: null,
    noWhitespace: "HelloWorld",
    whiteSpaceAtStart: " Hello World       ",
    finalExample: "http://google.com/something?value=yes and no      ",
  };

  for (let key in testCases) {
    it(`Returns URLified ${key} with implementation: ${implementation.name}`, () => {
      const [URLified, trueLength] = URLifyCheat(testCases[key]);
      const result = implementation(testCases[key], trueLength);
      expect(result).toEqual(URLified);
    });
  }
});

//Utils
const URLifyCheat = (input: string): [URLified: string, trueLength: number] => {
  let URLified = "";
  if (!input) return ["", 0];
  const trimmed = input.trimEnd();
  if (!input || input.length === 0) {
    URLified = "";
  }
  URLified = trimmed.replace(/ /g, "%20");
  const trueLength = trimmed.length;
  return [URLified, trueLength];
};
