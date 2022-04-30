/**
 for in --> index numarası veriyor. index numarası ile çalışıyor
 for of --> değerle çalışıyor
 */

 var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
 var text = "";
 for (var i = 0; i < cars.length; i++) {
   text += cars[i] + "<br>";
 }
 document.getElementById("demo2").innerHTML = text;
 /*
 BMW
 Volvo
 Saab
 Ford
 Fiat
 Audi
 */
 
 var text = "";
 for (var i = 1; i < 6; i++) {
   text += `${i} defa çalıştı. <br>`;
 }
 document.getElementById("demo3").innerHTML = text;
 /*
 1 defa çalıştı.
 2 defa çalıştı.
 3 defa çalıştı.
 4 defa çalıştı.
 5 defa çalıştı.
 */
 
 var i, len, text;
 for (i = 0, len = cars.length, text = ""; i < len; i++) {
   text += `${cars[i]}<br>`;
 }
 document.getElementById("demo4").innerHTML = text;
 /*
 BMW
 Volvo
 Saab
 Ford
 Fiat
 Audi
 */
 
 var i = 2;
 var len = cars.length;
 var text = "";
 for (; i < len; ) {
   text += `${cars[i]}<br>`;
 }
 document.getElementById("demo5").innerHTML = text;
 
 var person = { fname: "Tolga Han", lname: "Yılmaz", age: 30 };
 var txt = "";
 for (let x in person) {
   txt += person[x] + " ";
 }
 document.getElementById("demo6").innerHTML = txt; // Tolga Han Yılmaz 30
 
 var numbers = [6, 9, 8, 5, 66, 40];
 var txt = "";
 for (var x in numbers) {
   txt += numbers[x] + " " + x + "<br>";
 }
 document.getElementById("demo7").innerHTML = txt;
 /*
 6
 9
 8
 5
 66
 40
 */
 
 var numbers = [6, 9, 8, 5, 66, 40];
 var txt = "";
 numbers.forEach(myFunc1);
 document.getElementById("demo8").innerHTML = txt;
 function myFunc1(value, index, array) {
   txt += value;
 }
 
 var cars = ["BMW", "Volvo", "Mini"];
 var text = "";
 for (var x of cars) {
   text += x + "<br>";
 }
 document.getElementById("demo9").innerHTML = text;
 /*
 let language = "JavaScript";
 let text = "";
 for (let x of language) {
   text += x + "<br>";
 }
 document.getElementById("demo10").innerHTML = text;
 */
 