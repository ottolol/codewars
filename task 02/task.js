function arrayPlusArray(arr1, arr2) {
  
  let arr = arr1.concat(arr2);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); //21