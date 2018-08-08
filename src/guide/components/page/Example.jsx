
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import SubTitle from './SubTitle.jsx';

const Example = (props) => {
  const classes = classNames('exampleContainer', {
    'exampleContainer--clear': props.isClear,
    'exampleContainer--dark': props.isDark,
  });

  let title;
  if (props.title) {
    title = (
      <SubTitle>{props.title}</SubTitle>
    );
  }

  return (
    <div className={classes}>
      {title}
      {props.children}
    </div>
  );
};

Example.propTypes = {
  title: PropTypes.string,
  isClear: PropTypes.bool,
  isDark: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};

export default Example;
