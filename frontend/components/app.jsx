import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
// import NavContainer from "./nav/nav_container";
import HomepageContainer from "../components/home_page/home_page_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import BusinessIndexContainer from "./business_index/business_index_container";
import BusinessPageContainer from "./business_page/business_page_container";
import CreateReviewFormContainer from "./reviews/create_review_form_container";
import EditReviewFormContainer from "./reviews/edit_review_form_container";
import Footer from "./footer/footer";
const App = () => (
  <div>
    <header>
      <Route exact path="/" component={HomepageContainer} />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Switch>
      <ProtectedRoute
        exact
        path="/biz/:businessId/reviews/new"
        component={CreateReviewFormContainer}
      />
      <ProtectedRoute
        exact
        path="/biz/:businessId/reviews/:reviewId/edit"
        component={EditReviewFormContainer}
      />
      <Route exact path="/biz/:businessId" component={BusinessPageContainer} />
      <Route path="/businesses-filter" component={BusinessIndexContainer} />
      <Route path="/businesses-search" component={BusinessIndexContainer} />
      <Route path="/businesses" component={BusinessIndexContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
