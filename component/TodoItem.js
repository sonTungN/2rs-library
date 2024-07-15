import html from "../core.js";

function TodoItem({ todo, index }) {
  return html`
    <li class="${todo.completed && "completed"}">
      <div class="view">
        <input
          ${todo.completed && "checked"}
          class="toggle"
          type="checkbox"
          onchange="dispatch('Toggle', ${index})"
        />
        <label>${todo.title}</label>
        <button
          class="destroy"
          onclick="dispatch('Destroy', ${index})"
        ></button>
      </div>
      <input class="edit" value="${todo.title}" />
    </li>
  `;
}

export default TodoItem;
