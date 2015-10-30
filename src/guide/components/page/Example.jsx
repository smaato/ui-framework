
import React, {
  Component,
} from 'react';
import classNames from 'classnames';

import SubTitle from './SubTitle.jsx';

export default class Example extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames('exampleContainer', {
      'exampleContainer--clear': this.props.isClear,
    });

    let title;
    if (this.props.title) {
      title = (
        <SubTitle>{this.props.title}</SubTitle>
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
