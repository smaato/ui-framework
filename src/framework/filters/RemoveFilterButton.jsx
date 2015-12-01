
import React, {
  Component,
  PropTypes,
} from 'react';

export default class RemoveFilterButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span
        className="icon glyphicons-remove-2 removeFilterButton"
        onClick={() => this.props.onRemove(this.props.id)}
      />
    );
  }
}

RemoveFilterButton.propTypes = {
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
