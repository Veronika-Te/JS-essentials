function findMaxMin(myArray){
  let maximum = myArray[0];
  let minimum = myArray[0];
  
  for(let num of myArray){
    if(num < minimum){
      minimum = num;
    }
    if(num > maximum){
      maximum = num;
    }
  }
  return[maximum, minimum];
}

let arrPos = [1, 2, 3, 4, 5];
let arrPos2 = [1, 2, 3, 4, 5, 7, 8];
let resultPos = findMaxMin(arrPos2);
console.log("Max and Min:", resultPos);