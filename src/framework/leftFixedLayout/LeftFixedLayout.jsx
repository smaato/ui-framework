
import classNames from 'classnames';
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ScrollPosition,
} from '../services';

export default class LeftFixedLayout extends Component {

  constructor(props) {
    super(props);

    this.scrollPosition = new ScrollPosition();
    this.state = {
      isSticky: false,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.scrollPosition.init();
    this.scrollPosition.addListener(this.onScroll);
  }

  componentWillUnmount() {
    this.scrollPosition.teardown();
  }

  onScroll() {
    this.setState({
      isSticky:
        this.scrollPosition.current > this.refs.leftFixedLayout.offsetTop,
    });
  }

  render() {
    const leftSideClasses = classNames('leftFixedLayout__leftSide', {
      'leftFixedLayout__leftSide--sticky': this.state.isSticky,
    });

    return (
      <div
        className="leftFixedLayout"
        ref="leftFixedLayout"
      >
        <div className={leftSideClasses}>
          {this.props.left}
        </div>

        <div className="leftFixedLayout__rightSide">
          {this.props.right}
        </div>
      </div>
    );
  }

}

LeftFixedLayout.propTypes = {
  left: PropTypes.any,
  right: PropTypes.any,
};

export default LeftFixedLayout;
