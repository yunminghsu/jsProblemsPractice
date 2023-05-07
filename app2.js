// function fsequence(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   }
//   return fsequence(n - 1) + fsequence(n - 2);
// }

// console.log(fsequence(9));
// console.log(fsequence(10));
// console.log(fsequence(11));
// console.log(fsequence(12));
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + " 說你好");
  };
}
let wilson = new Person("Wilson", 26);
let tommy = new Person("Tommy", 26);
let daniel = new Person("Daniel", 26);
daniel.sayHi();

if (tommy.sayHi == wilson.sayHi) {
  console.log(true);
} else console.log(false);

console.log(typeof tommy.sayHi);
console.log(tommy.sayHi == daniel.sayHi);
