
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
      <div className="grid__search">
        <label className="grid__search__input">
          <input
            type="text"
            ref="searchField"
            onKeyUp={this.onSearch.bind(this)}
          />
          <span className="icon glyphicons-search"/>
        </label>
      </div>
    );
  }
}

GridSearch.defaultProps = {
  onSearch: PropTypes.func.isRequired,
};
