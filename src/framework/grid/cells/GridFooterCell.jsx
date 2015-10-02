
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
    const cellClass = classNames('dataTable__tfoot__cell', this.props.classFooterCell);

    return (
      <div className={cellClass}>
        {this.props.content}
      </div>
    );
  }

}

GridFooterCell.propTypes = {
  classFooterCell: PropTypes.string,
  content: PropTypes.string,
};
