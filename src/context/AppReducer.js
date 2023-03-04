export const initialState = {
  basket: [],
  user: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.product],
      };
    default:
      return state;
  }
};

export default AppReducer;
