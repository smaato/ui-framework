import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const SubLabel = (props) => {
  const classes = classNames('subLabel', props.className);

  return (
    <div className={classes} title={props.children}>
      {props.children}
    </div>
  );
};

SubLabel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default SubLabel;
