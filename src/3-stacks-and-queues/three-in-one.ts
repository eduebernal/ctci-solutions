export class ThreeStack<T> {
  data: T[] = [];
  tops: number[];

  constructor(stackSize: number) {
    this.data = new Array(stackSize * 3);
    this.tops = [0, this.data.length / 3, (this.data.length * 2) / 3];
  }
  public pushTo = (stackIndex: ThreeStackIndex, item: T) => {
    const currentTop = this.tops[stackIndex - 1];
    if (currentTop >= (this.data.length * stackIndex) / 3) {
      throw new Error(`Stack ${stackIndex} is full!`);
    }
    this.data[currentTop] = item;
    this.tops[stackIndex - 1]++;
  };
  public popAt = (stackIndex: ThreeStackIndex) => {
    const currentTop = this.tops[stackIndex - 1];
    const value = this.data[currentTop - 1];
    this.data[currentTop - 1] = null;
    this.tops[stackIndex - 1]--;
    return value;
  };
  public peekAt = (stackIndex: ThreeStackIndex) => {
    const currentTop = this.tops[stackIndex - 1];
    const value = this.data[currentTop - 1];
    return value;
  };
  public isEmptyAt = (stackIndex: ThreeStackIndex) => {
    return (
      this.tops[stackIndex - 1] == (this.data.length * (stackIndex - 1)) / 3
    );
  };
}

type ThreeStackIndex = 1 | 2 | 3;
