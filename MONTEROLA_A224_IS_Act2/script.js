const txtTodoItem = document.getElementById("txtTodoItem");
const btnAddTask = document.getElementById("btnAddTask");
const taskList = document.getElementById("taskList");

let todos = ["Task 1", "Task 2", "Task 3"];

function displayTasks() {
    taskList.innerHTML = ""; 
    todos.forEach((task) => {
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

displayTasks();


btnAddTask.addEventListener("click", () => {
    let task = txtTodoItem.value.trim(); 
    if (task !== "") {
        todos.push(task);
        displayTasks(); 
        txtTodoItem.value = ""; 
    }
});
