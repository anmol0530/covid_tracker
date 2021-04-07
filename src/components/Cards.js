import React from "react";
import moment from "moment";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Month to Date active cases</h5>
          <h6 className="card-subtitle mb-2 text-muted">1234</h6>
          <p className="card-text">{moment().format("MMM, Y")}</p>
        </div>
      </div>
      <div className="card" style={{ width: 400 }}>
        <div className="card-body">
          <h5 className="card-title">Last Month active cases</h5>
          <h6 className="card-subtitle mb-2 text-muted">1345</h6>
          <p className="card-text">
            {moment().subtract(1, "months").format("MMM, Y")}
          </p>
        </div>
      </div>
      <div className="card" style={{ width: 400 }}>
        <div className="card-body">
          <h5 className="card-title">Estimated Month End active cases</h5>
          <h6 className="card-subtitle mb-2 text-muted">1432</h6>
          <p className="card-text">{moment().format("MMM, Y")}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
