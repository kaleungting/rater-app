import React from "react";
import NavContainer from "../nav/nav_container";
import HomeSearchBarContainer from "../search/home_search_bar_container";

const Homepage = () => {
  return (
    <div className="home-main-container">
      <NavContainer />
      <HomeSearchBarContainer />
    </div>
  );
};

export default Homepage;
