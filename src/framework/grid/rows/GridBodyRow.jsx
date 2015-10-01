
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';
import GridBodyCell from './../cells/GridBodyCell.jsx';

export default class GridBodyRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rowClass = classNames('dataTable__tbody__row', this.props.classes.bodyRow);

    const content = this.props.cells.map((cell, index) => {
      return <GridBodyCell
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

GridBodyRow.propTypes = {
  classes: PropTypes.object,
  cells: PropTypes.array.isRequired,
};
