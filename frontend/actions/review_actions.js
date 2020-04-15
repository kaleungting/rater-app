export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
import * as ReviewApiUtil from "../util/review_api_util";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  reviewId: review.id
});

export const fetchReviews = (businessId) => {
  return (dispatch) => {
    return ReviewApiUtil.fetchReviews(businessId).then((reviews) => {
      return dispatch(receiveReviews(reviews));
    });
  };
};

export const createReview = (review) => (dispatch) =>
  ReviewApiUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
  );

export const updateReview = (review) => (dispatch) =>
  ReviewApiUtil.updateReview(review).then((review) =>
    dispatch(receiveReview(review))
  );

export const deleteReview = (reviewId) => (dispatch) =>
  ReviewApiUtil.deleteReview(reviewId).then((review) =>
    dispatch(removeReview(review))
  );
