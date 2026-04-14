# Task-card-HNG


#  Testable Todo Item Card - Stage 0

A high-fidelity, accessible, and test-ready Todo Item component designed for modern productivity applications.

##  How to Run Locally

1.  **Download** the `index.html` file.
2.  **Open** the file in any modern web browser (Chrome, Safari, Firefox, Edge).
3.  **No dependencies required**: Styles are handled via Tailwind CSS CDN.

##  Decisions & Architecture

* **Design Philosophy**: Used a "Bento-grid" style card with a large corner radius (`2.5rem`) and a soft background palette (#F8FAF9) to ensure a premium startup aesthetic.
* **Color Palette**: Primary action colors use deep forest greens (`#1a4d2e`) for high contrast and a professional feel.
* **Dynamic Logic**: The "Time Remaining" uses a JavaScript interval that recalculates every 60 seconds relative to a dynamic `targetDate` object, ensuring the values stay accurate for the reviewer.
* **Responsive Strategy**: Used a fluid grid. On mobile (<640px), the card takes full width with slightly reduced padding; on desktop, it caps at `480px`.

##  Trade-offs

* **Tailwind CDN**: While excellent for portability and rapid testing (Stage 0), a production build would use a compiled CSS version to avoid the tiny flash of unstyled content (FOUC) and improve performance.
* **Vanilla JS over Framework**: I chose Vanilla JS to ensure zero setup time for the reviewer while meeting all logic requirements (checkbox toggles, dynamic time).

##  Accessibility (A11y) Highlights

* **Semantic Elements**: Used `<article>` for the card, `<time>` for dates, and `<button>` for actions.
* **Aria Roles**: Added `aria-label` to icon-only buttons and the priority badge. 
* **Aria-Live**: The time-remaining element is wrapped in `aria-live="polite"` to notify screen readers of updates if the time shifts while they are on the card.
* **Focus Management**: Custom `focus-visible` rings ensure keyboard users can easily see their active element.