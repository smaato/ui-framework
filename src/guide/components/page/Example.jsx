
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

import SubTitle from './SubTitle.jsx';

class Example extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames('exampleContainer', {
      'exampleContainer--clear': this.props.isClear,
      'exampleContainer--dark': this.props.isDark,
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

Example.propTypes = {
  title: PropTypes.string,
  isClear: PropTypes.bool,
  isDark: PropTypes.bool,
};

export default Example;
