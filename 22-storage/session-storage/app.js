// session storage ve local storage window objesi içinde bir objedir
// console.log(sessionStorage);

// Buttons
const Add = document.getElementById("add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputs
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

// Add.addEventListener("click", addItem);
// del.addEventListener("click", deleteItem);
// clear.addEventListener("click", clearItems);

function addItem(e) {
  sessionStorage.setItem(addkey.value, addvalue.value);
}
// function deleteItem(e) {}
// function clearItems(e) {}
localStorage.setItem("a", "1");
