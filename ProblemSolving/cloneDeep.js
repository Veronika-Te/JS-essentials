const { cloneDeep } = require("lodash");

const obj = {
  name: "Mary",
  data: { age: 20, hobbies: ["coding", "music"] },
};

const copy = cloneDeep(obj);
copy.data.age = 30;

console.log(obj.data.age);
console.log(copy.data.age); //Deep Copy
