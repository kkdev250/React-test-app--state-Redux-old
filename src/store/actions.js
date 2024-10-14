import { INCREMENT, SET_VALUE } from "./actionTypes";

export const increment = () => ({
  type: INCREMENT,
});

export const setValue = value => ({
  type: SET_VALUE,
  payload: { value },
});

export const setValueAsync = value => dispatch => {
  setTimeout(() => {
    dispatch(setValue(value));
  }, 1000);
};

export const incrementAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
}