import { connect } from "../store.js";
import html from "../core.js";

const connector = connect();

function App() {
  return html` <h1>Hello World</h1> `;
}

export default connector(App);
