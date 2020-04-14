export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
import * as ReviewApiUtil from "../util/review_api_util";

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const fetchReviews = (businessId) => {
    return (dispatch) => {
        return ReviewApiUtil.fetchReviews(businessId).then((reviews) => {
            return dispatch(receiveReviews(reviews));
        });
    };
};