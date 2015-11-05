
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class GridFooterCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const cellClass = classNames('dataGrid__tfoot__cell', this.props.classFooterCell);

    return (
      <div className={cellClass}>
        <div className="dataGrid__tfoot__cellLiner">
          {this.props.content}
        </div>
      </div>
    );
  }

}

GridFooterCell.propTypes = {
  classFooterCell: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
};
