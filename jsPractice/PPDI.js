function PPDI() {
  for (i = 100; i <= 999; i++) {
    var Hundreds = Math.floor(i / 100) % 10;
    var unit = i % 10;
    var Tens = Math.floor(i / 10) % 10;
    var allCal = Math.pow(Hundreds, 3) + Math.pow(Tens, 3) + Math.pow(unit, 3);
    if (allCal == i) {
      console.log(i);
    }
  }
}
PPDI();
