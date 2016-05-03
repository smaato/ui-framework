
import React, {
  Component,
  PropTypes,
} from 'react';

export default class GridControls extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid__controls">
        <div className="grid__controls__liner">
          {this.props.children}
        </div>
      </div>
    );
  }

}

GridControls.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  isSortDescending: PropTypes.bool,
};
