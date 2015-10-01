
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';
import GridFooterCell from './../cells/GridFooterCell.jsx';

export default class GridFooterRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rowClass = classNames('dataTable__tfoot__row', this.props.classes.footerRow);

    const content = this.props.cells.map((cell, index) => {
      return <GridFooterCell
        classes={this.props.classes}
        content={cell}
        key={index}
      />;
    });

    return (
      <div className={rowClass}>
        {content}
      </div>
    );
  }

}

GridFooterRow.propTypes = {
  classes: PropTypes.object,
  cells: PropTypes.array.isRequired,
};
