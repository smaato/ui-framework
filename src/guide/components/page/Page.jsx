
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Title from './Title.jsx';

export { default as Example } from './Example.jsx';
export { default as Title } from './Title.jsx';
export { default as SubTitle } from './SubTitle.jsx';
export { default as Text } from './Text.jsx';

class Page extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames('examplePage', {
      'examplePage--fullScreen': this.props.isFullScreen,
    });

    let title;
    if (this.props.title) {
      title = (
        <Title>{this.props.title}</Title>
      );
    }

    return (
      <div className={classes}>
        {title}
        {this.props.children}
      </div>
    );
  }

}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  isFullScreen: PropTypes.bool,
  title: PropTypes.string,
};

export default Page;
