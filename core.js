export default function html([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, cur) => {
        return acc.concat(cur, strings.shift());
      },
      [first],
    )
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
}

export function createStore(reducer) {
  // As an object may have many states
  // Ex: cars, price, users, ... Choose a state to be displayed
  let state = reducer();

  const roots = new Map();

  // Render it out in `VIEW`
  function render() {
    for (const [root, component] of roots) {
      root.innerHTML = component();
    }
  }

  return {
    attach(component, root) {
      roots.set(root, component);
      render();
    },

    // Select which `state` will be displayed
    // in the following "selector"
    connect(selector = (state) => state) {
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
}
