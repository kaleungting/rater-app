import React from "react";
import { Link } from "react-router-dom";

const BusinessIndexItem = ({ business, idx }) => (
  <li className="business-index-item">
    <div className="business-img">
      <img src={business.profile_picture} />
    </div>
    <div className="business-info-container">
      <div className="business-info">
        <div className="business-name">
          {idx}. <Link to={`/businesses/${business.id}`}>{business.name}</Link>
        </div>
        <ul className="business-price-category">
          <li>{business.price_range}</li>
          <li>
            <i className="fas fa-circle"></i>
          </li>
          {business.categories.map((category) => {
            return (
              <li key={category.id}>
                <a href="">{category.category}</a>
              </li>
            );
          })}
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

export default BusinessIndexItem;
