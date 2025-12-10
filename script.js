let tasks = []; // array is a container holding our task

// document.getElementById("addBtn") is getting the element with the id of addBtn
// and adding an event listener to click and call the function of addTask
document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  // getting access to the input

  const task = input.value;
  // carry the value in the input field

  // Validation is checking if the user meets the required condition
  if (task === "") {
    alert("please enter a task.");
    return; // Stop the process
  }

  tasks.push(task); // adding the task to the array
  input.value = ""; // clearing the input field after adding the task

  displayTasks(); // display updated tasks
}

function displayTasks() {
  const list = document.getElementById("taskList");
  // getting access to ul list with id of taskList

  list.innerHTML = ""; // clearing old list before displaying new one

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    // creating a new li element for each task

    li.innerHTML = `
      ${task}
      <div>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    list.appendChild(li);
    // adding the li to the list
  });
}

function editTask(index) {
  const newTask = prompt("edit your task David;", tasks[index]);
  // shows the current task in prompt for editing

  if (newTask !== null && newTask !== "") {
    tasks[index] = newTask; // updating the task with new value
    displayTasks(); // refresh task list
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}
