updateCount();

const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

const addBtn = document.querySelector("#btn");
addBtn.addEventListener("click", addTask); // add a task on click

const delBtn = document.querySelector(".delbtn");
delBtn.addEventListener("click", function () {
  // delete a task on click
  deleteTask(taskCard); // target the right task
});

function addTask() {
  const newTask = taskCard.cloneNode(true); // clone the task card
  const newDelBtn = newTask.querySelector(".delBtn");
  const newTextArea = newTask.querySelector(".task");

  newTextArea.value = "New task"; // set new task to "New Task"
  newDelBtn.addEventListener("click", function () {
    // add delete event listener to new task
    deleteTask(newTask); // target the new task
    updateCount();
  });

  tasksContainer.appendChild(newTask); // append new task to the tasks container
  updateCount();
}

function deleteTask(task) {
  task.remove(); // remove the task
  updateCount();
}

function updateCount() {
  const cardCounter = document.querySelector("#count");
  let count = document.querySelectorAll(".todoCard").length; // takes as value the number of task cards
  cardCounter.innerHTML = "Nb of cards : " + count; // display the count variable in the html
}
