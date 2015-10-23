
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import GridHeader from './header/GridHeader.jsx';
import GridBody from './body/GridBody.jsx';
import GridFooter from './footer/GridFooter.jsx';

export {
  default as GridLoadingRow,
} from './loading/GridLoadingRow.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // Style classes
    const containerClass = classNames('dataTable__container', this.props.classContainer);
    const tableClass = classNames('dataTable__table', this.props.classTable);

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
