import React from "react";
import moment from "moment";
import CountUp from "react-countup";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Month to Date active cases</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={12344} duration={2.75} separator="," />
          </h6>
          <p className="card-text">{moment().format("MMM, Y")}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Last Month active cases</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={13234} duration={2.75} separator="," />
          </h6>
          <p className="card-text">
            {moment().subtract(1, "months").format("MMM, Y")}
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Estimated Month End active cases</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <CountUp start={0} end={34234} duration={2.75} separator="," />
          </h6>
          <p className="card-text">{moment().format("MMM, Y")}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
