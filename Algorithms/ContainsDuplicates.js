function containsDuplicate(nums) {
  nums.sort((a, b) => a - b); 
  
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) {
          return true;
      }
  }
  
  return false;
};

let nums=[1,2,2,4,5]
console.log(containsDuplicate(nums));