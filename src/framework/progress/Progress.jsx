
import classNames from 'classnames';
import keyMirror from 'keymirror';
import PropTypes from 'prop-types';
import React from 'react';

const Progress = (props) => {
  const sizeToClassMap = {
    [Progress.SIZE.SMALL]: 'progress--small',
  };

  const classes = classNames(
    'progress',
    sizeToClassMap[props.size]
  );

  return (
    <div data-testid="Progress" className={classes}>
      <div className="progress__dot" />
      <div className="progress__dot" />
      <div className="progress__dot" />
      <div className="progress__dot" />
    </div>
  );
};

Progress.SIZE = keyMirror({
  SMALL: null,
});

Progress.propTypes = {
  size: PropTypes.string,
};

export default Progress;

// We need to export these components after the default export because they
// depend on it.
export {
  default as ProgressModal,
} from './ProgressModal.jsx';

export {
  default as ProgressSuccess,
} from './ProgressSuccess.jsx';
