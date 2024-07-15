import html from "../core.js";
import TodoItem from "./TodoItem.js";
import { connect } from "../store.js";

const connector = connect();

function TodoList({ todos }) {
  return html`
    <section class="main">
      <input class="toggle-all" id="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.map((todo, index) => TodoItem({ todo, index }))}
      </ul>
    </section>
  `;
}

export default connector(TodoList);
