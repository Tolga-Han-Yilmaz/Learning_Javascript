// constructor  --> number.constructor
var num = 134.5;
var text = num.constructor;
document.getElementById("demo1").innerHTML = text; // function Number() { [native code] }

// isFinite()  --> Number.isFinite(value)
var result = Number.isFinite(123);
document.getElementById("demo2").innerHTML = result; // true
var result = Number.isFinite("123");
document.getElementById("demo3").innerHTML = result; // false
var result = Number.isFinite(123.1);
document.getElementById("demo4").innerHTML = result; // true

// isInteger()  --> Number.isInteger(value)
var result =
  "Is 0 an integer? " +
  Number.isInteger(0) +
  "<br>" +
  "Is 0/0 an integer? " +
  Number.isInteger(0 / 0) +
  "<br>" +
  "Is 0.5 an integer? " +
  Number.isInteger(0.5) +
  "<br>" +
  "Is false an integer? " +
  Number.isInteger(false) +
  "<br>" +
  "Is Infinity an integer? " +
  Number.isInteger(Infinity) +
  "<br>" +
  "Is -Infinityo an integer? " +
  Number.isInteger(-Infinity) +
  "<br>" +
  "Is NaN an integer? " +
  Number.isInteger(NaN);
document.getElementById("demo5").innerHTML = result;
/*
Is 0 an integer? true
Is 0/0 an integer? false
Is 0.5 an integer? false
Is false an integer? false
Is Infinity an integer? false
Is -Infinityo an integer? false
Is NaN an integer? false
*/

// isNaN()  --> Number.isNaN(value)
// isNaN() method returns true if a value is Not-a-Number.
// Number.isNaN() returns true if a number is Not-a-Number.
var result =
  "Is 123 NaN? " +
  Number.isNaN(123) +
  "<br>" +
  "Is -123 NaN? " +
  Number.isNaN(-1.23) +
  "<br>" +
  "Is '123' NaN? " +
  Number.isNaN("123") +
  "<br>" +
  "Is 0/0 NaN? " +
  Number.isNaN(0 / 0) +
  "Is 5-2 NaN? " +
  Number.isNaN(5 - 2) +
  "<br>" +
  "Is 0 NaN? " +
  Number.isNaN(0) +
  "<br>" +
  "Is 'Hello' NaN? " +
  Number.isNaN("Hello") +
  "<br>" +
  "Is '2005/12/12 NaN? " +
  Number.isNaN("2005/12/12") +
  "<br>" +
  "Is ' ' NaN? " +
  Number.isNaN("") +
  "Is true NaN? " +
  Number.isNaN(true) +
  "<br>" +
  "Is true NaN? " +
  Number.isNaN(false) +
  "<br>" +
  "Is undefined NaN? " +
  Number.isNaN(undefined) +
  "<br>" +
  "Is 'NaN' NaN? " +
  Number.isNaN("NaN") +
  "<br>" +
  "Is NaN NaN? " +
  Number.isNaN(NaN);
document.getElementById("demo6").innerHTML = result;
/*
Is 123 NaN? false
Is -123 NaN? false
Is '123' NaN? false
Is 0/0 NaN? trueIs 5-2 NaN? false
Is 0 NaN? false
Is 'Hello' NaN? false
Is '2005/12/12 NaN? false
Is ' ' NaN? falseIs true NaN? false
Is true NaN? false
Is undefined NaN? false
Is 'NaN' NaN? false
Is NaN NaN? true
*/

// prototype  --> Number.prototype.name = value
function Person1(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eye;
}
const myFather = new Person1("John", "Doe", "blue");
const myMother = new Person1("Sally", "Rally", "green");
Person1.prototype.nationality = "English";
document.getElementById("demo7").innerHTML =
  "My father is " +
  myFather.nationality + // My father is English
  "<br>" +
  "My mother is " +
  myMother.nationality; // My mother is English

// toExponential()  --> number.toExponential(x)
var num = 5.56789;
var n = num.toExponential();
document.getElementById("demo8").innerHTML = n; // 5.56789e+0
var n = num.toExponential(2);
document.getElementById("demo9").innerHTML = n; // 5.57e+0

// toFixed()  --> number.toFixed(x)
var num = 5.56789;
var n = num.toFixed();
document.getElementById("demo10").innerHTML = n; // 6
var n = num.toFixed(2);
document.getElementById("demo11").innerHTML = n; // 5.57

// toPrecision()  --> number.toPrecision(x)
var num = 13.3714;
document.getElementById("demo12").innerHTML = num.toPrecision(3); //13.4
var num = 0.001658853;
document.getElementById("demo13").innerHTML =
  num.toPrecision(2) + // 0.0017
  "<br>" +
  num.toPrecision(3) + // 0.00166
  "<br>" +
  num.toPrecision(10); // 0.001658853000

// toString()  --> number.toString(radix)
var num = 15;
var text = num.toString();
document.getElementById("demo14").innerHTML = text; // 15
var text = num.toString(2);
document.getElementById("demo15").innerHTML = text; // 1111
