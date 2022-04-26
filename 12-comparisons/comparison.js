function myFunc1() {
    var a = document.getElementById("age1").value;
    var b = a < 18 ? "Too young!" : "Old enough.";
    document.getElementById("demo1").innerHTML = b;
  }
  
  function myFunc2() {
    var b;
    var a = document.getElementById("age2").value;
    if (isNaN(a)) {
      b = "Input is not a number.Please entered a number";
    } else {
      b = a < 18 ? "Too young!" : "Old enough.";
    }
    document.getElementById("demo2").innerHTML = b;
  }
  