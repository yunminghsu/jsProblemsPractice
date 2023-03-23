function printStars(space, star) {
  var result = "";
  for (let i = 0; i < space; i++) {
    result += " ";
  }
  for (let i = 0; i < star; i++) {
    result += "*";
  }
  console.log(result);
}

function pyramids(k) {
  var star = 1;
  var space = k - 1;
  while (space >= 0) {
    printStars(space, star);
    star += 2;
    space -= 1;
  }
}
pyramids(6);
// pyramids(4);
