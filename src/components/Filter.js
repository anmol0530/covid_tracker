import "react-dates/initialize";
import React, { useState, useEffect } from "react";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }
  render() {
    return (
      <form>
        {/* <div class="form-group">
        <label for="exampleFormControlSelect1">Location</label>
        <select
          class="form-control form-control-sm"
          id="exampleFormControlSelect1"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div> */}
        <div class="form-row row">
          {/* <div className="form-group col-md-1">Filters:</div> */}
          <div class="form-group col-md-2">
            <label for="inputState">Location</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputState">Gender</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputState">Age</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputState">Status</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Filter;
