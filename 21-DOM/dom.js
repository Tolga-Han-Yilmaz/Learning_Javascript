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
}

// Changing HTML Style
// document.getElementById(id).style.property = new style
document.getElementById("p10").style.color = "blue";
document.getElementById("p10").style.fontSize = "larger";

// Using Events
function fun1() {
  document.getElementById("h2").style.color = "red";
}

function fun2() {
  document.getElementById("p11").style.visibility = "hidden";
}
function fun3() {
  document.getElementById("p11").style.visibility = "visible";
}

// Reacting to Events
function func4() {
  document.getElementById("h3").innerHTML = "Changed";
}

// Assign Events Using the HTML DOM
document.getElementById("b1").onclick = func5;
function func5() {
  document.getElementById("p12").innerHTML = "Hello World";
}

// The onchange Event
function func6() {
  const x = document.getElementById("i5");
  x.value = x.value.toUpperCase();
}

// The onmouseover and onmouseout Events
function func7(obj) {
  obj.innerHTML = "Thank You";
}
function func8(obj) {
  obj.innerHTML = "Mouse Over Me";
}
function func9() {
  document.getElementById("d33").innerHTML = "Thank You";
}
function func10() {
  document.getElementById("d33").innerHTML = "Mouse Over Me";
}

// The onmousedown, onmouseup and onclick Events
function func11(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
  obj.style.fontSize = "larger";
}
function func12(obj) {
  obj.style.backgroundColor = "yellow";
  obj.innerHTML = "Thank You";
}

function func13() {
  document.getElementById("img5").src = "../img/fener.jpg";
}
function func14() {
  document.getElementById("img5").src = "../img/balon.jpg";
}

// onfocus
function func15(a) {
  a.style.background = "yellow";
}

// addEventListener
document.getElementById("b2").addEventListener("click", func17);
function func17() {
  document.getElementById("p13").innerHTML = Date();
}

document.getElementById("b3").addEventListener("click", function () {
  alert("Hello World");
});

var x = document.getElementById("b4");
x.addEventListener("click", func18);
x.addEventListener("click", func19);
function func18() {
  alert("Hello");
}
function func19() {
  alert("World");
}

var xx = document.getElementById("b6");
xx.addEventListener("mouseover", func20);
xx.addEventListener("mouseout", func21);
xx.addEventListener("click", func22);
function func20() {
  document.getElementById("p15").innerHTML += "Mouse Over <br/>";
}
function func21() {
  document.getElementById("p15").innerHTML += "Mouse Out <br/>";
}
function func22() {
  document.getElementById("p15").innerHTML += "Clicked <br/>";
}

var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);
function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}
function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}
function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}

// Add an Event Handler to the window Object
window.addEventListener("resize", function () {
  document.getElementById("p16").innerHTML = Math.random();
});

// The removeEventListener() method
document.getElementById("d5").addEventListener("mousemove", func23);
function func23() {
  document.getElementById("p17").innerHTML = Math.random();
}
// Child Nodes and Node Values
document.getElementById("p19").innerHTML =
  document.getElementById("p18").innerHTML;

document.getElementById("p21").innerHTML =
  document.getElementById("p20").firstChild.nodeValue;

document.getElementById("p23").innerHTML =
  document.getElementById("p22").childNodes[0].nodeValue;

console.log(document.body);
console.log(document.documentElement);

// The nodeName
document.getElementById("p24").innerHTML =
  document.getElementById("b7").nodeName; // BUTTON

// The nodeType
console.log(document.getElementById("b7").nodeType); // 1
console.log(document.getElementById("p18").nodeType); // 1

// Creating New HTML Elements (Nodes)
const par1 = document.createElement("p");
const par2 = document.createTextNode("Last paragraph");
par1.appendChild(par2);
const par3 = document.getElementById("d55");
par3.appendChild(par1);

const par4 = document.createElement("h1");
const par5 = document.createTextNode("JS Title");
par4.appendChild(par5);
const par6 = document.getElementById("d6");
const par7 = document.getElementById("p27");
par6.insertBefore(par4, par7);

// Removing Existing HTML Elements
function func24() {
  document.getElementById("p30").remove();
}

const parent = document.getElementById("d8");
const child = document.getElementById("p32");
function func25() {
  parent.removeChild(child);
  // child.remove();
  // document.getElementById("p32").remove();
}

// Replacing HTML Elements
const parent1 = document.getElementById("d9");
const child1 = document.getElementById("p33");
const par8 = document.createElement("h3");
const par9 = document.createTextNode("Have been Title");
par8.appendChild(par9);
function func26() {
  parent1.replaceChild(par8, child1);
}

// The HTMLCollection Object
const myCollection = document.getElementsByTagName("p");
document.getElementById("p37").innerHTML =
  "The innerHTML of the second paragraph is: " + myCollection[1].innerHTML;

// HTML HTMLCollection Length
const myCollection1 = document.getElementsByTagName("p");
document.getElementById("p38").innerHTML =
  "This document contains " + myCollection1.length + " paragraphs.";

function func27() {
  const myCollection2 = document.getElementsByTagName("h1");
  for (let i = 0; i < myCollection2.length; i++) {
    myCollection2[i].style.color = "red";
  }
}
// function func27() {
//   const myCollection3 = document.getElementsByTagName("h1");
//   myCollection3.style.color = "red";
// } --> böyle yapınca olmadı. çünkü elemanları tek tek dolaşmak lazım
const myCollection4 = document.getElementsByTagName("h1");
console.log(myCollection4); // HTMLCollection(6) [h1#h1, h1#h2, h1#h3, h1, h1, h1, h1: h1#h1, h2: h1#h2, h3: h1#h3]

// The HTML DOM NodeList Object
const myNodelist = document.querySelectorAll("p");
document.getElementById("p39").innerHTML =
  "The innerHTML of the paragraph is : " + myNodelist[3].innerHTML;

// querySelectorAll
const myNodelist1 = document.querySelectorAll("p");
document.getElementById("p40").innerHTML =
  "The innerHTML of the paragraph is : " + myNodelist1[8].innerHTML;

const myNodelist2 = document.querySelectorAll("p");

document.getElementById("p41").innerHTML =
  "This document contains " + myNodelist2.length + " paragraphs.";

function func28() {
  const myNodelist3 = document.querySelectorAll("p");
  for (let i = 0; i < myNodelist3.length; i++) {
    myNodelist3[i].style.color = "red";
  }
}

function setBodyAttr(attr, value) {
  if (document.body) document.body[attr] = value;
  else throw new Error("no support");
}

// yeni bir pencere açıyor.
function geeks1() {
  var gfg = window.open();
  gfg.document.open();
  gfg.document.write("<h1>PRACTICE</h1>");
  gfg.document.close();
}

function geeks2() {
  var x = document.baseURI;
  document.getElementById("gfg").innerHTML = "The base URI of the page: " + x;
}

// DOM createAttribute() Method
function geeks3() {
  var tag_name = document.getElementsByTagName("h1")[8];
  var attr = document.createAttribute("class");
  attr.value = "gfg";
  tag_name.setAttributeNode(attr);
}
function geeks4() {
  var id = document.getElementById("gfg1");
  var new_attr = document.createAttribute("href");
  new_attr.value = "#";
  id.setAttributeNode(new_attr);
}