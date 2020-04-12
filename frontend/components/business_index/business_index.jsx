import React from "react";
import BusinessIndexItem from "./business_index_item";
import BusinessNav from "../business_nav/business_nav";
import BusinessMap from "../map/business_map";

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
        <BusinessNav searchBusinesses={this.props.searchBusinesses} />
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
