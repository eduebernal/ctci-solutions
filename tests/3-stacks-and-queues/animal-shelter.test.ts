import {
  AnimalQueue,
  Cat,
  Dog,
} from "../../src/3-stacks-and-queues/animal-shelter";

describe("Animal Shelter tests", () => {
  let animalShelter: AnimalQueue;
  beforeEach(() => {
    animalShelter = new AnimalQueue();
    animalShelter.enqueue(new Dog("Robin"));
    animalShelter.enqueue(new Dog("Timoteo"));
    animalShelter.enqueue(new Dog("Tobias"));
    animalShelter.enqueue(new Cat("Matilda"));
    animalShelter.enqueue(new Cat("Bonnie"));
    animalShelter.enqueue(new Cat("Suki"));
  });
  it("Should return oldest animal", () => {
    expect(animalShelter.dequeueAny().getName()).toBe("Robin");
  });

  it("Should return oldest cat", () => {
    expect(animalShelter.dequeueCat().getName()).toBe("Matilda");
  });

  it("Should return oldest dog", () => {
    expect(animalShelter.dequeueDog().getName()).toBe("Robin");
  });
});
