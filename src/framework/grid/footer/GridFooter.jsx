
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import GridFooterRow from './GridFooterRow.jsx';

export default class GridFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const sectionClass = classNames('dataGrid__tfoot', this.props.classFooter);

    return (
      <div className={sectionClass}>
        <GridFooterRow
          classFooterRow={this.props.classFooterRow}
          classFooterCell={this.props.classFooterCell}
          cells={this.props.cells}
        />
      </div>
    );
  }

}

GridFooter.propTypes = {
  classFooter: PropTypes.string,
  classFooterRow: PropTypes.string,
  classFooterCell: PropTypes.string,
  cells: PropTypes.array.isRequired,
};
