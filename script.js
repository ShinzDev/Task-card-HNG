
// Wraped in an event listener to ensure the HTML elements exist before selecting them
document.addEventListener("DOMContentLoaded", () => {
    // Containers
    const viewMode = document.getElementById("todo-view-mode");
    const editForm = document.getElementById("todo-edit-form");

    // Display Elements
    const displayTitle = document.getElementById("display-title");
    const displayDesc = document.getElementById("display-desc");
    const displayPriority = document.querySelector('[data-testid="test-todo-priority"]');
    const displayDate = document.getElementById("display-date");

    // Form Inputs
    const inputTitle = document.getElementById("edit-title");
    const inputDesc = document.getElementById("edit-desc");
    const inputPriority = document.getElementById("edit-priority");
    const inputDate = document.getElementById("edit-date");

    // Buttons
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    // FUNCTION: Enter Edit Mode
    editBtn.addEventListener("click", () => {
        // Pre-fill inputs with current display values
        inputTitle.value = displayTitle.innerText;
        inputDesc.value = displayDesc.innerText;
        inputPriority.value = displayPriority.innerText;
        inputDate.value = displayDate.innerText;

        // Toggle visibility
        viewMode.classList.add("hidden");
        editForm.classList.remove("hidden");
        
        // Accessibility: Focus the first input
        inputTitle.focus();
    });

    // FUNCTION: Save Changes
    saveBtn.addEventListener("click", () => {
        // Update display with new values
        displayTitle.innerText = inputTitle.value;
        displayDesc.innerText = inputDesc.innerText; // Correction: should be .value for textarea
        displayDesc.innerText = inputDesc.value; 
        displayPriority.innerText = inputPriority.value;
        displayDate.innerText = inputDate.value;

        // Exit Edit Mode
        exitEditMode();
    });

    // FUNCTION: Cancel Changes
    cancelBtn.addEventListener("click", () => {
        exitEditMode();
    });

    function exitEditMode() {
        editForm.classList.add("hidden");
        viewMode.classList.remove("hidden");
        // Accessibility: Return focus to the edit button
        editBtn.focus();
    }
    
    const strike = document.getElementById("task-toggle");
    const taskTitle = document.getElementById("display-title");

    if (strike) {
        strike.addEventListener("change", function() {
            if (this.checked) {
                alert("Task of completed!");
                // Example of actually "striking" the text
                taskTitle.style.textDecoration = "line-through";
                taskTitle.style.opacity = "0.5";
            } else {
                taskTitle.style.textDecoration = "none";
                taskTitle.style.opacity = "1";
            }
        });
    }
});