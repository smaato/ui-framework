
import React, {
  Component,
  PropTypes,
} from 'react';

export default class GridBodyEditableCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        className="dataGrid__tbody__cellValue--editable"
        href="#"
        onClick={this.props.onClick.bind(this)}
      >
        {this.props.content}
      </a>
    );
  }

}

GridBodyEditableCell.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
