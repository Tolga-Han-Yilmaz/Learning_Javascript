var text = "";
for (var i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += `The number is ${i} `;
}
console.log(text); // The number is 0 The number is 1 The number is 2

var text = "";
for (var i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += `The number is ${i} `;
}
console.log(text); // The number is 0 The number is 1 The number is 2 The number is 4 The number is 5 The number is 6 The number is 7 The number is 8 The number is 9

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
console.log(text); // BMW Volvo

// forEach()
// angular.forEach([0, 1, 2], function (count) {
//   if (count == 1) {
//     return true;
//   }
//   console.log(count);
// });

/////////////////////////////////////
const person1 = {
  name: "Tolga Han",
  age: 31,
  salary: 3000,
};
const langs = ["python", "java", "css", "php"];
const name = "yılmaz";

// for in
for (let prop in person1) {
  console.log(prop); // name age salary
  console.log(person1[prop]); // Tolga han 31 3000
}
for (let index in langs) {
  console.log(index, langs[index]);
}
/*
0 python
break.js:52 1 java
break.js:52 2 css
break.js:52 3 php
*/

for (let index in name) {
  console.log(index, name[index]);
}
/*
0 y
break.js:62 1 ı
break.js:62 2 l
break.js:62 3 m
break.js:62 4 a
break.js:62 5 z
*/

// for of
// for (let value of person1) {
//   console.log(value); // Uncaught TypeError: person1 is not iterable
// }

for (let value of langs) {
  console.log(value); // python java css php
}

for (let character of name) {
  console.log(character); // y ı l m a z
}
