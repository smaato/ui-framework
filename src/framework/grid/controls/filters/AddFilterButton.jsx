
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AddFilterButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="gridFilter__add"
        onClick={() => this.props.onAdd('FilterName', 'FilterValue')}
      >+</div>
    );
  }
}

AddFilterButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
