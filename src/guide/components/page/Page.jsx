
import React, {
  Component,
} from 'react';
import classNames from 'classnames';

export { default as Example } from './Example.jsx';
export { default as Title } from './Title.jsx';
export { default as SubTitle } from './SubTitle.jsx';
export { default as Text } from './Text.jsx';

export default class Page extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames('examplePage', {
      'examplePage--fullScreen': this.props.isFullScreen,
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }

}