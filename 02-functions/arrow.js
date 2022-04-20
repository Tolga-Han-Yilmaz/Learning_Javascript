var func1 = (a, b) => a * b;
console.log(func1(3, 7)); // 21
/////////////////////////////////////
var hello;
hello = function () {
  return "Hello World";
};
console.log(hello()); // Hello World
var hello1 = () => {
  return "Hello World";
};
console.log(hello1()); // Hello World
var hello2 = () => "Hello World";
console.log(hello2()); // Hello World
////////////////////////////////////////////
function func2() {
  var a = 5,
    b = 4;
  return a + b;
}
console.log(func2()); // 9
var func3 = () => {
  var a = 6,
    b = 8;
  return a + b;
};
console.log(func3()); // 14
var func4 = (num) => num * num; // var func4 = num => {return num*num};
console.log(func4(6)); // 36
var obj = {
  num: 5,
  func5: () => {
    console.log(this.num);
  },
};
obj.func5(); // undefined

/////////////////////////////////////////////////
var student = {
  name: "Tolga Han",
  branch: "Full Stack Developer",
};
function func7(position) {
  console.log(`${this.name} of ${this.branch} is a ${position}`);
}
// var func7 = (position) => {
//   console.log(`${this.name} of ${this.branch} is a ${position}`);
// };
func7.call(student, "Web Developer"); // Tolga Han of Full Stack Developer is a Web Developer
func7.apply(student, ["Web Designer"]); // Tolga Han of Full Stack Developer is a Web Designer
var func8 = func7.bind(student); // Tolga Han of Full Stack Developer is a Software
func8("Software");
///////////////////////////////////////////////
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length)); // [8, 6, 7, 9]
