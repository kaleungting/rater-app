import React from "react";
import { Link } from "react-router-dom";
import Errors from "./errors";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.formType === "Sign Up") {
      this.state = {
        first_name: "",
        last_name: "",
        email: "",
        birthday: { month: "", day: "", year: "" },
        password: "",
        zip_code: "",
      };
    } else {
      this.state = {
        email: "",
        password: "",
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateUpdate = this.dateUpdate.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.handleClearErrors = this.handleClearErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.formType === "Sign Up") {
      let str = `${user["birthday"].year}-${user["birthday"].month}-${user["birthday"].day}`;
      user["birthday"] = str;
    }
    this.props.action(user);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.clearErrors();
  }

  handleClearErrors(e) {
    e.preventDefault();
    this.props.clearErrors();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  dateUpdate(field) {
    this.state["birthday"][field] = document.getElementsByClassName(
      field
    )[0].value;
  }

  demoUser(e) {
    e.preventDefault();
    this.props.demoLogin({
      email: "demo-user@gmail.com",
      password: "password1",
    });
  }

  render() {
    const { errors } = this.props;
    const signup = (
      <div>
        <div
          className={this.props.errors.length === 0 ? "" : "errors-container"}
        >
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}.</li>
            ))}
          </ul>
          <div className="error-icon">
            <i
              onClick={this.handleClearErrors}
              className={this.props.errors.length === 0 ? "" : "fas fa-times"}
            />
          </div>
        </div>
        <h1>Be a Rater</h1>
        <button className="demo-btn" onClick={this.demoUser}>
          Demo Login
        </button>
        <div className="hr-line">
          <hr />
          OR
          <hr />
        </div>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="full-name">
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              placeholder="First Name"
              className="text-input"
            />
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              placeholder="Last Name"
              className="text-input"
            />
          </div>
          <input
            type="email"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
            className="text-input"
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
            className="text-input"
          />
          <br />
          <input
            type="text"
            value={this.state.zip_code}
            onChange={this.update("zip_code")}
            placeholder="ZIP code"
            className="text-input"
          />
          <p id="birth">Birthday</p>
          <div className="birthday">
            <label id="box-6">
              <select
                className="month"
                onChange={() => this.dateUpdate("month")}
                aria-label="Month"
                name="birthday_month"
                id="month"
                title="Month"
              >
                <option value="0">Month</option>
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">Apr</option>
                <option value="05">May</option>
                <option value="06">Jun</option>
                <option value="07">Jul</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select
                className="day"
                onChange={() => this.dateUpdate("day")}
                aria-label="Day"
                name="birthday_day"
                id="day"
                title="Day"
              >
                <option value="0">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                className="year"
                onChange={() => this.dateUpdate("year")}
                aria-label="Year"
                name="birthday_year"
                id="year"
                title="Year"
              >
                <option value="0">Year</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
              </select>
            </label>
          </div>
          <button className="form-btn">{this.props.formType}</button>
          <br />
          Already a rater? <Link to="/login">Log In</Link>
        </form>
      </div>
    );

    const login = (
      <div>
        <div
          className={this.props.errors.length === 0 ? "" : "errors-container"}
        >
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}.</li>
            ))}
          </ul>
          <div className="error-icon">
            <i
              onClick={this.handleClearErrors}
              className={this.props.errors.length === 0 ? "" : "fas fa-times"}
            />
          </div>
        </div>
        <h1>Login</h1>
        <button className="demo-btn" onClick={this.demoUser}>
          Demo Login
        </button>
        <div className="hr-line">
          <hr />
          OR
          <hr />
        </div>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            type="email"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
            className="text-input"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
            className="text-input"
          />
          <br />
          <button className="form-btn">{this.props.formType}</button>
          <br />
          New to Rater? <Link to="/signup">Sign Up</Link>
        </form>
      </div>
    );

    const display = this.props.formType === "Sign Up" ? signup : login;
    return (
      <>
        <div className="session-form-top">
          <img className="session-logo" src={logo} />
        </div>
        <div className="session-form-container">
          <div className="session-form">{display}</div>
          <div className="session-form-img">
            <img src={signupIllustration} alt="signup-illustration" />
          </div>
        </div>
      </>
    );
  }
}

export default SessionForm;
