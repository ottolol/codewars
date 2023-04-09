function digitalRoot(n) {
  if (n < 10) {
    return n;
  } else {
    let str = n.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str[i] % 10;
    }
    return digitalRoot(sum);
  }
};

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 2