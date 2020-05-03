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
                <a
                  href="https://github.com/kaleungting/rater-app"
                  target="blank"
                >
                  Github
                </a>
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
                <a href="https://github.com/kaleungting" target="blank">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://github.com/kaleungting" target="blank">
                  Github
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
              <li>
                <a href="https://angel.co/u/ken-ting-1" target="blank">
                  AngelList
                </a>
              </li>
            </ul>
          </div>

          <div className="third">
            <div className="footer-languages">
              <ul>
                <li className="topic">Languages</li>
                <li>
                  <Link to="">Ruby</Link>
                </li>
                <li>
                  <Link to="">Javascript</Link>
                </li>
              </ul>
            </div>
            <div className="footer-education">
              <ul>
                <li className="topic">Education</li>
                <li>
                  <Link to="">App Academy</Link>
                </li>
                <li>
                  <Link to="">Baruch College</Link>
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
