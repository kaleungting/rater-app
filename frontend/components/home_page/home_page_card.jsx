import React from "react";
import { Link } from "react-router-dom";
class HomePageCard extends React.Component {
  render() {
    const { biz, categories } = this.props;
    const categoriesList = categories.map((category, idx) => {
      if (biz.categoryIds && biz.categoryIds.includes(category.id)) {
        return <li key={idx}>{category.category}</li>;
      } else {
        return "";
      }
    });

    const reviewText =
      biz.reviewIds.length > 1
        ? `${biz.reviewIds.length} reviews`
        : `${biz.reviewIds.length} review`;
    return (
      <Link to={`/businesses/${biz.id}`}>
        <li className="biz-index-item">
          <div className="biz-img">
            <img src={biz.profile_picture} />
          </div>
          <div className="biz-info-container">
            <div className="biz-info">
              <p className="biz-name">{biz.name}</p>
              <div className="biz-rating">
                <img
                  className={
                    `stars-medium-${Math.floor(biz.average_rating * 2)}` +
                    " stars-medium"
                  }
                  src="https://i.imgur.com/UkZkm0D.png"
                ></img>
                <span>{reviewText}</span>
              </div>
              <ul className="biz-price-category">
                <li>{biz.price_range}</li>
                <li>
                  <i className="fas fa-circle"></i>
                </li>
                {categoriesList}
              </ul>
            </div>
            <div className="biz-address">
              <ul>
                <li>{biz.phone}</li>
                <li>{biz.address}</li>
                <li>{biz.city}</li>
              </ul>
            </div>
          </div>
        </li>
      </Link>
    );
  }
}

export default HomePageCard;
