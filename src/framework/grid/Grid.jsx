
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import GridHeader from './header/GridHeader.jsx';
import GridBody from './body/GridBody.jsx';
import GridFooter from './footer/GridFooter.jsx';

export {
  default as GridBodyEditableCell,
} from './body/GridBodyEditableCell.jsx';

export {
  default as GridLoadingRow,
} from './loading/GridLoadingRow.jsx';

export {
  default as GridEmptyRow,
} from './empty/GridEmptyRow.jsx';

export {
  default as GridKpi,
} from './kpi/GridKpi.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // Style classes
    const containerClass = classNames('grid__container', this.props.classContainer);
    const tableClass = classNames('grid__table', this.props.classTable);

    // Body
    const bodyRows = this.props.bodyRows.map((dataRow) => {
      return this.props.bodyRenderer.map((cellRenderer) => {
        return cellRenderer(dataRow);
      });
    });

    return (
      <div className={containerClass}>
        <div className={tableClass}>
          <GridHeader
            classHeader={this.props.classHeader}
            classHeaderRow={this.props.classHeaderRow}
            classHeaderCell={this.props.classHeaderCell}
            cells={this.props.headerCells}
          />
          <GridBody
            classBody={this.props.classBody}
            classBodyRow={this.props.classBodyRow}
            classBodyCell={this.props.classBodyCell}
            rows={bodyRows}
            rowHeight={this.props.rowHeight}
            bodyHeight={this.props.bodyHeight}
            // Initial loading state
            initialLoadingRow={this.props.initialLoadingRow}
            // Empty state
            emptyRow={this.props.emptyRow}
            // Scroll
            lazyLoadRows={this.props.lazyLoadRows}
            overflowRecycledRowsCount={this.props.overflowRecycledRowsCount}
            reverseZebraStripeClass={this.props.reverseZebraStripeClass}
            loadingRow={this.props.loadingRow}
            loadDistanceFromBottom={this.props.loadDistanceFromBottom}
          />
          <GridFooter
            classFooter={this.props.classFooter}
            classFooterRow={this.props.classFooterRow}
            classFooterCell={this.props.classFooterCell}
            cells={this.props.footerCells}
          />
        </div>
      </div>
    );
  }

}

Grid.propTypes = {
  classContainer: PropTypes.string,
  classTable: PropTypes.string,
  classHeader: PropTypes.string,
  classHeaderRow: PropTypes.string,
  classHeaderCell: PropTypes.string,
  classBody: PropTypes.string,
  classBodyRow: PropTypes.string,
  classBodyCell: PropTypes.string,
  classFooter: PropTypes.string,
  classFooterRow: PropTypes.string,
  classFooterCell: PropTypes.string,
  headerCells: PropTypes.array,
  bodyRows: PropTypes.array.isRequired,
  bodyRenderer: PropTypes.array.isRequired,
  footerCells: PropTypes.array,
  // Initial loading state
  initialLoadingRow: PropTypes.element,
  // Empty state
  emptyRow: PropTypes.element,
  // Scroll
  rowHeight: PropTypes.number.isRequired,
  bodyHeight: PropTypes.number.isRequired,
  lazyLoadRows: PropTypes.func,
  overflowRecycledRowsCount: PropTypes.number,
  reverseZebraStripeClass: PropTypes.string,
  loadingRow: PropTypes.element,
  loadDistanceFromBottom: PropTypes.number,
};

Grid.defaultProps = {
  overflowRecycledRowsCount: 10,
};
