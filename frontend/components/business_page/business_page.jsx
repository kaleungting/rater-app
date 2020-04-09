import React from "react";

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  render() {
    const { business } = this.props;
    if (!business) {
      return <div></div>;
    }
    return (
      <div className="business-page-container">
        <h1>{business.name}</h1>
        <ul>
          <li>{business.address}</li>
          <li>{business.state}</li>
          <li>{business.city}</li>
          <li>{business.opening_hours}</li>
        </ul>
      </div>
    );
  }
}

export default BusinessPage;
