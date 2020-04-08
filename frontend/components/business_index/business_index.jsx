import React from "react";
import BusinessIndexItem from "./business_index_item";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    debugger;
    const businesses = this.props.businesses.map((business) => {
      return <BusinessIndexItem key={business.id} business={business} />;
    });
    return <ul>{businesses}</ul>;
  }
}

export default BusinessIndex;
