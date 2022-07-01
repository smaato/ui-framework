
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Box = (props) => {
  const classes = classNames('box', props.classes, {
    'box--roundedCorners': props.roundedCorners,
  });

  return (
    <div
      data-testid={props["data-testid"] ?? "Box"}
      className={classes}
      data-id={props.dataId}
    >
      {props.children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
  "data-testid": PropTypes.string,
  dataId: PropTypes.string,
  roundedCorners: PropTypes.bool,
};

export default Box;
