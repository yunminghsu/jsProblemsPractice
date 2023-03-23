function findSmallCount(array, numberx) {
  var cal = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < numberx) {
      cal++;
    }
  }
  console.log(cal);
}
findSmallCount([1, 2, 3, 4, 5, 6, 7], 5);
findSmallCount([22, 5, 7, 5, 9, 1, 3], 8);
