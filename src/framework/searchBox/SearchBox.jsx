
import React, {
  Component,
  PropTypes,
} from 'react';

import classNames from 'classnames';

export default class SearchBox extends Component {

  constructor(props) {
    super(props);
  }

  onKeyUp(event) {
    // Always search when the user hits Enter.
    if (event.key === 'Enter') {
      return this.search();
    }

    // Otherwise, allow searching if isImmediate.
    if (this.props.isImmediate) {
      this.search();
    }
  }

  search() {
    const searchField = this.refs.searchField;
    this.props.onSearch(searchField.value);
  }

  render() {
    const classes = classNames('searchBox__input', {
      'searchBox__input--fullWidth': this.props.isFullWidth,
    });

    return (
      <label className="searchBox">
        <input
          className={classes}
          type="text"
          placeholder={this.props.placeholder}
          ref="searchField"
          onKeyUp={this.onKeyUp.bind(this)}
        />
        <span className="icon glyphicons-search searchBox__icon"/>
      </label>
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isFullWidth: PropTypes.bool,
  isImmediate: PropTypes.bool,
};
