function printStars(space, star) {
  str = "";
  for (let i = 0; i < space; i++) {
    str += " ";
  }
  for (let i = 0; i < star; i++) {
    str += "*";
  }
  console.log(str);
}
function inversePyramids(k) {
  var space = 0;
  var star = 2 * k - 1;
  for (i = 0; i < k; i++) {
    printStars(space, star);
    space += 1;
    star -= 2;
  }
}

inversePyramids(6);
console.log("888888");
inversePyramids(4);
console.log("uiiiiiiii");
inversePyramids(10);
