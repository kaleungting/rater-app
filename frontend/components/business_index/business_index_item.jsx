import React from "react";
import { Link } from "react-router-dom";

const BusinessIndexItem = ({ business, idx }) => (
  <li className="business-index-item">
    <div className="business-img"></div>
    <div>
      {idx}. <Link to={`/businesses/${business.id}`}>{business.name}</Link>
    </div>
    <div className="business-detail">
      <ul>
        <li>{business.number}</li>
        <li>{business.address}</li>
        <li>{business.city}</li>
      </ul>
    </div>
  </li>
);

export default BusinessIndexItem;
