// JavaScript Object Properties
var person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue",
};
console.log(`${person.firstname} is ${person["age"]} years old.`); // John is 50 years old.

var txt = "";
for (var x in person) {
  txt += person[x] + " ";
}
console.log(txt); // John Doe 50 blue
console.log(x); // eyecolor

// add
person.nationality = "English";
person.age = 30;
console.log(person); // {firstname: 'John', lastname: 'Doe', age: 30, eyecolor: 'blue', nationality: 'English'}

// delete
delete person.age; // or --> delete person["age"]
console.log(person); // {firstname: 'John', lastname: 'Doe', eyecolor: 'blue', nationality: 'English'}

// nested
var myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
console.log(myObj.cars.car2); // BMW
console.log(myObj.cars["car1"]); // Ford
console.log(myObj["cars"]["car3"]); // Fiat

var x = "";
var myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
for (var i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (var j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}
document.getElementById("a1").innerHTML = x; // Sonucuna kesin bak

// JavaScript Object Methods
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName()); // John Doe

var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
console.log(person.name()); // JOHN DOE

// JavaScript Display Objects
console.log(person); // {firstName: 'John', lastName: 'Doe', id: 5566, name: ƒ}
var x = "";
for (var i in person) {
  x += person[i] + " ";
}
console.log(x);
/*
John Doe 5566 function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
} 
*/

console.log(Object.values(person)); // ['John', 'Doe', 5566, ƒ]
// Display properties in JSON format:
console.log(JSON.stringify(person)); // {"firstName":"John","lastName":"Doe","id":5566}

person.today = new Date();
console.log(JSON.stringify(person.today)); // "2022-04-19T00:04:13.046Z"

console.log(person); // {firstName: 'John', lastName: 'Doe', id: 5566, today: Tue Apr 19 2022 03:05:51 GMT+0300 (GMT+03:00), name: ƒ}

person.name = person.name.toString();
console.log(JSON.stringify(person));
/*
{"firstName":"John","lastName":"Doe","id":5566,"name":"function () {\r\n  return (this.firstName + \" \" + this.lastName).toUpperCase();\r\n}","today":"2022-04-19T00:07:21.782Z"}
*/

var arr = ["John", "Peter", "Sally", "Jane"];
console.log(JSON.stringify(arr)); // ["John","Peter","Sally","Jane"]

// JavaScript Object Accessors

var person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  },
};
console.log(person.lang); // EN

var person = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  set lang(value) {
    this.language = value;
  },
};
person.lang = "english";
console.log(person.language); // english

var person = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  set lang(value) {
    this.language = value.toUpperCase();
  },
};
person.lang = "english";
console.log(person.language); // // ENGLISH

// JavaScript Object Constructors
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.ageOf = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
var myFather = new Person("John", "Doe", 50, "blue");
console.log(
  `My name is ${myFather.firstName}. I am ${myFather.ageOf} years old.`
); // My name is John. I am 50 years old.
console.log(myFather.fullName()); // John Doe
var myMother = new Person("Sally", "Rally", 48, "green");
console.log(
  `My name is ${myMother.fullName()}. I am ${myMother.ageOf} years old.`
); // My name is Sally Rally. I am 48 years old.

myFather.nationality = "English";
console.log(myFather); // ageOf: 50 eyeColor: "blue" firstName: "John" fullName: ƒ () lastName: "Doe" nationality: "English"
console.log(myMother); // Person {firstName: 'Sally', lastName: 'Rally', ageOf: 48, eyeColor: 'green', fullName: ƒ}
myMother.ageEye = function () {
  return (
    "My mother eyes has " +
    this.eyeColor +
    ". She " +
    this.ageOf +
    " years old."
  );
};
console.log(myMother.ageEye()); // My mother eyes has green. She 48 years old.
// Person a ekleme yapılamıyor. constructor function olduğu için.

function Person2(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}
var myFather = new Person2("John", "Doe", 50, "blue");
var myMother = new Person2("Sally", "Rally", 48, "green");
console.log(myFather.nationality); // English
console.log(myMother.nationality); // English

function Person3(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}
var myFather = new Person3("John", "Doe", 50, "blue");
var myMother = new Person3("Sally", "Rally", 48, "green");
myFather.changeName("Sebastian");
console.log(myFather.lastName); // Sebastian

