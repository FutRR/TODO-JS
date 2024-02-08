const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

const addBtn = document.querySelector("#btn");
addBtn.addEventListener("click", addTask); // add a task on click

function addTask() {
  const newTask = taskCard.cloneNode(true); // clone the task card
  const newTextArea = newTask.querySelector(".task");

  newTextArea.value = "New task"; // set new task to "New Task"

  tasksContainer.appendChild(newTask); // append new task to the tasks container
}
