function shuffle(arr) {
  let currentIndex = arr.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    var temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  console.log(arr);
  return arr;
}
shuffle([2, 11, 37, 42]);
