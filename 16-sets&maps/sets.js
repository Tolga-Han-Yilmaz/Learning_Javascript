var letters = new Set(["a", "b", "c"]);
console.log(letters.size); // 3

var letters = new Set();
letters.add("H");
letters.add("A");
letters.add("N");
console.log(letters); // Set(3) {'H', 'A', 'N'}
console.log(letters.size); // 3

var letters = new Set();
var a = "a";
var b = "b";
var c = "c";
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters.size); // 3

var letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
console.log(letters); // Set(3) {'a', 'b', 'c'}
console.log(letters.size); // 3

var letters = new Set(["a", "b", "c"]);
var text = "";
letters.forEach(function (value) {
  text += value;
});
console.log(text); // abc

console.log(letters.values()); // SetIterator {'a', 'b', 'c'}

var text = "";
for (var x of letters.values()) {
  text += x;
}
console.log(text); // abc
