function myFunction() {
    var message = "";
    var message = document.getElementById("p1");
    var x = document.getElementById("demo").value;
    try {
      if (x == "") throw "empty";
      if (isNaN(x)) throw "not a number";
      x = Number(x);
      if (x < 5) throw "too low";
      if (x > 10) throw "too high";
      else throw "bravo";
    } catch (error) {
      message.innerHTML = "Input is " + error;
    }
  }
  
  function myFunction1() {
    var message = "";
    var message = document.getElementById("p2");
    var x = document.getElementById("demo1").value;
    try {
      if (x == "") throw "is empty";
      if (isNaN(x)) throw "is not a number";
      x = Number(x);
      if (x < 5) throw "is too low";
      if (x > 10) throw "is too high";
      else throw "congs";
    } catch (error) {
      message.innerHTML = "Input " + error;
    } finally {
      document.getElementById("demo1").value = "tekrar deneyiniz";
    }
  }
  
  /*
  Range Error
  A RangeError is thrown if you use a number that is outside the range of legal values.
  
  For example: You cannot set the number of significant digits of a number to 500.
  */
  var num = 1;
  try {
    num.toPrecision(500);
  } catch (error) {
    console.log(error.name); // RangeError
  }
  
  /*
  Reference Error
  A ReferenceError is thrown if you use (reference) a variable that has not been declared:
  */
  var x = 5;
  try {
    x = y + 3;
  } catch (error) {
    console.log(error.name); // ReferenceError
  }
  
  /*
  Syntax Error
  A SyntaxError is thrown if you try to evaluate code with a syntax error.
  */
  try {
    eval("alert('Hello)");
  } catch (error) {
    console.log(error.name); // SyntaxError
  }
  
  /*
  Type Error
  A TypeError is thrown if you use a value that is outside the range of expected types:
  */
  var num = 1;
  try {
    num.toUpperCase();
  } catch (err) {
    console.log(err.name); // TypeErro
  }
  