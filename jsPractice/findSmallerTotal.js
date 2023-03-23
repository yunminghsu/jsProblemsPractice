function findSmallerTotal(array, numbery) {
  var total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < numbery) {
      total += array[i];
    }
  }
  console.log(total);
}
findSmallerTotal([1, 4, 3], 5);
findSmallerTotal([1, 4, 6], 7);
