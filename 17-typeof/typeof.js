document.getElementById("demo").innerHTML =
  typeof "john" + // string
  "<br>" +
  typeof 3.14 + // number
  "<br>" +
  typeof NaN + // number
  "<br>" +
  typeof false + // boolean
  "<br>" +
  typeof [1, 2, 3, 4] + // object
  "<br>" +
  typeof { name: "john", age: 34 } + // object
  "<br>" +
  typeof new Date() + // object
  "<br>" +
  typeof function () {} + // function
  "<br>" +
  typeof myCar + // undefined
  "<br>" +
  typeof null; // object

document.getElementById("demo1").innerHTML =
  "john".constructor + // function String() { [native code] }
  "<br>" +
  (3.14).constructor + // function Number() { [native code] }
  "<br>" +
  false.constructor + // function Boolean() { [native code] }
  "<br>" +
  [1, 2, 3, 4].constructor + // function Array() { [native code] }
  "<br>" +
  { name: "john", age: 34 }.constructor + // function Object() { [native code] }
  "<br>" +
  new Date().constructor + // function Date() { [native code] }
  "<br>" +
  function () {}.constructor; // function Function() { [native code] }

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null; // Objects can be emptied by settings the value to null
console.log(typeof person); // object

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = undefined; // Objects can be emptied by settings the value to undefined
console.log(typeof person); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false
// Undefined and null are equal in value but different in type.

/************************************************** */
// TYPE CONVERSİON

/*
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans
*/

// number --> string   --> String(number)
var x = 123;
console.log(typeof String(x));

// date --> number   --> Number(new Date())

// date --> string   --> String(Date())

// boolean --> number    -->
console.log(Number(false)); // 0
console.log(Number(true)); // 1
