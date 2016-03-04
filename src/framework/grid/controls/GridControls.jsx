
import React, {
  Component,
  PropTypes,
} from 'react';

class GridControls extends Component {

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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  isSortDescending: PropTypes.bool,
};

export default GridControls;
