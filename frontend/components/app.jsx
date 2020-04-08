import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
// import NavContainer from "./nav/nav_container";
import Homepage from "../components/home_page/home_page";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import Footer from './footer/footer';
const App = () => (
  <div>
    <header>
      <Route exact path="/" component={Homepage} />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Footer/>
  </div>
);

export default App;
