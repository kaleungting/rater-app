import React from "react";
import { Link } from "react-router-dom";

const SubNav = () => (
  <div className="sub-nav-container">
    <div className="sub-nav-content">
      <ul className="sub-nav-left">
        <div className="sub-nav-businesses">
          <li>
            <a href="#/businesses">
              <i className="fas fa-utensils"></i>
              <span>Restaurants</span>
            </a>
          </li>
        </div>
        <li className="sub-nav-sites">
          Ken's Sites
          <ul className="sites-popup">
            <li>Testing</li>
            <li>Testing</li>
            <li>Testing</li>
          </ul>
        </li>
        <li className="sub-nav-contact">
          Contact Ken
          <ul className="contact-popup">
            <li>Testing</li>
            <li>Testing</li>
            <li>Testing</li>
          </ul>
        </li>
      </ul>
      <div className="sub-nav-review">
        <a href="#/businesses">
          <i className="fas fa-pencil-alt"></i>
          <span>Write A Review</span>
        </a>
      </div>
    </div>
  </div>
);

export default SubNav;
