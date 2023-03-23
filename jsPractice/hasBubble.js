var products = ["choo choo chocolate", "icy mint", "cake batter", "bubblegum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;
while (i < products.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
  i++;
}
