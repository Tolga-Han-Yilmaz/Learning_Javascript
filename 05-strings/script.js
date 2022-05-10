// chartAt() --> string.charAt(index)
var text = "HELLO WORLD";
var letter = text.charAt(3);
document.getElementById("demo1").innerHTML = letter; // L
var letter = text.charAt(text.length - 1);
document.getElementById("demo2").innerHTML = letter; // D

// charCodeAt()  --> string.charCodeAt(index) --> unicode reference
var code = text.charCodeAt(0);
document.getElementById("demo3").innerHTML = code; // 72
var code = text.charCodeAt(text.length - 1);
document.getElementById("demo4").innerHTML = code; // 68

// constructor  --> string.constructor;
var message = "Hello World!";
var text = message.constructor;
document.getElementById("demo5").innerHTML = text; // function String() { [native code] }

// endsWith()  --> string.endsWith(searchvalue,length)
var text = "Hello world, welcome to the universe.";
var result = text.endsWith("world");
document.getElementById("demo6").innerHTML = result; // false
document.getElementById("demo7").innerHTML = text.endsWith("world", 11); // true

// fromCharCode()  --> String.fromCharCode(n1, n2, ..., nX)
var text = String.fromCharCode(72, 69, 76, 76, 79);
document.getElementById("demo8").innerHTML = text; // HELLO

// includes()  --> string.includes(searchvalue, start)
var text = "Hello world, welcome to the universe.";
var result = text.includes("world");
document.getElementById("demo9").innerHTML = result; // true
var result = text.includes("world", 12);
document.getElementById("demo10").innerHTML = result; // false

// indexOf()  --> string.indexOf(searchvalue, start) --> kelimenin başlangıcını esas alır ve indexi verir. bulamazsa -1 döner
var text = "Hello world, welcome to the universe.";
var result = text.indexOf("welcome");
document.getElementById("demo11").innerHTML = result; // 13
document.getElementById("demo12").innerHTML = text.indexOf("e", 5); // 14
document.getElementById("demo13").innerHTML = text.indexOf("a"); // -1

// lastIndexOf()  --> string.lastIndexOf(searchvalue, start)  --> method dizgiyi sondan başa doğru arar.
var text = "Hello planet earth, you are a great planet.";
var result = text.lastIndexOf("planet");
document.getElementById("demo14").innerHTML = result; // 36

// length  --> string.length
var text = "Hello World!";
var length = text.length;
document.getElementById("demo15").innerHTML = length; // 12

// match()  --> string.match(match)
var text = "The rain in SPAIN stays mainly in the plain";
var result = text.match("ain");
document.getElementById("demo16").innerHTML = result; // ain
var result = text.match(/ain/);
document.getElementById("demo17").innerHTML = result; // ain
var result = text.match(/ain/g);
document.getElementById("demo18").innerHTML = result; // ain,ain,ain
var result = text.match(/ain/gi);
document.getElementById("demo19").innerHTML = result; // ain,AIN,ain,ain

// prototype  --> object.prototype.name = value
function employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employee.prototype.salary = 2000;
var fred = new employee("Fred Flintstone", "Caveman", 1970);
document.getElementById("demo20").innerHTML = fred.salary; // 2000
document.getElementById("demo21").innerHTML = fred.jobtitle; // Caveman
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", "blue");
const myMother = new Person("Sally", "Rally", "green");
Person.prototype.nationality = "English";
document.getElementById("demo22").innerHTML =
  "My father is " +
  myFather.nationality +
  "<br>" +
  "My mother is " +
  myMother.nationality; // My father is English
// My mother is English

// repeat()  --> string.repeat(count)
var text = "Hello world";
var result = text.repeat(3);
document.getElementById("demo23").innerHTML = result; // Hello worldHello worldHello world

// replace()  --> string.replace(searchValue, newValue)
var text = document.getElementById("demo24").innerHTML;
document.getElementById("demo24").innerHTML = text.replace(
  "Microsoft",
  "Clarusway"
); // Visit Clarusway!
var str = document.getElementById("demo25").innerHTML;
var res = str.replace(/blue/g, "red");
document.getElementById("demo25").innerHTML = res; // Mr Blue has a red house and a red car.

// search()  --> string.search(searchValue)  --> bir başlangıç ​​konumu argümanı alamaz. Yoksa -1 döner
var text = "Mr. Blue has a blue house";
var position = text.search("Blue");
document.getElementById("demo26").innerHTML = position; // 4
var position = text.search(/blue/);
document.getElementById("demo27").innerHTML = position; // 15
var position = text.search(/blue/i);
document.getElementById("demo28").innerHTML = position; // 4

// slice()  --> string.slice(start, end)
var text = "Hello world!";
var result = text.slice(3);
document.getElementById("demo29").innerHTML = result; // lo world!
var result = text.slice(3, 8);
document.getElementById("demo30").innerHTML = result; // lo wo
var result = text.slice(-1);
document.getElementById("demo31").innerHTML = result; // !
var result = text.slice(0);
document.getElementById("demo32").innerHTML = result; // Hello world!

