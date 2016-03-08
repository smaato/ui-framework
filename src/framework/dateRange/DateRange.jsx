
import React from 'react';

const DateRange = () => (
  <div className="dateRange">
    <div className="dateRange__option dateRange__option--required">
      <a className="dateRange__trigger">
        <span className="icon glyphicons-calendar dateRange__triggerIcon" />
        Jul 18-Jul 28
      </a>
    </div>
    <div className="dateRange__option">
      <label className="dateRange__compareToggle">
        <input className="dateRange__input" type="checkbox" />
        Compare
      </label>
    </div>
    <div className="dateRange__option">
      <span className="dateRange__goTo">
        <a className="dateRange__prev" href="">
          <span className="dateRange__prevArrow" />
        </a>
        <a className="dateRange__next" href="">
          <span className="dateRange__nextArrow" />
        </a>
        <span className="clear" />
      </span>
    </div>
  </div>
);

export default DateRange;
