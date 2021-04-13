import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
// import SearchTimeline from "./SearchTimeline";
// import SearchForm from "../containers/SearchForm";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1 className="display-1">Covid Tracker</h1>
        <h2>Sign up to get Covid 19 Updates</h2>
        <Link to="/signup" className="btn btn-primary signup-homepage-btn">
          Sign up Here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Homepage;
