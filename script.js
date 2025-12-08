let tasks = []; //array is a container holding our task

document.getElementById("addBtn").addEventListener("click", addTask);
// document.getElementById;it is getting the element with the id of addBtn and adding an event listener to click and call the function of add task
function addTask() {
  const input = document.getElementById("taskInput");
  //getting access to the input
  const task = input.value;
  // carry the value in the input field

  //Validation is checking if the user meets the required condition
  if (tasks == "") {
    alert("please enter a task.");
  }
  tasks.push(task);
  input.value = ""; //clearing the input field after adding the task
}
