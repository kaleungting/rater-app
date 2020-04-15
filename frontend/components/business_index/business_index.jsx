import React from "react";
import BusinessIndexItemContainer from "./business_index_item_container";
import BusinessNav from "../business_nav/business_nav";
import BusinessMap from "../map/business_map";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   query: "",
    //   location: "",
    //   price_range: "",
    // };
  }

  componentDidMount() {
    // this.props.fetchCategories(this.props.business.id);
    // if (this.props.location.pathname !== "/businesses-search") {
    this.props.fetchBusinesses();
    // }
  }

  render() {
    const businesses = this.props.businesses.map((business, idx) => {
      return (
        <BusinessIndexItemContainer
          key={business.id}
          business={business}
          idx={idx + 1}
        />
      );
    });
    return (
      <>
        <BusinessNav
          searchBusinesses={this.props.searchBusinesses}
          fetchBusinesses={this.props.fetchBusinesses}
        />
        <div className="business-index-container">
          <ul className="business-index-content">{businesses}</ul>
          <div className="business-index-side">
            <BusinessMap />
          </div>
        </div>
      </>
    );
  }
}

export default BusinessIndex;
