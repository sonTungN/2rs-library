export default function logger(reducer) {
  // state is the prevState then return the nextState
  return (state, action, args) => {
    console.group(action);
    console.log("Prev state: ", state);
    console.log("Action arguments: ", args);

    const nextState = reducer(state, action, args);
    console.log("Next state: ", nextState);

    console.groupEnd();
    return nextState;
  };
}