const x1 = new String(); // A new String object --> object
const x2 = new Number(); // A new Number object --> object
const x3 = new Boolean(); // A new Boolean object --> object
const x4 = new Object(); // A new Object object --> object
const x5 = new Array(); // A new Array object --> object
const x6 = new RegExp(); // A new RegExp object --> object
const x7 = new Function(); // A new Function object --> function
const x8 = new Date(); // A new Date object --> object

// JavaScript Object Prototypes
function Person4(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Person4.prototype.nationality = "English";
Person4.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
var myFather = new Person4("John", "Doe", 50, "blue");
var myMother = new Person4("Sally", "Rally", 48, "green");
console.log(myFather.nationality); // English
console.log(myMother.name()); // Sally Rally

// JavaScript Iterables
/*Yinelenebilir nesneler, for..of ile yinelenebilen nesnelerdir. Teknik olarak, yinelenebilirler Symbol.iterator yöntemini uygulamalıdır.*/
var name = "Tolga";
var text = "";
for (var i of name) {
  text += i + ".";
}
console.log(text); // T.o.l.g.a.

var num = "";
for (var n of [1, 2, 3, 4, 5]) {
  num += n + "+";
}
console.log(num); // 1+2+3+4+5+

/*
value  The value returned by the iterator
       (Can be omitted if done is true)
done   true if the iterator has completed
       false if the iterator has produced a new value
       */
function myNumber() {
  var n = 0;
  return {
    nex: function () {
      n += 10;
      return { value: n, done: false };
    },
  };
}
var n = myNumber();
n.nex(); // 10
n.nex(); // 20
n.nex(); // 30
console.log(n.nex().value); // 40

myNumber2 = {};
myNumber2[Symbol.iterator] = function () {
  var n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};
var text = "";
for (var num of myNumber2) {
  text += num + " ";
}
console.log(text); // 10 20 30 40 50 60 70 80 90

// Objects Sets
var letters = new Set(["a", "b", "c"]);
var text = "";
letters.forEach(function (value) {
  // forEach metodu her eleman için işlev çağırır
  text += value + "-";
});
console.log(text); // a-b-c-

console.log(letters.values()); // SetIterator {'a', 'b', 'c'}

var text = "";
for (var x of letters) {
  // letters.values() yazınca aynı değerler çıktı
  text += x + " ";
}
console.log(text); // a b c

console.log(letters.keys()); // SetIterator {'a', 'b', 'c'}

var text = "";
for (var x of letters.entries()) {
  // entries () -->  [value,value]  döndürür
  text += x + " ";
}
console.log(text); // a,a b,b c,c

// JavaScript Maps
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits.get("apples")); // 500

var fruits = new Map();
fruits.set("appls", 100);
fruits.set("bananas", 200);
fruits.set("oranges", 300);
console.log(fruits.get("bananas")); // 200

var apples = { ad: "Apples" };
var bananas = { ad: "Bananas" };
var orangess = { ad: "Oranges" };
fruits.set(apples, 600);
fruits.set(bananas, 700);
fruits.set(orangess, 800);
console.log(fruits.get(orangess)); // 800
console.log(fruits.get("orangess")); // undefined

// Object Reference
var person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};
Object.defineProperty(person, "language", { value: "NO" });
console.log(person.language); // NO
// Adding or changing an object property --> Object.defineProperty(object, property, descriptor)

Object.defineProperty(person, "language", { enumerable: false });
console.log(Object.getOwnPropertyNames(person)); // firstName,lastName,language

Object.defineProperty(person, "year", { value: "2022" });
console.log(person.year); // 2022

var person = { firstName: "Tolga Han", lastName: "Yılmaz" };
Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
});
console.log(person.fullName); // Tolga Hna Yılmaz

var obj = { counter: 0 };
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, "add", {
  // dışardan değer aldığı için set kullanıldı
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});
obj.reset; // 0
obj.add = 9; // 0+9=9
obj.subtract = 3; // 9-3=6
obj.increment; // 6+1=7
obj.decrement; // 7-1=6
obj.decrement; // 6-1=5
console.log(obj.counter); // 5

console.log(Object.assign(Person, Person2));
