import React from "react";
import { withRouter } from "react-router-dom";

class HomeSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      location: "New York City",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .searchBusinesses(this.state)
      .then(() => this.props.history.push("/businesses/search"));
  }

  render() {
    return (
      <div className="home-page-search-container">
        <form onSubmit={this.handleSubmit} className="home-search-bar-nav">
          <div className="home-search-container">
            <span>Find</span>
            <input
              type="text"
              value={this.state.query}
              onChange={this.update("query")}
              placeholder={this.props.placeholder}
            />
          </div>
          <div className="home-search-container">
            <span>Near</span>
            <input
              type="text"
              onChange={this.update("location")}
              value={this.state.location}
              placeholder="address or city"
            />
            <div className="home-search-submit">
              <button className="home-btn-search-submit">
                <i className="fas fa-search fa-2x"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(HomeSearchBar);