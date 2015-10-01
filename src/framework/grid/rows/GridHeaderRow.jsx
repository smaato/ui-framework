
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';
import GridHeaderCell from './../cells/GridHeaderCell.jsx';

export default class GridHeaderRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rowClass = classNames('dataTable__thead__row', this.props.classes.headerRow);

    const content = this.props.cells.map((cell, index) => {
      return <GridHeaderCell
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

GridHeaderRow.propTypes = {
  classes: PropTypes.object,
  cells: PropTypes.array.isRequired,
};
