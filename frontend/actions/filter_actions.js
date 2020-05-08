export const UPDATE_FILTER = "UPDATE_FILTER";
import { fetchBusinesses } from "./business_actions";

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchBusinesses(getState().ui.filters)(dispatch);
};

// export const updateBounds = (bounds) => (dispatch) =>
//   fetchBusinesses(bounds).then((bounds) => dispatch(changeBounds(bounds)));
