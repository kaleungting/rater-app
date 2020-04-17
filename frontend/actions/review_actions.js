export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
import * as ReviewApiUtil from "../util/review_api_util";

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  reviewId: review.id,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});

export const createReview = (review) => (dispatch) =>
  ReviewApiUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const updateReview = (review) => (dispatch) =>
  ReviewApiUtil.updateReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteReview = (review) => (dispatch) =>
  ReviewApiUtil.deleteReview(review).then(
    (review) => dispatch(removeReview(review)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
