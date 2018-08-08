
import classNames from 'classnames';
import keyMirror from 'keymirror';
import React from 'react';
import PropTypes from 'prop-types';

const StatusDropdownOptionIcon = (props) => {
  const classMap = {
    [StatusDropdownOptionIcon.TYPE.ACTIVATE]: 'icon-play-blue',
    [StatusDropdownOptionIcon.TYPE.ARCHIVE]: 'icon-remove-circle-blue',
    [StatusDropdownOptionIcon.TYPE.DEACTIVATE]: 'icon-pause-blue',
    [StatusDropdownOptionIcon.TYPE.SELECTED]: 'icon-check',
  };

  const classes = classNames(
    'statusDropdownOptionIcon icon',
    classMap[props.type]
  );

  return (
    <span className={classes} />
  );
};

StatusDropdownOptionIcon.TYPE = keyMirror({
  ACTIVATE: null,
  ARCHIVE: null,
  DEACTIVATE: null,
  SELECTED: null,
});

StatusDropdownOptionIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default StatusDropdownOptionIcon;
