
import React, { Component } from 'react';
import { DateRange as ReactDateRange } from 'react-date-range';
import moment from 'moment';
import PropTypes from 'prop-types';

import {
  Filter,
  FilterOption,
} from '../../services';

import PrimaryButton from '../../button/PrimaryButton.jsx';

export default class DateRangeFilterForm extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onClickAddButton = this.onClickAddButton.bind(this);

    let dateRange;
    if (this.props.comparisonValue) {
      dateRange = {
        startDate: moment(this.props.comparisonValue.startDate),
        endDate: moment(this.props.comparisonValue.endDate),
      };
    } else {
      dateRange = {
        startDate: moment(new Date()),
        endDate: moment(new Date()),
      };
    }

    this.state = {
      dateRange,
    };
  }

  onClickAddButton() {
    const dateRange = {
      startDate: this.state.dateRange.startDate.toDate(),
      endDate: this.state.dateRange.endDate.toDate(),
    };
    const filter = new Filter(
      this.props.filterOption,
      dateRange
    );
    this.props.onAddFilter(filter);
  }

  onChange(range) {
    this.setState({
      dateRange: {
        startDate: range.startDate,
        endDate: range.endDate,
      },
    });
  }

  render() {
    return (
      <div className="dateRangeFilterForm">
        <div className="dateRangeFilterForm__filterValueWrapper">
          <ReactDateRange
            onChange={this.onChange}
            startDate={this.state.dateRange.startDate}
            endDate={this.state.dateRange.endDate}
            theme={{
              DayInRange: {
                background: '#2D9BC4',
                color: '#FFFFFF',
                fontWeight: 400,
              },
              DaySelected: {
                background: '#3CCEA3',
                color: '#FFFFFF',
                fontWeight: 400,
              },
            }}
          />
        </div>
        <div className="dateRangeFilterForm__buttons">
          <div className="filterForm__buttons">
            <PrimaryButton
              onClick={this.onClickAddButton}
            >
              Update Results
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}

DateRangeFilterForm.propTypes = {
  comparisonValue: PropTypes.object,
  filterOption: PropTypes.instanceOf(FilterOption).isRequired,
  onAddFilter: PropTypes.func.isRequired,
};
