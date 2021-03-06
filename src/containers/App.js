import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

import "../style.scss";
import Navbar from "./Navbar";
import Main from "./Main";
// import Dashboard from "../components/Dashboard";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually tampering with the key of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
      {/* <div className="container">
        <Dashboard />
      </div> */}
    </Router>
  </Provider>
);

export default App;
