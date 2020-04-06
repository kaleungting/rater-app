import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from './store/store';
import {signup,login,logout } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
