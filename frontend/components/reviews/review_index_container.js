import { connect } from "react-redux";
import {
    fetchBusiness,
    fetchBusinesses,
    searchBusinesses,
} from "../../actions/business_actions";
import { deleteReview } from "../../actions/review_actions";
import {
    selectCategoriesForBusiness,
    selectReviewsForBusiness,
} from "../../reducers/selectors";
import ReviewIndex from "./review_index";
import { updateBounds } from "../../actions/filter_actions";

const msp = (state, ownProps) => {
    let currentUser;
    if (state.entities.users) {
        currentUser = state.entities.users;
    }
    const business = state.entities.businesses[ownProps.match.params.businessId];
    return {
        business,
        categories: selectCategoriesForBusiness(state, business),
        reviews: selectReviewsForBusiness(state, business),
        reviewers: state.entities.reviews.reviewers,
        currentUser,
    };
};

const mdp = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        searchBusinesses: (query) => dispatch(searchBusinesses(query)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        updateBounds: (bounds) => dispatch(updateBounds(bounds))
    };
};

export default connect(msp, mdp)(ReviewIndex);
