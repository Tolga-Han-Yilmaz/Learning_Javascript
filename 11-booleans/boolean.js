document.getElementById("demo1").innerHTML = 10 > 9; //true

document.getElementById("demo2").innerHTML =
  "100 is " +
  Boolean(100) +
  "<br>" +
  "3.14 is " +
  Boolean(3.14) +
  "<br>" +
  "-15 is " +
  Boolean(-15) +
  "<br>" +
  "Any (not empty) string is " +
  Boolean("Hello") +
  "<br>" +
  "Even the string 'false' is " +
  Boolean("false") +
  "<br>" +
  "Any expression (except zero) is " +
  Boolean(1 + 7 + 3.14);
/*
100 is true
3.14 is true
-15 is true
Any (not empty) string is true
Even the string 'false' is true
Any expression (except zero) is true
*/

// 0, -0, "", let x; , null, false, 10/"hello", NaN  -->  false

var e; //undefined
document.write("Boolean(0) is " + Boolean(0));
document.write("<br>");
document.write('Boolean("") is ' + Boolean(""));
document.write("<br>");
document.write("Boolean(e) undefined is " + Boolean(e));
document.write("<br>");
document.write("Boolean(-0) is " + Boolean(-0));
document.write("<br>");
document.write("Boolean(false) is " + Boolean(false));
document.write("<br>");
document.write("Boolean(NaN) is " + Boolean(NaN));
document.write("<br>");
document.write("Boolean(null) is " + Boolean(null));
document.write("<br>");
document.write("Boolean(1>2) is " + Boolean(1 > 2));

/*
Boolean(0) is false
Boolean("") is false
Boolean(e) undefined is false
Boolean(-0) is false
Boolean(false) is false
Boolean(NaN) is false
Boolean(null) is false
Boolean(1>2) is false
*/
