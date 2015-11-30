
import React, {
  Component,
  PropTypes,
} from 'react';

import Entity from '../../../services/Entity.js';
import RemoveFilterButton from './RemoveFilterButton.jsx';

export default class GridSelectedFilter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = `${this.props.name}: ${this.props.value}`;

    return (
      <div className="gridSelectedFilter">
        <span
          className="gridSelectedFilter__text"
          title={title}
        >
          <strong className="gridSelectedFilter__name">
            {this.props.name}:
          </strong>
          {Entity.nbsp}
          {this.props.value}
        </span>
        <RemoveFilterButton
          name={this.props.name}
          onRemove={this.props.onRemove}
        />
      </div>
    );
  }
}

GridSelectedFilter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onRemove: RemoveFilterButton.propTypes.onRemove,
};
