import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import CovidGraph from "./CovidGraph";

const getCovidData = (
  status = null,
  location = null,
  age = null,
  gender = null,
  startDate = null,
  endDate = null
) => {
  let config = {};
  let url =
    "localhost:8081/api/covid/?status=" + status + location
      ? "&location=" + location
      : "" + gender
      ? "&gender=" + gender
      : "" + age
      ? "&age=" + age
      : "" + startDate
      ? "&startDate=" + startDate
      : "" + endDate
      ? "&endDate=" + endDate
      : "";
  return axios.get(url, config);
};

const Dashboard = () => {
  const [status, setStatus] = useState("Hospitalized");

  useEffect(() => {
    getCovidData(status);
  }, []);
  return (
    <>
      <Cards />
      <CovidGraph />
    </>
  );
};

export default Dashboard;
