import storage from "./util/storage.js";

const init = {
  todos: storage.get(),
};

const actions = {
  Add({ todos }, title) {
    if (title) {
      todos.push({ title, completed: false });
      storage.set(todos);
    }
  },

  Toggle({ todos }, index) {
    const todo = todos[index];
    todo.completed = !todo.completed;
    storage.set(todos);
  },

  ToggleAll({ todos }, completed) {
    console.log(completed);
    todos.forEach((todo) => (todo.completed = completed));
    storage.set(todos);
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, args);
  return state;
}
