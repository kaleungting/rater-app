import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      location: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBusinesses(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search-bar-nav">
          <div className="search-container">
            <span>Find</span>
            <input
              type="text"
              value={this.state.query}
              onChange={this.update("query")}
              placeholder={this.props.placeholder}
            />
          </div>
          <div className="search-container">
            <span>Near</span>
            <input
              type="text"
              onChange={this.update("location")}
              value={this.state.location}
              placeholder="address or city"
            />
            <div className="search-submit">
              <button className="btn-search-submit">
                <i className="fas fa-search fa-2x"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
