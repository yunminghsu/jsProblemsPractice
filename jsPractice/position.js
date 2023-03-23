function position(str) {
  if (str == str.toLowerCase()) {
    console.log(-1);
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i].toUpperCase()) {
        return console.log(i, str[i]);
      }
    }
  }
}
position("hellogigsgildD");
