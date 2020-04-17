import { connect } from "react-redux";
import HomePage from "./home_page";
import { fetchBusinesses } from "../../actions/business_actions";

const msp = (state) => {
  const businesses = Object.values(state.entities.businesses);
  const newArr = [];
  if (businesses.length !== 0) {
    for (let i = 0; i < 3; i++) {
      const rand = businesses[Math.floor(Math.random() * businesses.length)];
      if (!newArr.includes(rand)) {
        newArr.push(rand);
      }
    }
  }
  return {
    businesses: newArr,
    categories: Object.values(state.entities.categories),
  };
};

const mdp = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(msp, mdp)(HomePage);
