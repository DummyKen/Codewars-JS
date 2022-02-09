// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  let sum = 0;
  let len = array.length;
  if(len == 0){
    return 0;
    
  }else{
  for(let i=0;i<array.length;i++){
    sum = sum + array[i];
  }
  return sum/array.length;
  }
}
