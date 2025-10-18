const car = require("./car");

test("drive calls start", () => {
  const spy = jest.spyOn(car, "start");
  car.drive();
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});
