
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Kpi = (props) => {
  const className = classNames('kpi', props.className);

  return (
    <span
      data-testid="Kpi"
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
