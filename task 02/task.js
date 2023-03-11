function arrayPlusArray(arr1, arr2) {
  
  let sumOfArrays = 0;
  let sumArr1 = 0;
  let sumArr2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    sumArr1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sumArr2 += arr2[i];
  }

  return sumOfArrays = sumArr1 + sumArr2;
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); //21