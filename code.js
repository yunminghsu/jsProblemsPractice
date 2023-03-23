var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;
console.log("hello world");
while (isSunk == false) {
  guess = prompt("準備，瞄準，射擊！（請鍵入範圍0~6的數字）：");
  if (guess < 0 || guess > 6) {
    alert("請輸入正確有效的數字！");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("HITS!");
    } else {
      alert("MISS!");
    }
    if (hits == 3) {
      isSunk = true;
      alert("你擊沉了我的戰艦");
      var stats =
        "你猜了" + guesses + "次擊中戰艦，這意味著你的準確率為" + 3 / guesses;
      alert(stats);
    }
  }
}
