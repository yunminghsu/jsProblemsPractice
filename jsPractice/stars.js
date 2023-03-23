function stars(num) {
  let star = "";
  for (let i = 1; i <= num; i++) {
    star += "*";
    console.log(star);
  }
}
stars(3);
