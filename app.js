// Todo App — starter. Your logic goes here.
// Steps: https://skill-grid-weld.vercel.app/projects/todo-app

// TODO 1: Keep todos in an array. Each todo: { id, text, done }.
// TODO 2: Add a todo when the Add button is clicked (ignore empty input).
// TODO 3: Render the list. Clicking a todo toggles done. Delete removes it.
// TODO 4: Save todos to localStorage on every change; load them on start.
// TODO 5: Filters (All / Active / Completed) change only what is shown.
// TODO 6: Show "X tasks left" in #count.

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const countEl = document.getElementById("count");
