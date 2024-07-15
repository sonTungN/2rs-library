import html from "../library/core.js";
import { connect } from "../library/store.js";

function TodoItem({ todo, index, editIndex }) {
  return html`
    <li
      class="
        ${todo.completed && "completed"} 
        ${editIndex === index && "editing"}"
    >
      <div class="view">
        <input
          ${todo.completed && "checked"}
          class="toggle"
          type="checkbox"
          onchange="dispatch('Toggle', ${index})"
        />
        <label ondblclick="dispatch('StartEdit', ${index})"
          >${todo.title}</label
        >
        <button
          class="destroy"
          onclick="dispatch('Destroy', ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('EndEdit', event.target.value.trim()) || event.keyCode === 27 && dispatch('CancelEdit')"
        onblur="dispatch('EndEdit', event.target.value.trim())"
      />
    </li>
  `;
}

export default connect()(TodoItem);
