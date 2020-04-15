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
