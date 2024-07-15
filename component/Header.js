import html from "../core.js";

function Header() {
  return html`
    <header class="header">
      <h1>todos</h1>
      <input
        autofocus
        class="new-todo"
        placeholder="What needs to be done?"
        id="new-todo"
        onkeyup="event.keyCode === 13 && dispatch('Add', event.target.value.trim())"
      />
    </header>
  `;
}

export default Header;
