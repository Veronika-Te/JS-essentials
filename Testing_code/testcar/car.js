// car.js
const car = {
  start() {
    console.log("Car started");
  },
  drive() {
    this.start();
    console.log("Car is driving");
  }
};

module.exports = car;
