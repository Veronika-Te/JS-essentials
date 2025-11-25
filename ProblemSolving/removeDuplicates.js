function removeDuplicates(arr) {
  const temp=[];
  arr.forEach((item)=>{
  if(!temp.includes(item)){
    temp.push(item);
  }
  });
  return temp;
}

console.log(removeDuplicates([1,2,2,3,4,4,5])); //[ 1, 2, 3, 4, 5 ]