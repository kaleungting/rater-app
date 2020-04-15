import { connect } from "react-redux";
import BusinessIndexItem from "./business_index_item";
import { searchBusinesses } from "../../util/business_api_util";

const msp = (state) => ({
  categories: Object.values(state.entities.categories),
  reviews: Object.values(state.entities.reviews),
});

const mdp = (dispatch) => ({
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
});

export default connect(msp, mdp)(BusinessIndexItem);
