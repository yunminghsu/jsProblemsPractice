function bake(degrees) {
  var message;
  if (degrees > 500) {
    message = "我不是一個核反應堆";
  } else if (degrees < 100) {
    message = "冰箱";
  } else {
    message = "對我來說，這是一個非常適合的溫度";
  }
  return message;
}
var status = bake(600);

console.log(status);
