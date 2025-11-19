const addInput = document.getElementById("add");
const addButton = document.querySelector(".addtask button");
const pendingList = document.querySelector(".ptasks");
const completedList = document.querySelector(".ctasks");
const clearButton = document.querySelector(".removetask button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || {
  pending: [],
  completed: [],
};

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  pendingList.innerHTML = "";
  completedList.innerHTML = "";
  for (let i = 0; i < tasks.pending.length; i++) {
    const taskName = tasks.pending[i];
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      markCompleted(i);
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + taskName));
    pendingList.appendChild(li);
  }
  for (let i = 0; i < tasks.completed.length; i++) {
    const taskName = tasks.completed[i];
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    checkbox.addEventListener("change", function () {
      undoCompleted(i);
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + taskName));
    completedList.appendChild(li);
  }
}


function addTask() {
  const value = addInput.value.trim();
  if (value === "") return;
  tasks.pending.push(value);
  addInput.value = "";
  saveTasks();
  renderTasks();
}

function markCompleted(index) {
  const done = tasks.pending.splice(index, 1)[0];
  tasks.completed.push(done);
  saveTasks();
  renderTasks();
}

function undoCompleted(index) {
  const undone = tasks.completed.splice(index, 1)[0];
  tasks.pending.push(undone);
  saveTasks();
  renderTasks();
}
function clearCompleted() {
  tasks.completed = [];
  saveTasks();
  renderTasks();
}

addButton.addEventListener("click", addTask);
addInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});
clearButton.addEventListener("click", clearCompleted);
renderTasks();