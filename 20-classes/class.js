const website = class Geek {
    constructor(name) {
      this.name = name;
    }
    websiteName() {
      return this.name;
    }
  };
  const x = new website("Tolga Han");
  console.log(x); // Geek {name: 'Tolga Han'}
  console.log(x.websiteName()); // Tolga Han
  
  const Website = class {
    constructor(name) {
      this.name = name;
    }
    returnName() {
      return this.name;
    }
  };
  console.log(new Website("Tolga").returnName()); // Tolga
  
  class animal {
    sleep() {
      console.log("zzzzzzzzzz");
    }
  }
  const spot = new animal();
  spot.sleep(); // zzzzzzzzzzzzzz
  
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  var myCar = new Car("Ford", 2020);
  console.log(myCar); // Car {name: 'Ford', year: 2020}
  console.log(myCar.name); // Ford
  console.log(myCar.year); // 2020
  
  class car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  let my1 = new car1("Mercedes", 2020);
  console.log(my1); // car1 {name: 'Mercedes', year: 2020}
  console.log(my1.age()); // 2
  
  class car2 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  let date = new Date();
  let year = date.getFullYear();
  let my2 = new car2("ford", 2000);
  console.log(my2); // car2 {name: 'ford', year: 2000}
  console.log(my2.age(year)); // 22
  
  // inheritance
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  class Professor extends Person {
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
    introduceSelf() {
      console.log(
        `My name is ${this.name}, and I will be your ${this.teaches} professor.`
      );
    }
    grade(paper) {
      const grade = Math.floor(Math.random() * 10 + 1);
      console.log(grade);
    }
  }
  const prof = new Professor("Tolga", "Web Developer");
  prof.introduceSelf(); // My name is Tolga, and I will be your Web Developer professor.
  prof.grade("tolga"); // 8
  
  class Student extends Person {
    constructor(name, year) {
      super(name);
      this.year = year;
    }
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.year}.`);
    }
    canStudy() {
      return this.year > 1;
    }
  }
  const student1 = new Student("Nazlı", 2);
  student1.introduceSelf(); // Hi! I'm Nazlı, and I'm in year 2.
  console.log(student1.canStudy()); // true
  
  class car3 {
    constructor(brand) {
      this.brand = brand;
    }
    present() {
      return `I have a ${this.brand}`;
    }
  }
  class model extends car3 {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return `${this.present()}, it is a ${this.model}`;
    }
  }
  let my3 = new model("Ford", "Mustang");
  console.log(my3.show()); // I have a Ford, it is a Mustang
  
  class car4 {
    constructor(brand) {
      this.name = brand;
    }
    get gnam() {
      return this.name;
    }
    set snam(x) {
      this.name = x;
    }
  }
  let my4 = new car4("BMW");
  console.log(my4.gnam); // BMW
  console.log(my4.snam);
  
  class car5 {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }
  let my5 = new car5("Ford");
  console.log(my5.carname); // Ford
  
  class car6 {
    constructor(brand) {
      this._carname = brand;
    }
    set carname(x) {
      this._carname = x;
    }
    get carname() {
      return this._carname;
    }
  }
  let my6 = new car6();
  my6.carname = "Volvo";
  console.log(my6.carname); // Volvo
  
  // static
  class car7 {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello";
    }
  }
  let my7 = new car7("audi");
  console.log(my7); // car7 {name: 'audi'}
  // console.log(my7.hello()); // TypeError hatası verdi
  console.log(car7.hello()); // Hello
  
  class car8 {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return `Hello ${x.name}`;
    }
  }
  let my8 = new car8("Cadillac");
  console.log(car8.hello(my8)); // Hello Cadillac
  