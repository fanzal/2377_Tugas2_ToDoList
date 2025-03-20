function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;
    
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = taskValue;
    
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";
    editButton.onclick = function() {
        let newTask = prompt("Edit tugas:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    };
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        li.remove();
    };
    
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
