function mySort(arr) {
  var workingIndex = arr.length - 1;
  while (workingIndex >= 0) {
    //找到找到 index 0 ~ workingIndex 中最大的值
    var biggest = arr[0];
    var biggestIndex = 0;
    for (i = 1; i <= workingIndex; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
        biggestIndex = i;
      }
    }

    //讓biggest與arr[workingIndex]互換
    var temp = arr[biggestIndex];
    arr[biggestIndex] = arr[workingIndex];
    arr[workingIndex] = temp;

    workingIndex--;
  }
  console.log(arr);
}

mySort([-1, -9, 3, 7, -2, 8]);
