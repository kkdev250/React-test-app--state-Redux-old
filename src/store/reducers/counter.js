import { INCREMENT } from "../actionTypes";

const initialState = {
  value: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    default:
      return state;
  }
}
