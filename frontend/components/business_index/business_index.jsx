import React from "react";
import BusinessIndexItem from "./business_index_item";
import BusinessNavContainer from "../business_nav/business_nav_container";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const businesses = this.props.businesses.map((business, idx) => {
      return (
        <BusinessIndexItem
          key={business.id}
          business={business}
          idx={idx + 1}
        />
      );
    });
    return (
      <>
        <BusinessNavContainer />
        <div className="business-index-container">
          <ul className="business-index-content">{businesses}</ul>
        </div>
      </>
    );
  }
}

export default BusinessIndex;
