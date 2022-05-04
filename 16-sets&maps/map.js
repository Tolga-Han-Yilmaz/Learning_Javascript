// The new Map() method
var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
  console.log(fruits); // Map(3) {'apples' => 500, 'bananas' => 300, 'oranges' => 200}
  console.log(fruits.get()); // undefined
  console.log(fruits.get("apples")); // 500
  console.log(fruits["bananas"]); // undefined
  
  // The set() method
  var fruits = new Map();
  fruits.set("apples", 500);
  fruits.set("bananas", 300);
  fruits.set("oranges", 200);
  console.log(fruits.get("bananas")); // 300
  
  var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
  fruits.set("apples", 100);
  console.log(fruits.get("apples")); // 100
  fruits.set("potatoes", 999);
  console.log(fruits); // Map(4) {'apples' => 100, 'bananas' => 300, 'oranges' => 200, 'potatoes' => 999}
  
  // size  --> number of elements in a Map
  console.log(fruits.size); // 4
  
  // delete
  fruits.delete("potatoes");
  console.log(fruits.size); // 3
  
  // has()  --> returns true if a key existis in a Map
  console.log(fruits.has("apples")); // true
  
  // forEach()  --> calls a function for each key/value pair in a Map
  var text = "";
  fruits.forEach(function (value, key) {
    text += key + " = " + value + " ";
  });
  console.log(text); // apples = 100 bananas = 300 oranges = 200
  
  // entries()  --> an iterator object with the [key,values] in a Map
  var text = "";
  for (var x of fruits.entries()) {
    text += x + "  ";
  }
  console.log(text); // apples,100  bananas,300  oranges,200
  var text = "";
  for (var x of fruits) {
    text += x + "  ";
  }
  console.log(text); // apples,100  bananas,300  oranges,200
  