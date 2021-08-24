const inputBox = document.getElementById("todo-input");

renderTodos(retrive() || []);

inputBox.addEventListener("keyup", (ev) => {
  if (ev.keyCode == 13) {
    const todo = inputBox.value;

    const todos = retrive() || [];

    todos.push(todo);

    store(todos);

    renderTodos(retrive());

    inputBox.value = "";
  }
});

function store(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function retrive() {
  return JSON.parse(localStorage.getItem("todos"));
}

function renderTodos(todos) {
  const todosContainer = document.querySelector(".todos");

  todosContainer.innerHTML = "";

  const todosMarkup = todos
    .map((todo) => `<div class="todo"><p>${todo}<p/></div>`)
    .join("");

  todosContainer.innerHTML = todosMarkup;
}

document.querySelector(".todos").addEventListener("click", function (e) {
  if (e.target && e.target.matches(".todo p")) {
    const todo = e.target.innerHTML;
    const todos = retrive();
    const updated = todos.filter((t) => t != todo);
    console.log(updated);
    store(updated);
    renderTodos(retrive());
  }
});
