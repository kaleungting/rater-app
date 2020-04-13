import React from "react";
import { Link } from "react-router-dom";

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      location: "",
      price_range: "",
    };
    // this.filter = this.filter.bind(this);
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(price_range) {
    this.setState({ price_range: price_range });
    // this.props.searchBusinesses(this.state);
  }

  // componentDidMount() {
  //   this.setState({
  //     query: "",
  //     location: "",
  //     price_range: "",
  //   });
  // }

  componentDidUpdate(prevProps, prevState) {
    const currentState = this.state;
    if (prevState !== currentState) {
      this.props.searchBusinesses(currentState);
    }
  }

  handleClick() {
    // this.setState({
    //   query: "",
    //   location: "",
    //   price_range: "",
    // });
    this.props.fetchBusinesses();
  }

  render() {
    return (
      <div className="sub-nav-container">
        <div className="sub-nav-content">
          <ul className="sub-nav-left">
            <div className="sub-nav-businesses">
              <li onClick={this.handleClick}>
                <Link to="/businesses">
                  <i className="fas fa-utensils"></i>
                  <span>Restaurants</span>
                </Link>
              </li>
            </div>
            <li className="sub-nav-sites">
              Price Range
              <ul className="sites-popup">
                <li onClick={() => this.update("$")}>$</li>
                <li onClick={() => this.update("$$")}>$$</li>
                <li onClick={() => this.update("$$$")}>$$$</li>
                <li onClick={() => this.update("$$$$")}>$$$$</li>
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
  }
}

export default SubNav;
