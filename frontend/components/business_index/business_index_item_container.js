import { connect } from "react-redux";
import BusinessIndexItem from "./business_index_item";
import { fetchCategories } from "../../actions/business_actions";

const msp = (state) => ({
  categories: Object.values(state.entities.categories),
  reviews: Object.values(state.entities.reviews),
});

const mdp = (dispatch) => ({
  fetchCategories: (businessId) => dispatch(fetchCategories(businessId)),
});

export default connect(msp, mdp)(BusinessIndexItem);
