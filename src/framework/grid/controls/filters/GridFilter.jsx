
import React, {
  Component,
  PropTypes,
} from 'react';

import Entity from '../../../services/Entity.js';
import RemoveFilterButton from './RemoveFilterButton.jsx';

export default class GridFilter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = `${this.props.name}: ${this.props.value}`;

    return (
      <div className="gridFilter">
        <span
          className="gridFilter__text"
          title={title}
        >
          <strong className="gridFilter__name">
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

GridFilter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onRemove: RemoveFilterButton.propTypes.onRemove,
};
