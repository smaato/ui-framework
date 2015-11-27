
import React, {
  Component,
  PropTypes,
} from 'react';

export default class GridSearch extends Component {

  constructor(props) {
    super(props);
  }

  onSearch(event) {
    if (event.key !== 'Enter') return;
    const searchField = this.refs.searchField;
    this.props.onSearch(searchField.value);
  }

  render() {
    return (
      <label className="gridSearch">
        <input
          className="gridSearch__input"
          type="text"
          ref="searchField"
          onKeyUp={this.onSearch.bind(this)}
        />
        <span className="icon glyphicons-search gridSearch__icon"/>
      </label>
    );
  }
}

GridSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
