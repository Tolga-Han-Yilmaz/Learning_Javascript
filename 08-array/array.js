// concat()  --> array1.concat(array2, array3, ..., arrayX)
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin"];
var children = arr1.concat(arr2, arr3);
document.getElementById("demo1").innerHTML = children; // Cecilie,Lone,Emil,Tobias,Linus,Robin

// constructor  --> array.constructor
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text = fruits.constructor;
document.getElementById("demo2").innerHTML = text; // function Array() { [native code] }

// entries()  --> array.entries()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();
for (let x of f) {
  document.getElementById("demo3").innerHTML += x + "<br>";
}
/* 
0,Banana
1,Orange
2,Apple
3,Mango
*/

// very()  --> array.every(function(currentValue, index, arr), thisValue)
/*
Parameter	Description
function()	Required. A function to be run for each element in the array.
currentValue	Required. The value of the current element.
index	Optional. The index of the current element.
arr	Optional. The array of the current element.
thisValue	Optional. Default undefined. A value passed to the function as its this value.
*/
var ages = [32, 33, 16, 40];
document.getElementById("demo4").innerHTML = ages.every(checkAge);
function checkAge(age) {
  return age > 18;
} // false

// fill()  --> array.fill(value, start, end)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo5").innerHTML = fruits.fill("Kiwi"); // Kiwi,Kiwi,Kiwi,Kiwi
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo6").innerHTML = fruits.fill("Kiwi", 2, 4); // Banana,Orange,Kiwi,Kiwi

// filter()  --> array.filter(function(currentValue, index, arr), thisValue)
/*
Parameter	Description
function()	Required.A function to run for each array element.
currentValue	Required.The value of the current element.
index	Optional.The index of the current element.
arr	Optional.The array of the current element.
thisValue	Optional. Default undefined.A value passed to the function as its this value.
*/
var ages = [32, 33, 16, 40];
document.getElementById("demo7").innerHTML = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
} // 32,33,40

var agess = [32, 33, 12, 40];
function checkAgee(age) {
  return age > document.getElementById("ageToCheck").value;
}
function myFunction1() {
  document.getElementById("demo8").innerHTML = agess.filter(checkAgee);
}

// JavaScript to illustrate findIndex() method
function canVote(age) {
  return age >= 18;
}

function func() {
  var filtered = [24, 33, 16, 40].filter(canVote);
  console.log(filtered); // (3) [24, 33, 40]
}
func();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numbers.filter((number) => number > 5);
console.log(result); // [ 6, 7, 8, 9, 10 ]

var words = [
  "hi",
  "hello",
  "hey",
  "apple",
  "watermelon",
  "lemon",
  "javascript",
];
var result = words.filter((word) => word.length > 5);
console.log(result); // ['watermelon', 'javascript']

var jsonarr = [
  {
    id: 1,
    name: "joe",
  },
  {
    id: -19,
    name: "john",
  },
  {
    id: 20,
    name: "james",
  },
  {
    id: 25,
    name: "jack",
  },
  {
    id: -10,
    name: "joseph",
  },
  {
    id: "not a number",
    name: "jimmy",
  },
  {
    id: null,
    name: "jeff",
  },
];
var result = jsonarr.filter((user) => user.id > 0);
console.log(result);
/*
[{"id":1,"name":"joe"},{"id":20,"name":"james"},
{"id":25,"name":"jack"}]
*/

// find()  --> array.find(function(currentValue, index, arr),thisValue)  --> ilk elemanı döner
var ages = [3, 10, 18, 20, 22];
document.getElementById("demo9").innerHTML = ages.find(checkAge);
function checkAge(age) {
  return age > 18;
} // 20

// findIndex()  --> array.findIndex(function(currentValue, index, arr), thisValue)
var ages = [3, 10, 18, 20];
document.getElementById("demo10").innerHTML = ages.findIndex(checkAge);
function checkAge(age) {
  return age > 18;
} // 3

// forEach()  --> array.forEach(function(currentValue, index, arr), thisValue)
var text = "";
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction2);
document.getElementById("demo11").innerHTML = text;
function myFunction2(item, index) {
  text += index + ": " + item + "<br>";
}
/*
0: apple
1: orange
2: cherry
*/
var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction3);
document.getElementById("demo12").innerHTML = sum;
function myFunction3(item) {
  sum += item;
} //125

var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction4);
document.getElementById("demo13").innerHTML = numbers;
function myFunction4(item, index, arr) {
  arr[index] = item * 10;
} // 650,440,120,40

// from()  --> Array.from(object, mapFunction, thisValue)
var text = "ABCDEFG";
var myArr = Array.from(text);
document.getElementById("demo14").innerHTML = myArr; // A,B,C,D,E,F,G

// includes()  --> array.includes(element, start)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo15").innerHTML = fruits.includes("Mango"); // true
document.getElementById("demo16").innerHTML = fruits.includes("Banana", 2); // false

// indexOf()  --> array.indexOf(item, start)
var index = fruits.indexOf("Apple");
document.getElementById("demo17").innerHTML = index; // 2
var index = fruits.indexOf("Apple", 3);
document.getElementById("demo18").innerHTML = index; // -1

// isArray()  --> Array.isArray(obj)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var result = Array.isArray(fruits);
document.getElementById("demo19").innerHTML = result; // true
var text = "W3Schools";
var result = Array.isArray(text);
document.getElementById("demo20").innerHTML = result; // false

// join()  --> array.join(separator)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text = fruits.join();
document.getElementById("demo21").innerHTML = text; // Banana,Orange,Apple,Mango
var text = fruits.join(" and ");
document.getElementById("demo22").innerHTML = text; // Banana and Orange and Apple and Mango

