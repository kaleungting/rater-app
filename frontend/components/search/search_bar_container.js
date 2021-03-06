import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { searchBusinesses } from "../../actions/business_actions";

const msp = (state, ownProps) => ({
  placeholder: ownProps.placeholder,
});

const mdp = (dispatch) => ({
  searchBusinesses: (query) => dispatch(searchBusinesses(query)),
});

export default connect(msp, mdp)(SearchBar);
