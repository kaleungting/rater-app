import React from "react";
import BusinessNavContainer from "../business_nav/business_nav_container";
import { Link } from "react-router-dom";

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.businessId !== this.props.match.params.businessId
    ) {
      this.props.fetchBusiness(this.props.match.params.businessId);
    }
  }

  render() {
    const { business } = this.props;
    if (!business) {
      return <div></div>;
    }
    return (
      <div>
        <BusinessNavContainer />
<<<<<<< HEAD
        <div className="business-top-container">
          <div className="business-header">
            <h1>{business.name}</h1>
            <ul>
              <li>{business.address}</li>
              <li>{business.state}</li>
              <li>{business.city}</li>
              <li>{business.opening_hours}</li>
            </ul>
=======
        <div className="business-page-container">
          <div className="top-header">
            <div className="top-header-left">
              <div className="top-header-title">
                <h1>{business.name}</h1>
                <i className="fas fa-check-circle"></i>
                <span>Claimed</span>
              </div>
              <div className="business-review"></div>
              <ul className="business-price-category">
                <li>{business.price_range}</li>
                <li>
                  <i className="fas fa-circle"></i>
                </li>
                {business.categories.map((category) => {
                  return <li key={category.id}>{category.category}</li>;
                })}
              </ul>
            </div>
            <div className="top-header-right">
              <Link to="/businesses/:businessId/reviews">
                <i className="fas fa-star"></i>
                Write a Review
              </Link>
              <div className="business-btns">
                <button>
                  <i className="material-icons">add_a_photo</i>
                  <span>Add Photo</span>
                </button>
                <button>
                  <i className="material-icons">share</i>
                  <span>Add Photo</span>
                </button>
                <button>
                  <i className="material-icons">bookmark</i>
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>

          <div className="top-sub-header">
            <div className="map-container">
              <div className="business-location">Map</div>
              <div>
                <ul className="business-info">
                  <li>
                    <i className="material-icons">place</i>
                    {business.address}
                  </li>
                  <li>
                    <i className="material-icons">k</i>
                    {business.city}, {business.state}, {business.zipcode}
                  </li>
                  <li>
                    <i className="material-icons">directions</i>
                    <a href="/">Get directions</a>
                  </li>
                  <li>
                    <i className="material-icons">phone</i>
                    {business.phone}
                  </li>
                  <li>
                    <i className="material-icons">open_in_browser</i>
                    <a href="">{business.url}</a>
                  </li>
                </ul>
              </div>
            </div>
>>>>>>> newbusiness
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessPage;

// <div className="business-category">
//   <ul>
//     {business.categories.map((category) => {
//       return <li>{category.category}</li>;
//     })}
//   </ul>
// </div>
