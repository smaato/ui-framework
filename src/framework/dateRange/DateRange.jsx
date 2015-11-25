
import React from 'react';

const DateRange = () => {
  return (
    <ul className="dateRange">
      <li className="dateRange__option dateRange__option--required">
        <a className="dateRange__trigger">
          <span className="icon glyphicons-calendar" />
          Jul 18-Jul 28
        </a>
      </li>
      <li className="dateRange__option">
        <label className="dateRange__compareToggle">
          <input type="checkbox" />
          Compare
        </label>
      </li>
      <li className="dateRange__option">
        <span className="dateRange__goTo">
          <a className="prev" href="">
            <span className="prevArrow" />
          </a>
          <a className="next" href="">
            <span className="nextArrow" />
          </a>
          <span className="clear" />
        </span>
      </li>
    </ul>
  );
};

export default DateRange;
