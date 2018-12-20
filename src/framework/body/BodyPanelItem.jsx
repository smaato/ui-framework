
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const BodyPanelItem = (props) => {
  const rhythmClassMap = {
    [BodyPanelItem.RHYTHM.LARGE]: 'bodyPanelItem--largeRhythm',
  };

  const classes = classNames('bodyPanelItem', rhythmClassMap[props.rhythm]);

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

BodyPanelItem.RHYTHM = {
  LARGE: 'LARGE',
};

BodyPanelItem.propTypes = {
  children: PropTypes.any,
  rhythm: PropTypes.string,
};

export default BodyPanelItem;
