function removeElements(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

let arrPos = [1, 2, 3, 4, 5];
console.log(removeElements(arrPos, 2));
