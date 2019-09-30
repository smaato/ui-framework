
import PropTypes from 'prop-types';
import moment from 'moment';
import { DateRange as ReactDateRange } from 'react-date-range';
import React, {
  Component,
} from 'react';

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
    this.onKeyUp = this.onKeyUp.bind(this);

    let dateRange;
    if (this.props.comparisonValue === undefined) {
      dateRange = {
        startDate: moment(new Date()),
        endDate: moment(new Date()),
      };
    } else {
      dateRange = {
        startDate: moment(this.props.comparisonValue.startDate),
        endDate: moment(this.props.comparisonValue.endDate),
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

  onKeyUp(event) {
    if (event.key !== 'Enter') return;
    this.onClickAddButton();
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
            startDate={this.state.startDate}
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
  comparisonValue: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  filterOption: PropTypes.instanceOf(FilterOption).isRequired,
  onAddFilter: PropTypes.func.isRequired,
};
