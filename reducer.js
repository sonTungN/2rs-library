const init = {
  cars: ["BMW", "Audi"],
};

export default function reducer(state = init, action, args) {
  console.log(action, args);
  switch (action) {
    case "Add":
      const [newCar] = args;
      return {
        ...state,
        cars: [...state.cars, newCar],
      };

    default:
      return state;
  }
}
