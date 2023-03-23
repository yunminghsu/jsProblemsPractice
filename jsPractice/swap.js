function swap(str) {
  var newStr = "";
  for (i = 0; i <= str.length; i++) {
    if (str.charAt(i) == str.charAt(i).toUpperCase()) {
      newStr += str.charAt(i).toLowerCase();
    } else if (str.charAt(i) == str.charAt(i).toLowerCase()) {
      newStr += str.charAt(i).toUpperCase();
    }
  }
  console.log(newStr);
}

swap("hEllo");
swap("weCan Go");
