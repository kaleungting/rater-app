import React from "react";
import { Link } from "react-router-dom";

const BusinessIndexItem = ({ business, idx }) => (
  <li className="business-index-item">
    <div className="business-img">
      <img src={businessImg} />
    </div>
    <div className="business-info-container">
      <div className="business-name">
        {idx}. <Link to={`/businesses/${business.id}`}>{business.name}</Link>
      </div>
      <div className="business-detail">
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
