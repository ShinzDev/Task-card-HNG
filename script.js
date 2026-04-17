
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
    
    const expandToggle = document.getElementById("expand-toggle");
        const collapsibleSection = document.getElementById("collapsible-section");
        const displayDesc = document.getElementById("display-desc");
    
        // FUNCTION: Toggle Expand/Collapse
        function toggleDescription() {
            const isCollapsed = collapsibleSection.classList.contains("collapsed");
            
            if (isCollapsed) {
                collapsibleSection.classList.remove("collapsed");
                collapsibleSection.style.maxHeight = collapsibleSection.scrollHeight + "px";
                expandToggle.querySelector("span").innerText = "Show Less";
                expandToggle.setAttribute("aria-expanded", "true");
            } else {
                collapsibleSection.classList.add("collapsed");
                collapsibleSection.style.maxHeight = "40px"; // Match your CSS
                expandToggle.querySelector("span").innerText = "Show More";
                expandToggle.setAttribute("aria-expanded", "false");
            }
        }
    
        // FUNCTION: Check if description is long enough to need a toggle
        function checkDescriptionLength() {
            // If the actual text height is small, hide the toggle button entirely
            if (displayDesc.scrollHeight <= 42) { 
                expandToggle.style.display = "none";
                collapsibleSection.classList.remove("collapsed");
            } else {
                expandToggle.style.display = "flex";
                collapsibleSection.classList.add("collapsed");
            }
        }
    
        // EVENT: Click Toggle
        expandToggle.addEventListener("click", toggleDescription);
    
        // INITIALIZE: Check length on load
        checkDescriptionLength();
    
});

document.addEventListener("DOMContentLoaded", () => {
    // --- 1. ELEMENT SELECTIONS ---
    const card = document.querySelector('[data-testid="test-todo-card"]');
    const viewMode = document.getElementById("todo-view-mode");
    const editForm = document.getElementById("todo-edit-form");

    // Display elements
    const displayTitle = document.getElementById("display-title");
    const displayDesc = document.getElementById("display-desc");
    const displayPriority = document.getElementById("display-priority");
    const displayDate = document.getElementById("display-date");
    const statusText = document.getElementById("status-text");
    const timeRemainingDisplay = document.getElementById("time-remaining");
    const overdueIndicator = document.getElementById("overdue-indicator");

    // Controls
    const checkbox = document.getElementById("task-toggle");
    const statusControl = document.getElementById("status-control");
    const expandToggle = document.getElementById("expand-toggle");
    const collapsibleSection = document.getElementById("collapsible-section");

    // Form Inputs
    const inputTitle = document.getElementById("edit-title");
    const inputDesc = document.getElementById("edit-desc");
    const inputPriority = document.getElementById("edit-priority");
    const inputDate = document.getElementById("edit-date");

    // Buttons
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    // --- 2. TIME MANAGEMENT LOGIC ---
    function updateCountdown() {
        // If status is "Done", show Completed and exit
        if (statusControl.value === "Done") {
            timeRemainingDisplay.textContent = "Completed";
            overdueIndicator.classList.add("hidden");
            card.classList.remove("overdue-active");
            return;
        }

        const deadline = new Date(displayDate.innerText);
        const now = new Date();
        const diff = deadline - now;
        const absDiff = Math.abs(diff);

        if (isNaN(deadline)) {
            timeRemainingDisplay.textContent = "Invalid Date";
            return;
        }

        const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((absDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((absDiff % (1000 * 60 * 60)) / (1000 * 60));

        let timeText = "";
        if (days > 0) timeText = `${days} day${days > 1 ? 's' : ''}`;
        else if (hours > 0) timeText = `${hours} hour${hours > 1 ? 's' : ''}`;
        else timeText = `${minutes} minute${minutes > 1 ? 's' : ''}`;

        if (diff < 0) {
            timeRemainingDisplay.textContent = `Overdue by ${timeText}`;
            overdueIndicator.classList.remove("hidden");
            card.classList.add("overdue-active");
        } else {
            timeRemainingDisplay.textContent = `Due in ${timeText}`;
            overdueIndicator.classList.add("hidden");
            card.classList.remove("overdue-active");
        }
    }

    // --- 3. STATUS & PRIORITY SYNC ---
    function updateStatus(newStatus) {
        statusControl.value = newStatus;
        statusText.innerText = newStatus;
        checkbox.checked = (newStatus === "Done");

        card.classList.remove("status-pending", "status-in-progress", "status-done");
        card.classList.add(`status-${newStatus.toLowerCase().replace(" ", "-")}`);
        
        // Always refresh time when status changes
        updateCountdown();
    }

    function updatePriorityUI(priority) {
        displayPriority.innerText = priority;
        card.classList.remove("priority-low", "priority-medium", "priority-high");
        card.classList.add(`priority-${priority.toLowerCase()}`);
    }

    // --- 4. EVENT LISTENERS ---

    // Toggle Expand/Collapse
    expandToggle.addEventListener("click", () => {
        const isExpanded = collapsibleSection.classList.toggle("expanded");
        expandToggle.setAttribute("aria-expanded", isExpanded);
        expandToggle.querySelector("span").textContent = isExpanded ? "Show Less" : "Show More";
    });

    // Status Interactions
    checkbox.addEventListener("change", () => {
        updateStatus(checkbox.checked ? "Done" : "Pending");
    });

    statusControl.addEventListener("change", (e) => {
        updateStatus(e.target.value);
    });

    // Edit Mode Toggles
    editBtn.addEventListener("click", () => {
        inputTitle.value = displayTitle.innerText;
        inputDesc.value = displayDesc.innerText;
        inputPriority.value = displayPriority.innerText;
        inputDate.value = displayDate.innerText;

        viewMode.classList.add("hidden");
        editForm.classList.remove("hidden");
        inputTitle.focus();
    });

    saveBtn.addEventListener("click", () => {
        displayTitle.innerText = inputTitle.value;
        displayDesc.innerText = inputDesc.value;
        displayDate.innerText = inputDate.value;
        
        updatePriorityUI(inputPriority.value);
        updateCountdown(); // Refresh time with the new date
        
        editForm.classList.add("hidden");
        viewMode.classList.remove("hidden");
    });

    cancelBtn.addEventListener("click", () => {
        editForm.classList.add("hidden");
        viewMode.classList.remove("hidden");
    });

    // --- 5. INITIALIZE ---
    setInterval(updateCountdown, 30000); // Heartbeat every 30s
    updateCountdown();
    updatePriorityUI(displayPriority.innerText);
});