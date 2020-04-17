import React from "react";
import BusinessIndexItemContainer from "./business_index_item_container";
import BusinessNavContainer from "../business_nav/business_nav_container";
import BusinessMap from "../map/business_map";
import { withRouter } from "react-router-dom";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (
      this.props.location.pathname !== "/businesses-search" &&
      (this.props.businesses.length === 0 || this.props.businesses.length === 1)
    ) {
      this.props.fetchBusinesses();
    }
  }

  render() {
    const { businesses } = this.props;
    const businessList = this.props.businesses.map((business, idx) => {
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
        <BusinessNavContainer
          searchBusinesses={this.props.searchBusinesses}
          fetchBusinesses={this.props.fetchBusinesses}
        />
        <div className="business-index-container">
          <ul className="business-index-content">{businessList}</ul>
          <div className="business-index-side">
            <BusinessMap businesses={businesses} />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(BusinessIndex);
