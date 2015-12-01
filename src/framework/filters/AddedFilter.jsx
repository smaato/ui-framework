
import React, {
  Component,
  PropTypes,
} from 'react';

import Entity from '../services/Entity.js';
import RemoveFilterButton from './RemoveFilterButton.jsx';

export default class AddedFilter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = `${this.props.name}: ${this.props.value}`;

    return (
      <div className="addedFilter">
        <span
          className="addedFilter__text"
          title={title}
        >
          <strong className="addedFilter__name">
            {this.props.label}:
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

AddedFilter.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onRemove: RemoveFilterButton.propTypes.onRemove,
};
