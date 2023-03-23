function stars2(num) {
  var starN = "";
  for (i = 1; i <= num; i++) {
    starN += "*";
    console.log(starN);
  }
  for (j = 0; j < num; j++) {
    console.log(starN.slice(j));
  }
}
stars2(5);
console.log(";;;;;;;;");
stars2(9);
