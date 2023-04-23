function fsequence(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return fsequence(n - 1) + fsequence(n - 2);
}

console.log(fsequence(9));
console.log(fsequence(10));
console.log(fsequence(11));
console.log(fsequence(12));
