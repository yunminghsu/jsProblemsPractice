let perfect = 0;

console.log("Number of Perfect is" + perfect);

function NQueens(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = null;
    }
  }
  let i = 0;
  let j = 0;
  let loop = true;
  while (loop) {
    console.log(i, j);

    arr[i][j] = "Q";
    //check if Q can stay there
    let violation = false;
    let k = 0;
    while (k < j) {
      if (arr[k][j] == "Q") {
        violation = true;
      }
      k++;
    }
    k = 0;
    while (k < n) {
      if (arr[i][k] == "Q") {
        violation = true;
      }
      k++;
    }
    k = 1;
    let l = -1;
    while (i + k < n && j + l >= 0) {
      if (arr[i + k][j + l] == "Q") {
        violation = true;
      }
      k++;
      l--;
    }
    k = -1;
    while (i + k >= 0 && j + k >= 0) {
      if (arr[i + k][j + k] == "Q") {
        violation = true;
      }
      k--;
    }
    if (!violation) {
      console.log("OK");
      console.log(arr);
      if (j == n - 1) {
        perfect++;
        console.log("perfect");
        console.log(arr);
        arr[i][j] = null;
        i++;
      } else {
        i = 0;
        j++;
      }
    }
    if (violation) {
      console.log("not OK");
      console.log(arr);
      arr[i][j] = null;
      i++;
    }
    function check() {}
    while (i >= n) {}
  }
}
