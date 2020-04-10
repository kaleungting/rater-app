import React from "react";

const FakeSidebar = ({ opening_hours }) => {
  return (
    <div className="fake-sidebar-container">
      <div className="sidebar-hours">
        <div className="sidebar-sub-title">Hours</div>
        <ul className="sidebar-list">
          <li className="sidebar-hours-item">
            <div className="sidebar-hours-day">Mon</div>
            <div className="sidebar-hours-times">{opening_hours}</div>
          </li>
          <li className="sidebar-hours-item">
            <div className="sidebar-hours-day">Tue</div>
            <div className="sidebar-hours-times">{opening_hours}</div>
          </li>
          <li className="sidebar-hours-item">
            <div className="sidebar-hours-day">Wed</div>
            <div className="sidebar-hours-times">{opening_hours}</div>
          </li>
          <li className="sidebar-hours-item">
            <div className="sidebar-hours-day">Thu</div>
            <div className="sidebar-hours-times">{opening_hours}</div>
          </li>
          <li className="sidebar-hours-item">
            <div className="sidebar-hours-day">Fri</div>
            <div className="sidebar-hours-times">{opening_hours}</div>
          </li>
          <li className="sidebar-hours-item">
            <div className="sidebar-hours-day">Sat</div>
            <div className="sidebar-hours-times">{opening_hours}</div>
          </li>
          <li className="sidebar-hours-item">
            <div className="sidebar-hours-day">Sun</div>
            <div className="sidebar-hours-times">{opening_hours}</div>
          </li>
        </ul>
      </div>

      <div className="sidebar-business-info">
        <div className="sidebar-sub-title">More business info</div>
        <ul className="sidebar-list">
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Has Dairy-free Options</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Has Halal Options</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Has Gluten-free Options</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Liked by Vegetarians</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Takes Reservations</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Delivery</div>
            <div className="sidebar-info-info">No</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Take-out</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Accepts Credit Cards</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Accepts Apple Pay</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Accepts Google Pay</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Accepts Cryptocurrency</div>
            <div className="sidebar-info-info">No</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Parking</div>
            <div className="sidebar-info-info">Garage, Validated</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Bike Parking</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Wheelchair Accessible</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Good for Kids</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Good for Groups</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Attire</div>
            <div className="sidebar-info-info">Casual</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Noise Level</div>
            <div className="sidebar-info-info">Average</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Good for Dancing</div>
            <div className="sidebar-info-info">No</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Coat Check</div>
            <div className="sidebar-info-info">No</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Smoking</div>
            <div className="sidebar-info-info">No</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Outdoor Seating</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Wi-Fi</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Has TV</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Waiter Service</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Has Pool Table</div>
            <div className="sidebar-info-info">No</div>
          </li>
          <li className="sidebar-info-item">
            <div className="sidebar-info-desc">Open to All</div>
            <div className="sidebar-info-info">Yes</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FakeSidebar;
