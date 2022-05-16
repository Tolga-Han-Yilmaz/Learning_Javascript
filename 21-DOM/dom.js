// Finding HTML Element by Id
var e1 = document.getElementById("p1");
document.getElementById("p2").innerHTML =
  "The text from the p1 paragraph is : " + e1.innerHTML; // The text from the p1 paragraph is : Finding HTML Elements by Id

// Finding HTML Elements by Tag Name
var e2 = document.getElementsByTagName("p");
document.getElementById("p4").innerHTML = "The text : " + e2[2].innerHTML; // The text : Finding HTML Elements by Tag Name

var e3 = document.getElementById("d1");
var e4 = e3.getElementsByTagName("p");
document.getElementById("p5").innerHTML = "The text : " + e4[0].innerHTML; // The text : Finding HTML Elements by Tag Name

// Finding HTML Elements by Class Name
var e5 = document.getElementsByClassName("c1");
document.getElementById("p6").innerHTML = "The text : " + e5[0].innerHTML;

// Finding HTML Elements by CSS Selectors
// If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
var e6 = document.querySelectorAll("p.c2");
document.getElementById("p7").innerHTML = "The text : " + e6[0].innerHTML;

// Changing HTML Content
var e7 = document.getElementById("h1");
e7.innerHTML = "New Heading";

// Changing the Value of an Attribute
// document.getElementById(id).attribute = new value
document.getElementById("i1").src = "../img/çiçek.jpg";

// Dynamic HTML content
document.getElementById("p8").innerHTML = "Date : " + Date();

// document.write(Date());

// JavaScript Form Validation
function Form1() {
  let e8 = document.forms["form1"]["fname1"].value;
  if (e8 == "") {
    alert("Name must be filled out");
    return false;
  }
}

// JavaScript Can Validate Numeric Input
function Form2() {
  let e9 = document.getElementById("i2").value;
  let text;
  if (isNaN(e9) || e9 < 1 || e9 > 10) {
    text = "Input not valid";
  } else {
    text = `Input : ${e9}`;
  }
  document.getElementById("p9").innerHTML = text;