
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';
import GridFooterRow from '../rows/GridFooterRow.jsx';

export default class GridFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const sectionClass = classNames('dataTable__tfoot', this.props.classes.footer);

    return (
      <div className={sectionClass}>
        <GridFooterRow
          classes={this.props.classes}
          cells={this.props.cells}
        />
      </div>
    );
  }

}

GridFooter.propTypes = {
  classes: PropTypes.object,
  cells: PropTypes.array.isRequired,
};
