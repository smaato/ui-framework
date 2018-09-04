
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Title from './Title.jsx';

export { default as Example } from './Example.jsx';
export { default as Title } from './Title.jsx';
export { default as SubTitle } from './SubTitle.jsx';
export { default as Text } from './Text.jsx';

const Page = (props) => {
  const classes = classNames('examplePage', {
    'examplePage--fullScreen': props.isFullScreen,
  });

  let title;
  if (props.title) {
    title = (
      <Title>{props.title}</Title>
    );
  }

  return (
    <div className={classes}>
      {title}
      {props.children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  isFullScreen: PropTypes.bool,
  title: PropTypes.string,
};

export default Page;
