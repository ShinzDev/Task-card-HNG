# Task-card-HNG


Task Name
Stage 0 (Frontend) Build a Testable Todo Item Card
Requirements / Task Brief
Build a clean, high-fidelity Task Card (or a single-card page) that serves as the core UI element for a productivity app. It needs to feel more "alive" and interactive than a standard card, capturing the polished energy of an early-stage startup.

Evaluation Criteria / Acceptance Criteria
Build the component using standard semantic elements, mapping the provided testIds to their respective roles for automated testing.



Card container → data-testid="test-todo-card"
Task title  → data-testid="test-todo-title"
Task description  → data-testid="test-todo-description"
Priority badge → data-testid="test-todo-priority"
Due date  → data-testid="test-todo-due-date"
Time remaining  → data-testid="test-todo-time-remaining"
Status indicator → data-testid="test-todo-status"
Checkbox → data-testid="test-todo-complete-toggle"
Categories list → data-testid="test-todo-tags"
Each tag can optionally have: data-testid="test-todo-tag-{tag-name}"
"Edit" button/icon → data-testid="test-todo-edit-button"
"Delete" button/icon → data-testid="test-todo-delete-button"


NOTE:

All due dates and hints must be formatted nicely (e.g  "Due Feb 18, 2026", "Due in 3 days", "Overdue by 2 hours"e.t.c) and must be accurate to the current time. Update the data reasonably (about once every 30 - 60 seconds). 
 The checkbox must be a real <input type="checkbox"> or properly labeled button with role="checkbox".


HTML & Semantics Recommendations

Card root → <article> or <section role="region">
Title → <h2> or <h3>
Description → <p>
Priority & Status → <span> or <strong>
Add aria-label if visual-only
Due date & time-remaining → <time> element (with datetime attribute if possible)
Checkbox → real <input type="checkbox"> + <label>
Tags → <ul role="list"> of <li>
OR <div role="list"> with chips
Buttons → <button> (not <div>)
Add aria-label if icon-only

Optional (Bonus Points):
Basic tests (React Testing Library / Vitest / Cypress)


for the design aspect use the picture above 

make sure you update the readme 
including:
How to run locally
Decisions made
Any trade-offs