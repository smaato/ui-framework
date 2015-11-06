
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class GridBodyCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const cellClass = classNames('grid__body__cell', this.props.classBodyCell);

    return (
      <div className={cellClass}>
        <div className="grid__body__cellLiner">
          {this.props.content}
        </div>
      </div>
    );
  }

}

GridBodyCell.propTypes = {
  classBodyCell: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
};
