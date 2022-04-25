var func1 = new Function("a", "b", "return a*b");
console.log(func1(5, 7)); // 35

var func2 = function (a, b) {
  return a ** b;
};
console.log(func2(9, 2)); // 81

(function () {
  console.log("hello");
})(); // hello --> burada fonksiyon çağrılmadan otomatik olarak kendisi geliyor.

var x = 1;
function fak(n) {
  for (var i = 1; i <= n; i++) {
    x *= i;
  }
  return x;
}
console.log(fak(5)); // 120

var a = (b, c) => b * c;
console.log(a(7, 8)); // 56

function func3(a, b) {
  if (b === undefined) {
    b = 4;
  }
  return a * b;
}
console.log(func3(6)); // 24

function func4(x, y = 8) {
  return x * y;
}
console.log(func4(5)); // 40

function func5() {
  var max = -Infinity;
  for (var i = 0; i < arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(func5(1, 123, 500, 115, 44, 88)); // 500

function func6() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(func6(1, 123, 500, 115, 44, 88)); // 871

// call()
var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person1 = {
  firstName: "Tolga Han",
  lastName: "Yılmaz",
};
var person2 = {
  firstName: "Derya",
  lastName: "Yılmaz",
};
console.log(person.fullName.call(person1)); // Tolga Han Yılmaz

var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};
var person1 = {
  firstName: "Tolga Han",
  lastName: "Yılmaz",
};
var person2 = {
  firstName: "Derya",
  lastName: "Yılmaz",
};
console.log(person.fullName.call(person2, "Kırşehir", "Türkiye")); // Derya Yılmaz Kırşehir Türkiye

// apply()
var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};
var person1 = {
  firstName: "Tolga Han",
  lastName: "Yılmaz",
};
console.log(person.fullName.apply(person1, ["Los Angeles", "ABD"])); // Tolga Han Yılmaz Los Angeles ABD

// call --> call(person2, "Kırşehir", "Türkiye")
// apply --> apply(person1, ["Los Angeles", "ABD"])) --> aradaki fark

console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max.apply(null, [1, 2, 3])); // 3
console.log(Math.max.apply(Math, [1, 2, 3])); // 3
console.log(Math.max.apply("", [1, 2, 3])); // 3
console.log(Math.max.apply(5, [1, 2, 3])); // 3

// bind()
var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};
var person1 = {
  firstName: "Tolga Han",
  lastName: "Yılmaz",
};
let fullName = person.fullName.bind(person1, "Kırşehir", "Türkiye");
console.log(fullName()); // Tolga Han Yılmaz Kırşehir Türkiye

var person = {
  firstName: "Tolga Han",
  lastName: "Yılmaz",
  disPlay: function () {
    let x = this.firstName + " " + this.lastName;
    console.log(x);
  },
};
person.disPlay(); // Tolga Han Yılmaz
setTimeout(person.disPlay, 3000); // undefined undefined
let disPlay = person.disPlay.bind(person);
setTimeout(disPlay, 3000); // Tolga Han Yılmaz

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log(addSquares(6, 8)); // 100
