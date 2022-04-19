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
  