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
        return (
          <li key={category.id}>
            <a href="">{category.category}</a>
          </li>
        );
      } else {
        return <div key={idx}></div>;
      }
    });

    const reviewText =
      business.reviewIds.length > 1
        ? `${business.reviewIds.length} reviews`
        : `${business.reviewIds.length} review`;
    return (
      <li className="business-index-item">
        <div className="business-img">
          <img src={business.profile_picture} />
        </div>
        <div className="business-info-container">
          <div className="business-info">
            <div className="business-name">
              {idx}.{" "}
              <Link to={`/businesses/${business.id}`}>{business.name}</Link>
            </div>
            <div className="business-rating">
              <img
                className={
                  `stars-medium-${business.average_rating * 2}` +
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
    );
  }
}
export default BusinessIndexItem;
