
import React, {
  Component,
  PropTypes,
} from 'react';

export default class SearchBox extends Component {

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
      <label className="searchBox">
        <input
          className="searchBox__input"
          type="text"
          ref="searchField"
          onKeyUp={this.onSearch.bind(this)}
        />
        <span className="icon glyphicons-search searchBox__icon"/>
      </label>
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
