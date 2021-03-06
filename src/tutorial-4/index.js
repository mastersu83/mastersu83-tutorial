const button = document.querySelector(".btn");
const tasksList = document.querySelector(".tasksList");
const input = document.querySelector(".input");

let tasksArray = [];

const handleClickAdd = () => {
  tasksArray.push(input.value);
  render(tasksArray);
  input.value = "";
};

const handleClickRemove = (index) => {
  tasksArray.splice(index, 1);
  render(tasksArray);
};

const render = (newTasksArray) => {
  tasksList.innerHTML = "";
  if (newTasksArray) {
    newTasksArray.forEach((task, index) => {
      let taskItem = document.createElement("li");
      let removeBtn = document.createElement("button");
      taskItem.className = "taskItem";
      removeBtn.className = "removeBtn";
      removeBtn.innerHTML = "X";
      taskItem.innerHTML = task;
      taskItem.append(removeBtn);
      tasksList.prepend(taskItem);
      document
        .querySelector(".removeBtn")
        .addEventListener("click", () => handleClickRemove(index));
    });
  }
};

window.onload = render(tasksArray);
button.addEventListener("click", handleClickAdd);
