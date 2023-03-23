function factorPrime(n) {
  var answer = n + " = ";
  var p = 2;
  while (p <= n) {
    if (n % p == 0) {
      answer += p + " x ";
      n /= p;
    } else {
      p++;
    }
  }
  var answerAll = "";
  for (i = 0; i < answer.length - 3; i++) {
    answerAll += answer[i];
  }
  console.log(answerAll);
}

factorPrime(120);
factorPrime(180);
factorPrime(4);
factorPrime(8);
factorPrime(5);
factorPrime(91);
factorPrime(57);
factorPrime(62253);
