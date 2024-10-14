import { SET_VALUE } from "../actionTypes";

const initialState = {
  value: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE: {
      const { value } = action.payload;
      return {
        ...state,
        value,
      };
    }
    default:
      return state;
  }
}
