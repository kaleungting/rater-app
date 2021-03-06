import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
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
      <div className="right-nav">
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
      <div className="right-nav">
        <Link id="login-btn" to="/login">
          Log In
        </Link>
        <Link id="signup-btn" to="/signup">
          Sign Up
        </Link>
      </div>
    );

    const leftNav = (
      <div className="left-nav">
        <Link
          to={{
            pathname: "/businesses",
            state: { prevPath: location.pathname },
          }}
          className="left-nav-link"
        >
          Write A Review
        </Link>
        <a
          href="https://github.com/kaleungting/rater-app"
          target="blank"
          className="left-nav-link"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/ken-ting-752a1768/"
          target="blank"
          className="left-nav-link"
        >
          LinkedIn
        </a>
      </div>
    );
    return (
      <div className="nav">
        {leftNav}
        {rightNav}
      </div>
    );
  }
}

export default Nav;
