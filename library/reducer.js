import storage from "../util/storage.js";

const init = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editIndex: null,
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

  Destroy({ todos }, index) {
    todos.splice(index, 1);
    storage.set(todos);
  },

  SwitchFilter(state, currentFilter) {
    state.filter = currentFilter;
  },

  ClearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
    storage.set(state.todos);
  },

  StartEdit(state, index) {
    state.editIndex = index;
  },

  EndEdit(state, title) {
    if (state.editIndex !== null) {
      if (title) {
        state.todos[state.editIndex].title = title;
        storage.set(state.todos);
      } else {
        this.Destroy(state, state.editIndex);
      }
    }
    state.editIndex = null;
  },

  CancelEdit(state) {
    state.editIndex = null;
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, args);
  return state;
}
