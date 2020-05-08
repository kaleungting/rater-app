export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const CLEAR_BUSINESSES = "CLEAR_BUSINESSES";

import * as BusinessApiUtil from "../util/business_api_util";

const receiveAllBusinesses = (response) => ({
  type: RECEIVE_ALL_BUSINESSES,
  businesses: response.businesses,
  categories: response.categories,
  reviews: response.reviews,
});

const receiveBusiness = (response) => {
  return {
    type: RECEIVE_BUSINESS,
    business: response.business,
    categories: response.categories,
    reviews: response.reviews,
  };
};

export const clearBusinesses = () => ({
  type: CLEAR_BUSINESSES,
});

// export const fetchBusinesses = (bounds) => {
//   return (dispatch) => {
//     return BusinessApiUtil.fetchBusinesses(bounds).then((response) => {
//       return dispatch(receiveAllBusinesses(response));
//     });
//   };
// };
export const fetchBusinesses = (filters) => (dispatch) =>
  BusinessApiUtil.fetchBusinesses(filters).then((businesses) =>
    dispatch(receiveAllBusinesses(businesses))
  );

export const fetchBusiness = (businessId) => {
  return (dispatch) => {
    return BusinessApiUtil.fetchBusiness(businessId).then((response) => {
      return dispatch(receiveBusiness(response));
    });
  };
};

export const searchBusinesses = (search) => {
  return (dispatch) => {
    return BusinessApiUtil.searchBusinesses(search).then((businesses) => {
      return dispatch(receiveAllBusinesses(businesses));
    });
  };
};
