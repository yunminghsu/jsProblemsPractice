function distance(h, n) {
  var allDisrance = h;
  for (i = 2; i <= n; i++) {
    allDisrance += h;
    h /= 2;
  }

  console.log(allDisrance + " 公尺");
}

distance(200, 3);
distance(200, 2);
distance(200, 1);
distance(100, 4);
distance(500, 7);
distance(500, 1);
