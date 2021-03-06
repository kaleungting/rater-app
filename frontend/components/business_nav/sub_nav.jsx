import React from "react";
import { withRouter } from "react-router-dom";

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      location: "",
      price_range: "",
    };
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(price_range) {
    this.setState({ price_range: price_range });
  }

  componentDidUpdate(prevProps, prevState) {
    const currentState = this.state;
    if (prevState !== currentState) {
      this.props
        .searchBusinesses(currentState)
        .then(() => this.props.history.push("/businesses-filter"));
    }
  }

  handleClick() {
    this.props
      .fetchBusinesses()
      .then(() => this.props.history.push("/businesses"));
    this.setState({
      query: "",
      location: "",
      price_range: "",
    });
  }

  render() {
    let businessLink;
    if (this.props.match.params.businessId === undefined) {
      businessLink = "#/businesses";
    } else {
      businessLink = `#/biz/${this.props.match.params.businessId}/reviews/new`;
    }
    return (
      <div className="sub-nav-container">
        <div className="sub-nav-content">
          <ul className="sub-nav-left">
            <div className="sub-nav-businesses">
              <li onClick={this.handleClick}>
                <i className="fas fa-utensils"></i>
                <span>Restaurants</span>
              </li>
            </div>
            <li className="sub-nav-sites">
              <i className="fas fa-dollar-sign"></i>
              Price Range
              <ul className="price-popup">
                <li onClick={() => this.update("$")}>$</li>
                <li onClick={() => this.update("$$")}>$$</li>
                <li onClick={() => this.update("$$$")}>$$$</li>
                <li onClick={() => this.update("$$$$")}>$$$$</li>
              </ul>
            </li>
            <li className="sub-nav-contact">
              Contact Ken
              <ul className="contact-popup">
                <li>
                  <a href="https://github.com/kaleungting" target="blank">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://kaleungting.github.io" target="blank">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ken-ting-752a1768/"
                    target="blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="sub-nav-review">
            <a href={businessLink}>
              <i className="fas fa-pencil-alt"></i>
              <span>Write A Review</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SubNav);
