
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
    const title = `${this.props.label} (${this.props.type}): ${this.props.value}`;

    return (
      <div className="addedFilter">
        <span
          className="addedFilter__text"
          title={title}
        >
          <strong className="addedFilter__name">
            {`${this.props.label} (${this.props.type})`}:
          </strong>
          {Entity.nbsp}
          {this.props.value}
        </span>
        <RemoveFilterButton
          id={this.props.id}
          onRemove={this.props.onRemove}
        />
      </div>
    );
  }
}

AddedFilter.propTypes = {
  id: RemoveFilterButton.propTypes.id,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onRemove: RemoveFilterButton.propTypes.onRemove,
};
