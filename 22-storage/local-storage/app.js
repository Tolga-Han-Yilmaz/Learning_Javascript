// // setItem
// localStorage.setItem("a", 1);
// localStorage.setItem("b", 2); // localstorage e veri böyle ekleniyor

// // getItem
// // const value = localStorage.getItem("b");
// // console.log(value); // 2
// // console.log(typeof value); // string --> değerler localstroage e her zaman string olarak kaydediliyor

// // clear --> local ı temizliyor
localStorage.clear();

// console.log(localStorage.getItem("c")); // null --> eğer veri local de yoksa null döner
// if (localStorage.getItem("a") === null) {
//   console.log("Veri bulunmuyor");
// } else {
//   console.log("Veri bulunuyor");
// }

// // local storage değerleri stringe çeviriyor
// // local storage - array yazma
// const todos = ["todo 1", "todo 2", "todo 3"];
// localStorage.setItem("todos1", todos); // todo 1,todo 2,todo 3 --> stringe çevirdi

// localStorage.setItem("todos2", JSON.stringify(todos)); // ["todo 1", "todo 2", "todo 3"] --> array a çevirdi

// const value = JSON.parse(localStorage.getItem("todos2")); // ['todo 1', 'todo 2', 'todo 3'] --> array olarak getirdi
// console.log(value);

// inputtan değer girildiğinde localstorage yazılacak
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
  const value = todoInput.value; // inputa değer girildiğinde alınan value
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = []; // eğer local de todos yoksa ilk buruya giriyor ve todos oluşuyor
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); // todos oluştuysa buruya geliyor ve array oluyor
  }
  todos.push(value); //değer burda array(todos a) ekleniyor

  localStorage.setItem("todos", JSON.stringify(todos)); // local e array olarak yazılıyor

  e.preventDefault();
}
