const createCounter = function(init) {
  let initial = init
  return {
    increment: () => {
        return ++init;
    },
    decrement: () => {
        return --init;
    },
    reset: () => {
        return init = initial;
    }
  }
} 

const res=createCounter(5).increment();
console.log(res);
const res2=createCounter(6).decrement();
console.log(res2);
const res3=createCounter(3).reset();
console.log(res3);