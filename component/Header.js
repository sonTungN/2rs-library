import html from "../core.js";

function Header() {
  return html`
    <header class="header">
      <h1>todos</h1>
      <input autofocus class="new-todo" placeholder="What needs to be done?" />
    </header>
  `;
}

export default Header;
