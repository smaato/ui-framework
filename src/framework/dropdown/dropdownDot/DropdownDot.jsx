
import classNames from 'classnames';
import keyMirror from 'keymirror';
import React from 'react';
import PropTypes from 'prop-types';

const DropdownDot = (props) => {
  const classMap = {
    [DropdownDot.COLOR.BLUE]: 'dropdownDot--blue',
    [DropdownDot.COLOR.GREEN]: 'dropdownDot--green',
    [DropdownDot.COLOR.GREY]: 'dropdownDot--grey',
    [DropdownDot.COLOR.RED]: 'dropdownDot--red',
  };

  const labelClasses = classNames('dropdownDot', classMap[props.color]);

  return (
    <div className={labelClasses} />
  );
};

DropdownDot.COLOR = keyMirror({
  BLUE: null,
  GREEN: null,
  GREY: null,
  RED: null,
});

DropdownDot.propTypes = {
  color: PropTypes.string,
};

export default DropdownDot;
