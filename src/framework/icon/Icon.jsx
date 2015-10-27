
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class Icon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const className = classNames('icon', this.props.className);

    return (
      <span className={className}></span>
    );
  }

}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
};
