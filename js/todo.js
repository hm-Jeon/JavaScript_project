import * as root from "./root.js";

let todos = [];

root.todoOpen.addEventListener("click", function () {
  root.todoDiv.classList.toggle(root.ANIMATE_REVERSE_CLASSNAME);
  root.todoOpen.classList.toggle(root.ACTIVE_CLASSNAME);
});

const savedTodos = localStorage.getItem(root.TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

function handleTodoListHeight() {
  root.todoList.style.minHeight = `calc(28.8px * ${todos.length})`;
  root.todoList.style.minHeight = `calc(28.8px * ${todos.length})`;
}

function saveTodos() {
  localStorage.setItem(root.TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo() {
  const li = this.parentElement;
  todos = todos.filter((todo) => todo.id !== Number(li.id));
  li.remove();
  saveTodos();
  handleTodoListHeight();
}

function paintTodo(newTodo) {
  // create li
  const li = document.createElement("li");
  li.id = newTodo.id;
  // create div
  const div = document.createElement("div");
  // create checkbox
  const chkBox = document.createElement("input");
  chkBox.type = "checkbox";
  if (newTodo.checked === root.TRUE_KEY) {
    chkBox.checked = true;
  }
  // add checkbox eventListner
  chkBox.addEventListener("change", function () {
    const span = this.parentNode.childNodes[1];
    if (this.checked) {
      span.classList.add(root.DONE_KEY);
      newTodo.checked = root.TRUE_KEY;
    } else {
      span.classList.remove(root.DONE_KEY);
      newTodo.checked = root.FALSE_KEY;
    }
    saveTodos();
  });
  // create span
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  if (newTodo.checked === root.TRUE_KEY) {
    span.classList.add(root.DONE_KEY);
  }
  // append checkbox & span in div
  div.appendChild(chkBox);
  div.appendChild(span);
  // create button
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  // append div & button in li
  li.appendChild(div);
  li.appendChild(button);
  root.todoList.appendChild(li);
  handleTodoListHeight();
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: root.todoInput.value,
    checked: root.FALSE_KEY,
  };
  root.todoInput.value = "";
  todos.push(newTodo);
  saveTodos();
  paintTodo(newTodo);
}

root.todoForm.addEventListener("submit", handleTodoSubmit);
