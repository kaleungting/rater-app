export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
import * as ReviewApiUtil from "../util/review_api_util";

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  reviewId: review.id,
});

export const createReview = (review) => (dispatch) =>
  ReviewApiUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
  );

export const updateReview = (review) => (dispatch) =>
  ReviewApiUtil.updateReview(review).then((review) =>
    dispatch(receiveReview(review))
  );

export const deleteReview = (review) => (dispatch) =>
  ReviewApiUtil.deleteReview(review).then((review) =>
    dispatch(removeReview(review))
  );
