import React from "react";
import { Link } from "react-router-dom";

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { business, idx, categories } = this.props;
    const categoriesList = categories.map((category, idx) => {
      if (business.categoryIds && business.categoryIds.includes(category.id)) {
        return <li key={idx}>{category.category}</li>;
      } else {
        return "";
      }
    });

    const reviewText =
      business.reviewIds.length > 1
        ? `${business.reviewIds.length} reviews`
        : `${business.reviewIds.length} review`;
    return (
      <Link to={`/businesses/${business.id}`}>
        <li className="business-index-item">
          <div className="business-img">
            <img src={business.profile_picture} />
          </div>
          <div className="business-info-container">
            <div className="business-info">
              <p className="business-name">
                {idx}. {business.name}
              </p>
              <div className="business-rating">
                <img
                  className={
                    `stars-medium-${Math.floor(business.average_rating * 2)}` +
                    " stars-medium"
                  }
                  src="https://i.imgur.com/UkZkm0D.png"
                ></img>
                <span>{reviewText}</span>
              </div>
              <ul className="business-price-category">
                <li>{business.price_range}</li>
                <li>
                  <i className="fas fa-circle"></i>
                </li>
                {categoriesList}
              </ul>
            </div>
            <div className="business-address">
              <ul>
                <li>{business.phone}</li>
                <li>{business.address}</li>
                <li>{business.city}</li>
              </ul>
            </div>
          </div>
        </li>
      </Link>
    );
  }
}
export default BusinessIndexItem;
