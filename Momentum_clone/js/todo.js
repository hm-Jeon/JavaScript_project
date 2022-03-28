const TODOS_KEY = "todos";
const HIDDEN_CLASS = "hidden";
const ANIMATE_CLASS = "animate";
const ANIMATE_REVERSE_CLASS = "animate-reverse";
const TRUE_KEY = "true";
const FALSE_KEY = "false";
const DONE_KEY = "done";

const todoOpen = document.querySelector("#todo-open");
const todoClose = document.querySelector("#todo-close");
const todoDiv = document.querySelector("#todo");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];

todoOpen.addEventListener("click", function () {
  todoDiv.classList.add(ANIMATE_CLASS);
  todoDiv.classList.remove(ANIMATE_REVERSE_CLASS);
  todoOpen.classList.add(HIDDEN_CLASS);
});

todoClose.addEventListener("click", function () {
  todoDiv.classList.remove(ANIMATE_CLASS);
  todoDiv.classList.add(ANIMATE_REVERSE_CLASS);
  todoOpen.classList.remove(HIDDEN_CLASS);
});

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo() {
  const li = this.parentElement;
  todos = todos.filter((todo) => todo.id !== Number(li.id));
  li.remove();
  saveTodos();
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
  if (newTodo.checked === TRUE_KEY) {
    chkBox.checked = true;
  }
  // add checkbox eventListner
  chkBox.addEventListener("change", function () {
    const span = this.parentNode.childNodes[1];
    if (this.checked) {
      span.classList.add(DONE_KEY);
      newTodo.checked = TRUE_KEY;
    } else {
      span.classList.remove(DONE_KEY);
      newTodo.checked = FALSE_KEY;
    }
    saveTodos();
  });
  // create span
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  if (newTodo.checked === TRUE_KEY) {
    span.classList.add(DONE_KEY);
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
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: todoInput.value,
    checked: FALSE_KEY,
  };
  todoInput.value = "";
  todos.push(newTodo);
  saveTodos();
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
