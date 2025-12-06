function removeDuplicates(nums){
  if(nums.length===0) {return 0};
  let writePointer=1;
  for(let readPointer=1; readPointer <nums.length; readPointer++){
      if(nums[readPointer]!==nums[readPointer-1]){
          nums[writePointer]=nums[readPointer]
          writePointer++
      }
  }
  return writePointer;
}

let withDups = [1, 1, 2, 2, 3];
console.log("Test array with duplicates:");
console.log("Before:", withDups);
let lenWithDups = removeDuplicates(withDups);
console.log("After:", withDups.slice(0, lenWithDups));
console.log("Length:", lenWithDups);
console.log("---------------");