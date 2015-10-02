
import React, {
  Component,
  PropTypes,
} from 'react';

export default class TitleBarButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // TODO: This component can be improved by allowing properties such as
    // `icon` (with values like "plus" and "minus") and `level` ("primary".
    // "success", "warning", "danger", "default") to be passed in to enable
    // further control over the appearance of the button.
    return (
        <a
          className="titleBarButton button button--primary"
          href="#"
        >
          <span className="titleBarButton__icon glyphicons-plus">
          </span>
          {this.props.label}
        </a>
    );
  }

}

TitleBarButton.propTypes = {
  label: PropTypes.string,
};
