import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from "../actions/review_actions";
import {
  RECEIVE_BUSINESS,
  RECEIVE_ALL_BUSINESSES,
} from "../actions/business_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      const newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, action.reviews);
    default:
      return state;
  }
};

export default reviewsReducer;
