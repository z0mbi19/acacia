import { createStore } from "redux";

const INITIAL_STATE_BURGER = {
  data: [true, false],
};

function burger(state = INITIAL_STATE_BURGER, action) {
  switch (action.type) {
    case "open":
      return { value: state.data[0] };
    case "close":
      return { value: state.data[1] };
    default:
      return state;
  }
}

const store = createStore(burger);

export default store;
