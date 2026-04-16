
// Wraped in an event listener to ensure the HTML elements exist before selecting them
document.addEventListener("DOMContentLoaded", () => {
    
    const strike = document.getElementById("task-toggle");
    const taskTitle = document.getElementById("task-title");

    if (strike) {
        strike.addEventListener("change", function() {
            if (this.checked) {
                alert("Task completed!");
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