var string = "HELLO";
var testAnswer = false;
function isAllUpperCase() {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      testAnswer = true;
    } else {
      testAnswer = false;
    }
  }
  console.log(testAnswer);
}
isAllUpperCase();
