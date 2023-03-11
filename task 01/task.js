function blackAndWhite(arr) {
  if (Array.isArray(arr) === false) {
    return "It's a fake array";
  } else if (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0) {
    return "It's a black array";
  } else if (arr.indexOf(5) === -1 || arr.indexOf(13) === -1) {
    return "It's a white array";
  } else if (arr.includes(undefined) == 'undefined') {
    return 'undefined';
  } 
};

console.log(blackAndWhite(5, 13)); //It's a fake array
console.log(blackAndWhite([5, 13])); //It's a black array
console.log(blackAndWhite([5, 12])); //It's a white array