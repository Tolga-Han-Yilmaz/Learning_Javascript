document.getElementById("demo1").innerHTML =
  "<p><b>Math.E:</b> " +
  Math.E +
  "</p>" +
  "<p><b>Math.PI:</b> " +
  Math.PI +
  "</p>" +
  "<p><b>Math.SQRT2:</b> " +
  Math.SQRT2 +
  "</p>" +
  "<p><b>Math.SQRT1_2:</b> " +
  Math.SQRT1_2 +
  "</p>" +
  "<p><b>Math.LN2:</b> " +
  Math.LN2 +
  "</p>" +
  "<p><b>Math.LN10:</b> " +
  Math.LN10 +
  "</p>" +
  "<p><b>Math.LOG2E:</b> " +
  Math.LOG2E +
  "</p>" +
  "<p><b>Math.Log10E:</b> " +
  Math.LOG10E +
  "</p>";
/*
Math.E: 2.718281828459045

Math.PI: 3.141592653589793

Math.SQRT2: 1.4142135623730951

Math.SQRT1_2: 0.7071067811865476

Math.LN2: 0.6931471805599453

Math.LN10: 2.302585092994046

Math.LOG2E: 1.4426950408889634

Math.Log10E: 0.4342944819032518
*/

// Math.round()  --> en yakın tam sayıya yuvarlıyor
document.getElementById("demo2").innerHTML = Math.round(4.4); // 4
document.getElementById("demo3").innerHTML = Math.round(4.5); // 5

// Math.ceil()  --> üste yuvarlıyor
document.getElementById("demo4").innerHTML = Math.ceil(4.1); // 5

// Math.floor()  --> alta yuvarlıyor
document.getElementById("demo5").innerHTML = Math.floor(4.9); // 4

// Math.trunc()  --> tam sayı kısmını alıyor
document.getElementById("demo6").innerHTML = Math.trunc(-4.7); // -4

// Math.sign(x)  --> sayı pozitifse 1, negatifse -1, 0 ise 0 döner
document.getElementById("demo7").innerHTML = Math.sign(4);

// Math.pow()
document.getElementById("demo8").innerHTML = Math.pow(8, 2); // 64

// Math.sqrt()
document.getElementById("demo9").innerHTML = Math.sqrt(64); // 8

// Math.abs()  --> mutlak değer
document.getElementById("demo10").innerHTML = Math.abs(-4.7);

// Math.min() and Math.max()
document.getElementById("demo11").innerHTML = Math.min(
  0,
  150,
  30,
  20,
  -8,
  -200
); // -200
document.getElementById("demo12").innerHTML = Math.max(
  0,
  150,
  30,
  20,
  -8,
  -200
); // 150

// Math.random()  --> aralık belirtilmezse 0 ile 1 arasında rasgele bir değer dönder
document.getElementById("demo13").innerHTML = Math.random(); //0.07566123
document.getElementById("demo14").innerHTML = Math.floor(Math.random() * 10); // 0-9 arasında rasgele tam sayı döner  --> 6
document.getElementById("demo15").innerHTML =
  Math.floor(Math.random() * 10) + 1; // 1-10 arasında rasgele sayı döner --> 10
