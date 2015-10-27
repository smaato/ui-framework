
import React, {
  Component,
} from 'react';
import classNames from 'classnames';

export default class Example extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames('exampleContainer', {
      'exampleContainer--clear': this.props.isClear,
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }

}
