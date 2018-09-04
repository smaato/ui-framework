
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.onKeyUp = this.onKeyUp.bind(this);
    this.search = this.search.bind(this);
  }

  onKeyUp(event) {
    // Always search when the user hits Enter.
    if (event.key === 'Enter') {
      return this.search();
    }

    // Otherwise, allow searching if isImmediate.
    if (this.props.isImmediate) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      this.searchTimeout = setTimeout(this.search, this.props.timeout);
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
      <span className="searchBox">
        <input
          className={classes}
          defaultValue={this.props.defaultValue}
          onKeyUp={this.onKeyUp}
          placeholder={this.props.placeholder}
          ref="searchField"
          type="text"
        />
        <span className="searchBox__icon icon icon-magnifier" />
      </span>
    );
  }
}

SearchBox.propTypes = {
  defaultValue: PropTypes.string,
  isFullWidth: PropTypes.bool,
  isImmediate: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  timeout: PropTypes.number,
};

SearchBox.defaultProps = {
  timeout: 500,
};
