import html from "../library/core.js";
import { connect } from "../library/store.js";

function Footer({ todos, filter, filters }) {
  return html`
    <footer class="footer">
      <span class="todo-count">
        <strong>${todos.filter(filters.active).length}</strong>
        ${todos.filter(filters.active).length > 1 ? "items left" : "item left"}
      </span>

      <ul class="filters">
        ${Object.keys(filters).map(
          (category) => html`
            <li>
              <a
                class="${filter === category && "selected"}"
                href="#"
                onclick="dispatch('SwitchFilter', '${category}')"
              >
                ${category[0].toUpperCase() + category.slice(1)}
              </a>
            </li>
          `,
        )}
      </ul>
      ${todos.filter(filters.completed).length > 0 &&
      html`
        <button class="clear-completed" onclick="dispatch('ClearCompleted')">
          Clear completed
        </button>
      `}
    </footer>
  `;
}

export default connect()(Footer);
