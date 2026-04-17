
# Task-card-HNG — Stage 1A (Advanced)

A stateful, interactive Todo Card component built with Vanilla JavaScript, featuring full CRUD (Update) capabilities, dynamic time management, and status synchronization.

## What’s New (Evolution from Stage 0)

Stage 1A transforms the "view-only" card into a functional micro-app. Key upgrades include:
* **Interactive Edit Mode**: A full form toggle that allows users to modify the task title, description, priority, and deadline.
* **Status Lifecycle**: A bi-directional sync between the checkbox and a status dropdown (Pending → In Progress → Done).
* **Content Density Management**: An Expand/Collapse toggle for long descriptions to maintain a clean UI.
* **Granular Time Logic**: A "heartbeat" timer that updates every 30 seconds, including "Overdue" detection and specific time-unit strings (e.g., "Due in 3 hours").

---

## Design Decisions

* **Priority Accents**: To improve "glanceability," I implemented a **double-indicator system**:
    * A **6px left-border accent** color-coded to the priority level.
    * A **Priority Dot** indicator next to the badge for internal consistency.
* **Visual State Feedback**: When a task is marked "Done," the card uses CSS filters (`grayscale`) and `opacity` changes to visually "recede," helping the user focus on active tasks.
* **Contextual Buttons**: The "Show More" toggle only appears if the description exceeds 2 lines of text, preventing unnecessary UI clutter.
* **State Management**: Used a **Centralized Sync Function** in JavaScript to ensure that changing the status dropdown immediately updates the checkbox and the countdown timer state.

---

##  Accessibility (A11y) Notes

* **Focus Management**: When entering **Edit Mode**, the script automatically focuses the first input field. Upon saving or cancelling, focus is returned to the "Edit" button to assist keyboard and screen-reader navigation.
* **ARIA States**: 
    * `aria-expanded`: Dynamically updates on the description toggle.
    * `aria-label`: Applied to all icon-only buttons (Pen, Trash, Check).
* **Keyboard Accessible**: All interactive elements (status select, expand toggle, and form controls) are reachable via `Tab` and triggerable via `Enter`/`Space`.
* **Semantic Transitions**: Used `<form>` for the edit state to ensure screen readers recognize the context shift from "content" to "input."

---

## Known Limitations

* **Ephemeral State**: As this is a frontend-only task, changes are stored in the DOM. Refreshing the browser will reset the card to its default values (No `LocalStorage` persistence in this version).
* **Single-Card Scope**: The logic is optimized for a single card. For a multi-card list, the ID-based selectors would need to be refactored to class-based relative selectors.
* **Browser Date Parsing**: The countdown relies on the `display-date` text format. Manually entering an obscure date format in Edit Mode might result in an "Invalid Date" output.

---

##  How to Run Locally

1. **Download** the `index.html`, `style.css`, and `script.js` files.
2. **Open** `index.html` in a browser.
3. **Test Edit Mode**: Click the Pen icon, change the date to the past to see the "Overdue" logic, or check the box to see the "Completed" state.

---
