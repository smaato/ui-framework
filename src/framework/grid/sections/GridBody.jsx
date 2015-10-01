
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';
import GridBodyRow from '../rows/GridBodyRow.jsx';

export default class GridBody extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const sectionClass = classNames('dataTable__tbody', this.props.classBody);

    const rows = this.props.rows.map((row, index) => {
      return <GridBodyRow
        classBodyRow={this.props.classBodyRow}
        classBodyCell={this.props.classBodyCell}
        cells={row}
        key={index}
      />;
    });

    return (
      <div className={sectionClass}>
        {rows}
      </div>
    );
  }

}

GridBody.propTypes = {
  classBody: PropTypes.string,
  classBodyRow: PropTypes.string,
  classBodyCell: PropTypes.string,
  rows: PropTypes.array.isRequired,
};
