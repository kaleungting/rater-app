export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
import * as BusinessApiUtil from "../util/business_api_util";

const receiveAllBusinesses = (businesses) => ({
  type: RECEIVE_ALL_BUSINESSES,
  businesses,
});

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business,
});

export const fetchBusinesses = () => {
  return (dispatch) => {
    BusinessApiUtil.fetchBusinesses().then((businesses) => {
      dispatch(receiveAllBusinesses(businesses));
    });
  };
};

export const fetchBusiness = (businessId) => (dispatch) =>
  BusinessApiUtil.fetchBusiness(businessId).then((business) =>
    dispatch(receiveBusiness(business))
  );

export const searchBusinesses = (search) => {
  return (dispatch) => {
    BusinessApiUtil.searchBusinesses(search).then((businesses) => {
      dispatch(receiveAllBusinesses(businesses));
    });
  };
};