// split()  --> string.split(separator, limit)
var text = "How are you doing today?";
var myArray = text.split(" ");
document.getElementById("demo33").innerHTML = myArray; // How,are,you,doing,today?
var myArray = text.split();
document.getElementById("demo34").innerHTML = myArray; // How are you doing today?
var myArray = text.split(" ");
document.getElementById("demo35").innerHTML = myArray[1]; // are
var myArray = text.split("");
document.getElementById("demo36").innerHTML = myArray; // H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
var myArray = text.split(" ", 3);
document.getElementById("demo37").innerHTML = myArray; // How,are,you
var myArray = text.split("o");
document.getElementById("demo38").innerHTML = myArray; // H,w are y,u d,ing t,day?

// substr()  --> string.substr(start, length)  --> slice dan farkı başlangıçtan sonra ne kadar alacağını(uzunluğunu) belirtmesidir. slice end
var text = "Hello world!";
var result = text.substr(1, 4);
document.getElementById("demo39").innerHTML = result; // ello
var result = text.substr(2);
document.getElementById("demo40").innerHTML = result; // llo world!
var result = text.substr(-5, 5);
document.getElementById("demo41").innerHTML = result; // orld!

// substring()  --> string.substring(start, end)  --> slice gibi
var text = "Hello world!";
var result = text.substring(1, 4);
document.getElementById("demo42").innerHTML = result; // ell
var result = text.substring(4);
document.getElementById("demo43").innerHTML = result; // o world!
var result = text.substring(5, 1);
document.getElementById("demo44").innerHTML = result; // ello
var result = text.substring(-4);
document.getElementById("demo45").innerHTML = result; // Hello world!

// startsWidth()  --> string.startsWith(searchValue, start)
var text = "Hello world, welcome to the universe.";
var result = text.startsWith("Hello");
document.getElementById("demo46").innerHTML = result; // true
var result = text.startsWith("world", 7);
document.getElementById("demo46").innerHTML = result; // false

// toLocaleLowerCase()
var text = "Hello World!";
var result = text.toLocaleLowerCase();
document.getElementById("demo46").innerHTML = result; // hello world!

// toLowerCase()
var text = "Hello World!";
var result = text.toLowerCase();
document.getElementById("demo47").innerHTML = result; // hello world!

// toLocaleUpperCase()
var text = "Hello World!";
var result = text.toLocaleUpperCase();
document.getElementById("demo48").innerHTML = result; // HELLO WORLD!

// toUpperCase()
var text = "Hello World!";
var result = text.toUpperCase();
document.getElementById("demo49").innerHTML = result; // HELLO WORLD!

// trim()  --> string.trim()  --> her iki tarafındaki boşlukları kaldırır.
var text = "     Hello World!     ";
var result = text.trim();
document.getElementById("demo50").innerHTML = result;

var text =
  "The University of Hawaii began using radio to send digital information as early a Friedhelm Hillebrand conceptualised SMS in 1984 while working for Deutsche Telekom. Sitting Hillebrand typed out random sentences and counted every letter, number, punctuation, and sp Almost every time, the messages contained fewer than 160 characters, thus giving the basis limit one could type via text messaging. With Bernard Ghillebaert of France Télécom, he dev a proposal for the GSM (Groupe Spécial Mobile) meeting in February 1985 in Oslo. The first technical solution evolved in a GSM subgroup under the leadership of Finn Trosby. It was further developed under the leadership of Kevin Holley and Ian Harris (see Short Mes SMS forms an integral part of SS7 (Signalling System No. 7). under SS7, it is a 'state' wit coded in the ITU-T 'T.56' text format, that has a sequence lead in to determine different and may have special character codes that permits, for example, sending simple graphs as te This was part of ISDN (Integrated Services Digital Network) and since GSM is based on this, made its way to the mobile phone. Messages could be sent and received on ISDN phones, and these can send SMS to any GSM phone. The possibility of doing something is one thing, TExt implementing it another, but systems existed from 1988 that sent SMS messages to mobile phophones (compare ND-NOTIS).";
/*
1 - How many characters in text
2 - How many words are there in the "text"
3 - How many unique words in the "text"
4 - Find Lexical diversity (lexical_diversity = (number of words)/(number of unique words))
5 - Count how many "the" in text
6 - Count how many "a" in text
7 - Extract First 10 words in text
8 - Append " Innomatics Technology Hub" in first 10 words
9 - Extract First Fourteen (14) character in text
10 - Extract First 10 words in text
11 - Convert every letter into upper case 
12 - Convert every letter into lower case
13 - Replace the word "University" with name "Innomatics" in text
*/
// 1
console.log(text.length); // 1373
// 2
var result = text.split("text").length;
console.log(result); // 3
// 3
var result = text.split(/text/i).length;
console.log(result); // 4
// 5
var result = text.split("the").length;
console.log(result); // 11
// 6
var result = text.split("a").length;
console.log(result); // 78
var result = text.split(/a/i).length;
console.log(result); // 79
// 7
var result = console.log(text.split(" ", 10));
console.log(result); // (10) ['The', 'University', 'of', 'Hawaii', 'began', 'using', 'radio', 'to', 'send', 'digital']
// 8
var array = text.split(" ", 10);
array.push(" Innomatics Technology Hub");
console.log(array); // ['The', 'University', 'of', 'Hawaii', 'began', 'using', 'radio', 'to', 'send', 'digital', ' Innomatics Technology Hub']
// 9
console.log(array.toString()); // The,University,of,Hawaii,began,using,radio,to,send,digital, Innomatics Technology Hub
// 11
console.log(text.toUpperCase());
// 12
console.log(text.toLowerCase());
// 13
console.log(text.replace(/university/i, "Innomatics"));
