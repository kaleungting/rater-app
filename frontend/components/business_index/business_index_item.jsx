import React from "react";
import { Link } from "react-router-dom";

const BusinessIndexItem = ({ business }) => (
  <li>
    <Link to={`/businesses/${business.id}`}>{business.name}</Link>
  </li>
);

export default BusinessIndexItem;
