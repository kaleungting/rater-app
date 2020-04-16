export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
import { fetchBusinesses } from "../util/business_api_util";

export const changeBounds = (businesses) => ({
  type: UPDATE_BOUNDS,
  businesses,
});

// export const updateBounds = (bounds) => {
//   return (dispatch) => {
//     return fetchBusinesses(bounds).then((businesses) => {
//       return dispatch(fetchBusinesses(businesses));
//     });
//   };
// };

export const updateBounds = (bounds) => (dispatch) =>
  fetchBusinesses(bounds).then((businesses) =>
    dispatch(changeBounds(businesses))
  );
