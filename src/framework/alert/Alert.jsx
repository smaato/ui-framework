
import classNames from 'classnames';
import keyMirror from 'keymirror';
import PropTypes from 'prop-types';
import React from 'react';

const Alert = (props) => {
  const typeToBackgroundColorClass = {
    [Alert.TYPE.ERROR]: 'alert--error',
    [Alert.TYPE.INFO]: 'alert--info',
    [Alert.TYPE.SUCCESS]: 'alert--success',
    [Alert.TYPE.WARNING]: 'alert--warning',
  };

  const classes = classNames(
    'alert',
    props.classes,
    typeToBackgroundColorClass[props.type]
  );

  return (
    <div data-testid="Alert" className={classes}>
      {props.children}
    </div>
  );
};

Alert.TYPE = keyMirror({
  ERROR: null,
  INFO: null,
  SUCCESS: null,
  WARNING: null,
});

Alert.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Alert;
