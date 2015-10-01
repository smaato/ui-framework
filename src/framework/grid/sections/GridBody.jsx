
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
    const sectionClass = classNames('dataTable__tbody', this.props.classes.body);

    const rows = this.props.rows.map((row, index) => {
      return <GridBodyRow
        classes={this.props.classes}
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
  classes: PropTypes.object,
  rows: PropTypes.array.isRequired,
};