// keys()  --> array.keys()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var keys = fruits.keys();
var text = "";
for (var x of keys) {
  text += x + "<br>";
}
document.getElementById("demo23").innerHTML = text;
/*
0
1
2
3
*/

// length  --> array.length
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var length = fruits.length;
document.getElementById("demo24").innerHTML = length;
4;
fruits.length = 2;
document.getElementById("demo25").innerHTML = fruits; // Banana,Orange

// map()  --> array.map(function(currentValue, index, arr), thisValue)
var numbers = [4, 9, 16, 25];
document.getElementById("demo26").innerHTML = numbers.map(Math.sqrt); // 2,3,4,5

var numbers = [65, 44, 12, 4];
var newArr = numbers.map(myFunction5);
document.getElementById("demo27").innerHTML = newArr;
function myFunction5(num) {
  return num * 10;
} // 650,440,120,40

var persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];
document.getElementById("demo28").innerHTML = persons.map(getFullName); // getFullName yerine function getFullName i de yazabilirz
function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
} // Malcom Reynolds,Kaylee Frye,Jayne Cobb

// JavaScript to illustrate map() method
function func() {
  // Original array
  var arr = [14, 10, 11, 00];
  // new mapped array
  var new_arr = arr.map(Math.sqrt);
  document.write(new_arr);
}
func(); // 3.7416573867739413,3.1622776601683795,3.3166247903554,0

document.write("<br>");

var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function (num) {
  return num / 2;
});
document.write(new_arr); //[1, 28, 39, 17, 32.5]

document.write("<br>");

var arr = [10, 64, 121, 23];
var new_arr = arr.map(Math.sqrt);
document.write(new_arr); // 3.1622776601683795,8,11,4.795831523312719

document.write("<br>");

function func() {
  // Original array
  var arr = [2, 56, 78, 34, 65];
  // new mapped array
  var new_arr = arr.map(function (num) {
    return num / 2;
  });
  document.write(new_arr);
}
func(); // 1, 28, 39, 17, 32.5

function func() {
  // Original array
  var arr = [10, 64, 121, 23];
  // new mapped array
  var new_arr = arr.map(Math.sqrt);
  document.write(new_arr);
}
func(); // 3.1622776601683795, 8, 11, 4.795831523312719

// pop()  --> array.pop()  --> method removes the last element and it changes the array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
document.getElementById("demo29").innerHTML = fruits; // Banana,Orange,Apple
var removed = fruits.pop();
document.getElementById("demo30").innerHTML = removed; // Apple

// prototype  --> Array.prototype.name = value
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", "blue");
const myMother = new Person("Sally", "Rally", "green");
Person.prototype.nationality = "English";
document.getElementById("demo31").innerHTML =
  "My father is " +
  myFather.nationality + // My father is English
  "<br>" +
  "My mother is " + // My mother is English
  myMother.nationality;

// push()  --> array.push(item1, item2, ..., itemX)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple");
document.getElementById("demo32").innerHTML = fruits; // Banana,Orange,Apple,Mango,Kiwi,Lemon,Pineapple

// reduce()  --> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// soldan sağa doğru elemanların ne yapmasını söyle
var numbers = [175, 50, 25];
document.getElementById("demo32").innerHTML = numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num; // 100
}

var numbers = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo33").innerHTML = numbers.reduce(getSum, 0);
function getSum(total, num) {
  return total + Math.round(num); //24
}

var arr = [10, 20, 30, 40, 50, 60];
function sumofArray(sum, num) {
  return sum + num;
}
document.getElementById("demo34").innerHTML = arr.reduce(sumofArray); // 210

// reduceRight()  --> array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
// sağdan sola doğru

// reverse()  --> array.reverse()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo35").innerHTML = fruits.reverse(); // Mango,Apple,Orange,Banana

// shift()  --> array.shift()  --> shift() removes first element and changes array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
document.getElementById("demo36").innerHTML = fruits; // Orange,Apple,Mango
var removed = fruits.shift();
document.getElementById("demo37").innerHTML = removed; // Orange

// slice()  --> array.slice(start, end)
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1);
document.getElementById("demo38").innerHTML = myBest; // Lemon,Apple

// some()  --> array.some(function(value, index, arr), this)
var ages = [3, 10, 18, 20];
document.getElementById("demo39").innerHTML = ages.some(checkAdult); // true
function checkAdult(age) {
  return age > 18;
}

// sort()  --> array.sort(compareFunction)  --> function(a, b){return a-b}
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo40").innerHTML = fruits.sort(); // Apple,Banana,Mango,Orange

// splice()  --> array.splice(index, howmany, item1, ....., itemX) // method adds and/or removes array elements. method overwrites the original array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add 2 elements:
fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo41").innerHTML = fruits; // Banana,Orange,Lemon,Kiwi,Apple,Mango

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// At position 2, remove 2 items:
fruits.splice(2, 2);
document.getElementById("demo42").innerHTML = fruits; // Banana,Orange,Kiwi

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add 1 elements, remove 1:
fruits.splice(2, 1, "Lemon", "Kiwi");
document.getElementById("demo43").innerHTML = fruits; // Banana,Orange,Lemon,Kiwi,Mango

// toString()  --> array.toString()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text = fruits.toString();
document.getElementById("demo44").innerHTML = text; // Banana,Orange,Apple,Mango

// unshift()  --> array.unshift(item1, item2, ..., itemX) --> method adds new elements to the beginning of an array. method overwrites the original array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");
document.getElementById("demo45").innerHTML = fruits; // Lemon,Pineapple,Banana,Orange,Apple,Mango
