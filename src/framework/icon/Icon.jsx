
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as IconCog,
} from './IconCog.jsx';

export {
  default as IconEllipsis,
} from './IconEllipsis.jsx';

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
