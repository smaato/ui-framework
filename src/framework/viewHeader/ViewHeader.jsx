
import React, {
  PropTypes,
} from 'react';

export {
  default as ViewHeaderNav,
} from './ViewHeaderNav.jsx';

const ViewHeader = props => {
  return (
    <div className="secondaryNavBar">

      <div className="secondaryNavBar__liner">

        {props.left}

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

      </div>

    </div>
  );
};

ViewHeader.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
};

export default ViewHeader;
