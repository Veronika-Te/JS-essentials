class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    if (typeof name !== "string") throw new TypeError("Name must be a string");
    if (typeof age !== "number") throw new TypeError("Age must be a number");
    if (typeof energy !== "number" || energy < 0) throw new TypeError("Energy must be a positive number");

    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
    console.log(`Energy after sleep: ${this.energy}`);
    return this.energy;
  }

  doSomethingFun() {
    this.energy -= 10;
    console.log(`Energy after doing something fun: ${this.energy}`);
    return this.energy;
  }

  toString() {
    return `Person, name: ${this.name}, age: ${this.age}, energy: ${this.energy}`;
  }
}

class Worker extends Person {
  #xp;

  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    if (typeof hourlyWage !== "number") throw new TypeError("Hourly wage must be a number");
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  get xp() {
    return this.#xp;
  }

  set xp(value) {
    if (typeof value !== "number" || value < 0) {
      throw new TypeError("XP must be a non-negative number");
    }
    this.#xp = value;
  }

  goToWork() {
    this.xp += 10;
    console.log(`Experience after work: ${this.xp}`);
    return this.xp;
  }
}

function intern() {
  const intern = new Worker("Bob", 21, 110, 0, 10);
  intern.goToWork();
  console.log(intern.toString());
  return intern;
}

function manager() {
  const manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  console.log(manager.toString());
  return manager;
}

intern();
manager();
