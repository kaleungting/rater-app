import React from "react";
import { Link } from "react-router-dom";

class BusinessNav extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownHandler = this.dropdownHandler.bind(this);
  }

  dropdownHandler(e) {
    e.preventDefault();
    document.getElementById("dropdown").classList.toggle("show");
  }

  render() {
    const { currentUser, logout } = this.props;
    const userPic = <i className="fas fa-meh fa-2x"></i>;
    const rightNav = currentUser ? (
      <div className="business-right-nav">
        <div className="user-dropdown">
          <button className="btn-user-dropdown" onClick={this.dropdownHandler}>
            {userPic}
          </button>
          <div id="dropdown" className="dropdown-content-container">
            <div className="dropdown-content">
              <div className="dropdown-arrow"></div>
              <div className="dropdown-user-container">
                <div className="user-pic">{userPic}</div>

                <div className="user-content-container">
                  <div className="user-name">
                    {currentUser.first_name} {currentUser.last_name}
                  </div>
                </div>
              </div>

              <div className="dropdown-logout-container">
                <div className="dropdown-logout" onClick={logout}>
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="business-right-nav">
        <Link id="login-btn" to="/login">
          Log In
        </Link>
        <Link id="signup-btn" to="/signup">
          Sign Up
        </Link>
      </div>
    );

    const searchBar = (
      <div>
        <form className="search-bar-nav">
          <div className="search-container">
            <span>Find</span>
            <input type="text" placeholder="sushi, cafes, noodles" />
          </div>
          <div className="search-container">
            <span>Near</span>
            <input type="text" placeholder="address or city" />
            <div className="search-submit">
              <button className="btn-search-submit">
                <i className="fas fa-search fa-2x"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
    return (
      <div className="business-nav">
        <div className="business-nav-container">
          {searchBar}
          {rightNav}
        </div>
      </div>
    );
  }
}

export default BusinessNav;
