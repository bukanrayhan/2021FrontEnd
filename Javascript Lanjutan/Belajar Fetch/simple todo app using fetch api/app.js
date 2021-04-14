// Class Construtor
class Todos {
  // constructor
  constructor({ title, status = true }) {
    this._id = Todos.incrementId();
    this.title = title;
    this.created = Date();
    this.status = status;
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
      const obj = new Todos(element);
      objTodos.push(obj);

      // create component
      todo += `<li class='todo ${obj.status}' data-key='${obj._id}'>
      <span class='text'>${element.title}</span>
      <button class='delTodo'>✖</button>
      </li>`;
    });

    // rendering todo
    ulTodos.innerHTML = todo;
  });

// declaration function

// addTodo
let addTodo = function (e) {
  if (e.value) {
    // creating new object
    const obj = new Todos({ title: e.value });
    objTodos.push(obj);

    // create element
    const todo = document.createElement("li");
    todo.setAttribute("data-key", obj._id);
    todo.setAttribute("class", `todo ${obj.status}`);
    todo.innerHTML = `<span class='text'>${obj.title}</span>
    <button class='delTodo'>✖</button>`;

    ulTodos.appendChild(todo);
  } else {
    console.log("gagal add Todo");
  }
};

// delete Todo
let delTodo = function (todo) {
  objTodos.forEach((e) => {
    if (e._id == todo.parentElement.dataset.key) {
      const target = objTodos.indexOf(e);
      // console.log(target);
      // objTodos.pop(target);
      objTodos.splice(target, 1);
    }
  });

  todo.parentElement.style.display = "none";
};

// workflow from container
container.addEventListener("click", function (e) {
  if (e.target.className == "addBtn") {
    addTodo(inputBx);

    // delete todo
  } else if (e.target.className == "delTodo") {
    delTodo(e.target);
  }
});

// workflow input form
inputBx.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    addTodo(inputBx);
  }
});
