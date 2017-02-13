
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const Kpi = (props) => {
  const className = classNames('kpi', props.className);

  return (
    <span
      className={className}
      title={props.title}
    >
      {props.children}
    </span>
  );
};

Kpi.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Kpi;

export {
  default as KpiPositive,
} from './KpiPositive.jsx';

export {
  default as KpiNegative,
} from './KpiNegative.jsx';
