// DOM Selector
const btn = document.querySelector(".addTodo");
btn.addEventListener("click", () => {
  const todos = document.querySelector(".todos");
  const todo = document.createElement("li");
  const txtTodo = document.createTextNode("todo baru");
  todo.appendChild(txtTodo);
  todo.setAttribute("class", "todo");
  todos.appendChild(todo);
});
