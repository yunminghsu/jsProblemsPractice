var scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 94, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 96, 31, 57, 52, 44, 18, 94, 53, 55, 96, 51, 44,
];

var score2 = [
  60, 10, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 94, 55, 51, 52, 44, 51, 69,
  64, 96, 55, 98, 61, 96, 31, 57, 52,
];
function getBestResults(scores, highScore) {
  var bestSolutions = [];
  for (i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}
function printAndGetHighScore(scores) {
  var highScore = 0;
  var output;
  for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score:" + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

var highScore1 = printAndGetHighScore(scores);
var bestSolutions1 = getBestResults(scores, highScore1);
console.log("Bubble tests:" + scores.length);
console.log("High Bubble Score:" + highScore1);
console.log("The Higher Solutions= " + bestSolutions1);
console.log("----------------------------");
var highScore2 = printAndGetHighScore(score2);
var bestSolutions2 = getBestResults(score2, highScore2);
console.log("Bubble tests:" + score2.length);
console.log("High Bubble Score:" + highScore2);
console.log("The Higher Solutions= " + bestSolutions2);
