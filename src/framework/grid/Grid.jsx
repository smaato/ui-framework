
import React, {
  Component,
  PropTypes
} from 'react';
// This was initially known as React.addons.classSet, but eventually became separate npm module
// More on https://facebook.github.io/react/docs/class-name-manipulation.html
import classNames from 'classnames';
import GridHeader from './sections/GridHeader.jsx';
import GridBody from './sections/GridBody.jsx';
import GridFooter from './sections/GridFooter.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // Style classes
    const containerClass = classNames('dataTable__container', this.props.classContainer);
    const tableClass = classNames('dataTable__table', this.props.classTable);

    // Header
    const headerCells = this.props.renderer.header.map((cellRenderer) => {
      return cellRenderer(this.props.data.header);
    });

    // Body
    const bodyRows = this.props.data.body.map((dataRow) => {
      return this.props.renderer.body.map((cellRenderer) => {
        return cellRenderer(dataRow);
      });
    });

    // Footer
    const footerCells = this.props.renderer.footer.map((cellRenderer) => {
      return cellRenderer(this.props.data.footer);
    });

    return (
      <div className={containerClass}>
        <div className={tableClass}>
          <GridHeader
            classHeader={this.props.classHeader}
            classHeaderRow={this.props.classHeaderRow}
            classHeaderCell={this.props.classHeaderCell}
            cells={headerCells}
          />
          <GridBody
            classBody={this.props.classBody}
            classBodyRow={this.props.classBodyRow}
            classBodyCell={this.props.classBodyCell}
            rows={bodyRows}
          />
          <GridFooter
            classFooter={this.props.classFooter}
            classFooterRow={this.props.classFooterRow}
            classFooterCell={this.props.classFooterCell}
            cells={footerCells}
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
  data: PropTypes.object.isRequired,
  renderer: PropTypes.object.isRequired,
};
