var text = "";
var i = 0;
while (i < 10) {
  text += `The number is ${i}<br>`;
  i++;
}
document.getElementById("demo2").innerHTML = text;
/*
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
*/

var text = "";
var i = 0;
do {
  text += `The number is ${i}<br>`;
  i += 1;
} while (i < 10);
document.getElementById("demo3").innerHTML = text;
/*
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
*/

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";
for (; cars[i]; ) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo4").innerHTML = text;
/*
BMW
Volvo
Saab
Ford
*/

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
var i = 0;
while (i < cars.length) {
  text += `${cars[i]}<br>`;
  i++;
}
document.getElementById("demo5").innerHTML = text;

for (var i = 0; i < 10; i++) {
  task(i);
}
function task(i) {
  setTimeout(function () {
    document.getElementById("demo6").innerHTML += i;
    //console.log(i);
  }, 2000 * i);
}

var array = [1, 2, 3, 4, 5, 6];
for (index = 0; index < array.length; index++) {
  document.getElementById("demo7").innerHTML += array[index]; //0123456
}

index = 0;
var array = [1, 2, 3, 4, 5, 6];
while (index < array.length) {
  document.getElementById("demo8").innerHTML += array[index]; //0123456
  index++;
}

// forEach()
array.forEach(myFunc1);
function myFunc1(item) {
  document.getElementById("demo9").innerHTML += item;
  console.log(item); // 1 2 3 4 5 6
}

// every()
var under_five = (x) => x < 5;
if (array.every(under_five)) {
  console.log("All are less than 5");
} else {
  console.log("At least one element is not less than 5"); // 'At least one element is not less than 5'
}

// map()
square = (x) => Math.pow(x, 2);
squares = array.map(square);
console.log(array); // 1 2 3 4 5 6
console.log(squares); // 1 4 9 16 25 36

squaress = array.every(square);
console.log(squaress); // true

squaresss = array.forEach(square);
console.log(squaresss);

// filter
even = (a) => a % 2 == 0;
squaressss = array.filter(even);
console.log(squaressss); // 2 4 6

// reduce
var helperSum = (a, b) => a + b;
sum = array.reduce(helperSum);
console.log(sum); // 21

// some()
var lessThanFourCheck = (element) => element < 4;
var lessThanFour = array.some(lessThanFourCheck);
console.log(lessThanFour); // true --> en az bir eleman 4 den küçükse true döner
