import React from "react";
import NavContainer from "../nav/nav_container";
import HomeSearchBarContainer from "../search/home_search_bar_container";
import HomePageCard from "./home_page_card";
class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusinesses();
  }

  render() {
    let bizList;
    if (this.props.businesses !== 0) {
      bizList = this.props.businesses.map((biz) => {
        return (
          <HomePageCard
            key={biz.id}
            biz={biz}
            categories={this.props.categories}
          />
        );
      });
    }
    return (
      <>
        <div className="home-main-container">
          <NavContainer />
          <div className="home-content-container">
            <img className="homepage-logo" src={logo}></img>
            <HomeSearchBarContainer />
          </div>
        </div>
        <div className="discover-container">
          <div className="discover-text">Discover New Restaurants</div>
          <ul className="discover-biz">{bizList}</ul>
        </div>
      </>
    );
  }
}

export default HomePage;
