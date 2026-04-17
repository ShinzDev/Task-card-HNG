
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

document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const card = document.querySelector('[data-testid="test-todo-card"]');
    const checkbox = document.getElementById("task-toggle");
    const statusControl = document.getElementById("status-control");
    const statusText = document.getElementById("status-text");

    // FUNCTION: Sync all status indicators
    function updateStatus(newStatus) {
        // 1. Update the Dropdown
        statusControl.value = newStatus;
        
        // 2. Update the Display Text
        statusText.innerText = newStatus;

        // 3. Update the Checkbox
        checkbox.checked = (newStatus === "Done");

        // 4. Update Visual Classes
        if (newStatus === "Done") {
            card.classList.add("status-done");
        } else {
            card.classList.remove("status-done");
        }
    }

    // EVENT: Toggle Checkbox
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            updateStatus("Done");
        } else {
            // Requirement: If unchecked after Done -> revert to "Pending"
            updateStatus("Pending");
        }
    });

    // EVENT: Change Status Dropdown
    statusControl.addEventListener("change", (e) => {
        updateStatus(e.target.value);
    });

    // --- Keep your existing Edit Mode logic below ---
});


document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const card = document.querySelector('[data-testid="test-todo-card"]');
    const displayPriority = document.getElementById("display-priority");
    const inputPriority = document.getElementById("edit-priority");
    const saveBtn = document.getElementById("save-btn");

    /**
     * Updates the Card UI based on the priority level
     * @param {string} priority - "Low", "Medium", or "High"
     */
    function updatePriorityUI(priority) {
        // Update display text
        displayPriority.innerText = priority;

        // Clean up old classes
        card.classList.remove("priority-low", "priority-medium", "priority-high");

        // Add new class based on selection
        const priorityClass = `priority-${priority.toLowerCase()}`;
        card.classList.add(priorityClass);
    }

    // Trigger on Save
    saveBtn.addEventListener("click", () => {
        // ... (your existing title/desc save logic)
        
        const newPriority = inputPriority.value;
        updatePriorityUI(newPriority);

        // Close edit mode (your existing exitEditMode function)
        exitEditMode(); 
    });

    // INITIALIZE: Run once on load to set the default style
    updatePriorityUI(displayPriority.innerText);
});