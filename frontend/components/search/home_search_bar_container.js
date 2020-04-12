import { connect } from "react-redux";
import HomeSearchBar from "./home_search_bar";
import { searchBusinesses } from "../../actions/business_actions";

const msp = (ownProps) => ({
  placeholder: ownProps.placeholder,
});

const mdp = (dispatch) => ({
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
});

export default connect(msp, mdp)(HomeSearchBar);
