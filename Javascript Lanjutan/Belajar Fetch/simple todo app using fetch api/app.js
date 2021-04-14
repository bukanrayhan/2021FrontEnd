// Class Construtor
class Todos {
  // constructor
  constructor(title) {
    this._id = Todos.incrementId();
    this.title = title;
    this.created = Date();
  }

  // autoIncrement Id
  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}

// declaration object
const objTodos = [];

// declaration dom
const container = document.querySelector(".container");
const inputBx = document.getElementById("inputBx");
const ulTodos = document.querySelector(".todos");
const addBtn = document.querySelector(".addBtn");

// fetch data todos
fetch("http://127.0.0.1:5500/Javascript%20Lanjutan/Belajar%20Fetch/simple%20todo%20app%20using%20fetch%20api/todos.json")
  .then((response) => response.text())
  .then((data) => {
    let todo = "";
    JSON.parse(data).forEach((element) => {
      // parsing data api to local Object
      const obj = new Todos(element.title);
      objTodos.push(obj);

      // create component
      todo += `<li class='todo'>
      <span class='text'>${element.title}</span>
      <span class='delTodo'>✖</span>
      </li>`;
    });
    ulTodos.innerHTML = todo;
  });

// declaration function

// addTodo
let addTodo = function () {
  if (inputBx.value) {
    // creating new object
    objTodos.push(new Todos(inputBx.value));

    // create element
    const todo = document.createElement("li");
    todo.classList.add("todo");
    todo.innerHTML = `<span class='text'>${inputBx.value}</span>
    <span class='delTodo'>✖</span>`;

    ulTodos.appendChild(todo);
  } else {
    console.log("gagal add Todo");
  }
};

// delete Todo
let delTodo = function (e) {
  e.parentElement.style.display = "none";
};

// workflow
container.addEventListener("click", function (e) {
  // input
  if (e.target.id == "inputBx") {
    e.target.addEventListener("keypress", function (e) {
      if (e.key == "Enter") {
        addTodo();
      }
      e.stopPropagation();
    });

    // btn
  } else if (e.target.className == "addBtn") {
    addTodo();

    // delete todo
  } else if (e.target.className == "delTodo") {
    delTodo(e.target);
  }
});
