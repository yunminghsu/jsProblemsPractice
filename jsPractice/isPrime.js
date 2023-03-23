function isPrime(number) {
  testAnswer = false;
  if (number == 1) {
    testAnswer = false;
  } else if (number == 2) {
    testAnswer = true;
  } else {
    for (i = 2; i < number; i++) {
      if (number % i == 0) {
        testAnswer = false;
        console.log("我不是質數");
        return;
      } else if (number % i != 0) {
        testAnswer = true;
      }
    }
  }
  if (testAnswer == true) {
    console.log("我是質數");
  } else {
    console.log("我不是質數");
  }
}

isPrime(1999999);
console.log("****");
isPrime(1);
console.log("****");
isPrime(1000000);
console.log("****");
isPrime(91);
console.log("****");
isPrime(5);
console.log("****");
isPrime(2);
console.log("****");
isPrime(3);
console.log("****");
isPrime(1157);
console.log("****");
isPrime(89);
console.log("****");
isPrime(1657);
