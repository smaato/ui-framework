
import classNames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';
import { DateRange as ReactDateRange } from 'react-date-range';

import {
  EscapeKeyHandler,
} from '../../../framework/services';

export default class DateRange extends Component {

  constructor(props) {
    super(props);

    this.DATE_FORMAT = 'MMM D';

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickAnywhere = this.onClickAnywhere.bind(this);
    this.onEscapeKey = this.onEscapeKey.bind(this);

    this.state = {
      endDate: this.props.endDate,
      isOpen: false,
      startDate: this.props.startDate,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.onClickAnywhere);
    this.escapeKeyHandler = new EscapeKeyHandler(this.onEscapeKey);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickAnywhere);
    this.escapeKeyHandler.removeListener();
  }

  onChange(range) {
    if (this.props.onChange) {
      this.props.onChange(range);
    }

    this.setState({
      endDate: range.endDate,
      startDate: range.startDate,
    });
  }

  onClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onClickAnywhere(event) {
    if (
      !this.refs.dateRangeRange.contains(event.target) &&
      !this.refs.dateRangePicker.contains(event.target) &&
      this.state.isOpen
    ) {
      this.setState({
        isOpen: false,
      });
    }
  }

  onEscapeKey() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  }

  render() {
    const dateRangeRangeClasses = classNames('dateRange__range', {
      'dateRange__range--active': this.state.isOpen,
    });
    let dateRange;
    let dateRangeArrow;
    let dateRangePicker;
    let dateRangePickerStyle;

    if (this.state.endDate && this.state.startDate) {
      const formattedEndDate = this.state.endDate.format(this.DATE_FORMAT);
      const formattedStartDate = this.state.startDate.format(this.DATE_FORMAT);
      if (formattedEndDate === formattedStartDate) {
        dateRange = `${formattedEndDate}`;
      } else {
        dateRange = `${formattedStartDate} - ${formattedEndDate}`;
      }
    }

    if (this.state.isOpen) {
      dateRangeArrow = (
        <div className="dateRange__arrow" />
      );
      dateRangePicker = (
        <ReactDateRange
          endDate={this.state.endDate}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
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
      );
      dateRangePickerStyle = {
        [this.props.isLeft ? 'left' : 'right']: 0,
      };
    }

    return (
      <div data-testid="DateRange" className="dateRange">
        <div
          className={dateRangeRangeClasses}
          onClick={this.onClick}
          ref="dateRangeRange"
        >
          <span className="icon icon-calendar-white" />
          {dateRange}
        </div>
        {dateRangeArrow}
        <div
          className="dateRange__picker"
          ref="dateRangePicker"
          style={dateRangePickerStyle}
        >
          {dateRangePicker}
        </div>
      </div>
    );
  }

}

DateRange.propTypes = {
  endDate: PropTypes.object,
  isLeft: PropTypes.bool,
  maxDate: PropTypes.object,
  minDate: PropTypes.object,
  onChange: PropTypes.func,
  startDate: PropTypes.object,
};

const endDate = moment.utc();

DateRange.defaultProps = {
  endDate,
  startDate: endDate.clone(),
};
