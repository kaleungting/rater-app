import React from "react";
import BusinessNavContainer from "../business_nav/business_nav_container";
import { Link } from "react-router-dom";
import BusinessMap from "../map/business_map";
import ReviewIndexContainer from "../reviews/review_index_container";

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasReview: false,
      businessId: this.props.businessId
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    const { business, categories, hasReview, reviewId } = this.props;

    if (!business) {
      return null;
    }

    let photosList;
    if (business.photos) {
      photosList = business.photos.map((photo, idx) => {
        return (
          <li key={`${photo}+${idx}`}>
            <img
              className="business-photos"
              id={`photo${idx}`}
              src={photo}
            ></img>
          </li>
        );
      });
    } else {
      photosList = "";
    }

    const reviewText =
      business.reviewIds.length > 1
        ? `${business.reviewIds.length} reviews`
        : `${business.reviewIds.length} review`;
    return (
      <div>
        <BusinessNavContainer
          searchBusinesses={this.props.searchBusinesses}
          business={business}
        />
        <div className="business-header">
          <ul className="business-photos-container">
            <ul>{photosList}</ul>
          </ul>
          <div className="business-page-container">
            <div className="business-left">
              <div className="top-header">
                <div className="top-header-left">
                  <div className="top-header-title">
                    <h1>{business.name}</h1>
                    <i className="fas fa-check-circle"></i>
                    <span>Claimed</span>
                  </div>
                  <div className="business-review">
                    <img
                      className={
                        `stars-large-${Math.round(
                          business.average_rating * 2
                        )}` + " stars-large"
                      }
                      src="https://i.imgur.com/UkZkm0D.png"
                    ></img>
                    {reviewText}
                  </div>
                  <ul className="business-price-category">
                    <li>{business.price_range}</li>
                    <li>
                      <i className="fas fa-circle"></i>
                    </li>
                    {categories.map((category) => {
                      return <li key={category.id}>{category.category}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="top-header-right">
                {hasReview
                  ? <Link to={`/biz/${business.id}/reviews/${reviewId}/edit`}>
                    <i className="fas fa-star"></i>
                      Edit a Review
                    </Link>
                  : <Link to={`/biz/${business.id}/reviews/new`}>
                    <i className="fas fa-star"></i>
                      Write a Review
                    </Link>
                }
                <div className="business-btns">
                  <button>
                    <i className="material-icons">add_a_photo</i>
                    <span>Add Photo</span>
                  </button>
                  <button>
                    <i className="material-icons">share</i>
                    <span>Share</span>
                  </button>
                  <button>
                    <i className="material-icons">bookmark</i>
                    <span>Save</span>
                  </button>
                </div>
              </div>
              <div className="top-sub-header">
                <div className="map-container">
                  <div className="business-location">
                    <BusinessMap
                      business={business}
                      updateBounds={this.props.updateBounds}
                    />
                  </div>
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
                    </ul>
                  </div>
                </div>
                <div className="sidebar-hours">
                  <div className="sidebar-sub-title">Hours</div>
                  <ul className="sidebar-list">
                    <li className="sidebar-hours-item">
                      <div className="sidebar-hours-day">Mon</div>
                      <div className="sidebar-hours-times">
                        {business.opening_hours}
                      </div>
                    </li>
                    <li className="sidebar-hours-item">
                      <div className="sidebar-hours-day">Tue</div>
                      <div className="sidebar-hours-times">
                        {business.opening_hours}
                      </div>
                    </li>
                    <li className="sidebar-hours-item">
                      <div className="sidebar-hours-day">Wed</div>
                      <div className="sidebar-hours-times">
                        {business.opening_hours}
                      </div>
                    </li>
                    <li className="sidebar-hours-item">
                      <div className="sidebar-hours-day">Thu</div>
                      <div className="sidebar-hours-times">
                        {business.opening_hours}
                      </div>
                    </li>
                    <li className="sidebar-hours-item">
                      <div className="sidebar-hours-day">Fri</div>
                      <div className="sidebar-hours-times">
                        {business.opening_hours}
                      </div>
                    </li>
                    <li className="sidebar-hours-item">
                      <div className="sidebar-hours-day">Sat</div>
                      <div className="sidebar-hours-times">
                        {business.opening_hours}
                      </div>
                    </li>
                    <li className="sidebar-hours-item">
                      <div className="sidebar-hours-day">Sun</div>
                      <div className="sidebar-hours-times">
                        {business.opening_hours}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="business-main-content">
                <ReviewIndexContainer business={business} />
              </div>
            </div>
            <div className="business-right">
              <div className="business-side-container">
                <div className="business-sticky">
                  <ul>
                    <li>
                      <i className="material-icons">directions</i>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${business.lat},${business.lng}`}
                      >
                        Get directions
                      </a>
                    </li>
                    <li>
                      <i className="material-icons">phone</i>
                      <a href="">{business.phone}</a>
                    </li>
                    <li>
                      <i className="material-icons">open_in_browser</i>
                      <a href="">{business.url}</a>
                    </li>
                    <li>
                      <i className="material-icons">menu_book</i>
                      <a href="">Full Menu</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessPage;
