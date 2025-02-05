document.addEventListener("DOMContentLoaded", () => {
    const taskNameInput = document.getElementById("task-name");
    const taskDescInput = document.getElementById("task-desc");
    const dueDateInput = document.getElementById("due-date");
    const addTaskButton = document.getElementById("add-task");
    const todoList = document.getElementById("todo-list");
    const noTaskMessage = document.getElementById("no-task");
  
    addTaskButton.addEventListener("click", () => {
      const taskName = taskNameInput.value.trim();
      const taskDesc = taskDescInput.value.trim();
      const dueDate = dueDateInput.value;
  
      if (!taskName || !dueDate) {
        alert("Please fill out both task name and due date.");
        return;
      }
  
      const taskItem = document.createElement("li");
      taskItem.classList.add("todo-item");
  
      taskItem.innerHTML = `
        <div class="todo-item-header">
          <div class="task-title">${taskName}</div>
          <input type="checkbox" class="mark-complete">
        </div>
        <div class="task-desc">${taskDesc || "No description provided"}</div>
        <div class="task-date">${formatDate(dueDate)}</div>
      `;
  
      const checkbox = taskItem.querySelector(".mark-complete");
      checkbox.addEventListener("change", () => {
        taskItem.classList.toggle("completed");
      });
  
      todoList.appendChild(taskItem);
  
      taskNameInput.value = "";
      taskDescInput.value = "";
      dueDateInput.value = "";
  
      noTaskMessage.style.display = "none";
    });
  
    function formatDate(dateStr) {
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return new Date(dateStr).toLocaleString("en-US", options);
    }
  });
  