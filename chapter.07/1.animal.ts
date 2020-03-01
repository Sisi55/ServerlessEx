class Animal {
  name: string;
  legs: number;

  constructor(name: string, legs: number = 4) {
    this.name = name;
    this.legs = legs;
  }
  
  info(): string {
    return `${this.name} has ${this.legs} legs`;
  }
}

let dog: Animal = new Animal("Happy")
console.log(dog.info()); // Happy has 4 legs