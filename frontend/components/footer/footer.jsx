import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-nav">
          <div className="footer-about">
            <ul>
              <li className="topic">About</li>
              <li>
                <Link to="">Wiki</Link>
              </li>
              <li>
                <Link to="">Github</Link>
              </li>
              <li>
                <Link to="/">Back to Rater</Link>
              </li>
            </ul>
          </div>

          <div className="footer-discover">
            <ul>
              <li className="topic">Discover</li>
              <li>
                <Link to="">Personal Site</Link>
              </li>
              <li>
                <Link to="">Github</Link>
              </li>
              <li>
                <Link to="">LinkedIn</Link>
              </li>
              <li>
                <Link to="">AngelList</Link>
              </li>
            </ul>
          </div>

          <div className="third">
            <div className="footer-languages">
              <ul>
                <li className="topic">Languages</li>
                <li>
                  <Link to="">TBD</Link>
                </li>
                <li>
                  <Link to="">TBD</Link>
                </li>
              </ul>
            </div>
            <div className="footer-education">
              <ul>
                <li className="topic">Education</li>
                <li>
                  <Link to="">TBD</Link>
                </li>
                <li>
                  <Link to="">TBD</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-img">
          <img src={footerImg} />
        </div>
      </div>
    );
  }
}

export default Footer;
