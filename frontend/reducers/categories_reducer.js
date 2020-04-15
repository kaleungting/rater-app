import { RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS } from "../actions/business_actions";

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return Object.assign({}, state, action.categories);
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, action.categories);
    default:
      return state;
  }
};

export default categoriesReducer;
