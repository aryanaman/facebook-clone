//initial state of the data layer
export const initialState = {
  user: null,
};

//some actions (we can dipatch these action into data layer)
export const actionTypes = {
  SET_USER: "SET_USER",
};

//according to action get return
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
