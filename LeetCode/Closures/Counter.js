const createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter=createCounter(10);
console.log(counter()) //10
console.log(counter()) //11
console.log(counter()) //12

/////////////
var createCounter2 = function() {
    let count =0;
    return function() {
        count ++;
        return count;
    };
};

const counter1=createCounter2();
const counter2=createCounter2();
console.log(counter1()) //1
console.log(counter1()) //2
console.log(counter2()) //1
console.log(counter1()) //3