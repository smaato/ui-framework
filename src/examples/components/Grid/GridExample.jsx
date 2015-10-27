
import React, {
  Component,
} from 'react';
import {
  Grid,
  CheckBox,
  GridLoadingRow,
  IconCog,
  IconEllipsis,
} from '../../../framework/framework.js';

function generateRows(indexStart, numberOfItems) {
  const newArray = [];
  const bodyRow = {
    id: null,
    name: 'Ford F150',
    status: 'In Production',
    fuel: 'Diesel, Unleaded',
    passengers: '3, 5, 6',
    cylinders: '6, 8',
    fuelEconomy: '25mpg',
    sold: '202.1k',
    registered: '200.5k',
  };
  let indexEnd = indexStart + numberOfItems;
  const indexMax = 80;
  indexEnd = indexEnd >= indexMax ? indexMax : indexEnd;
  for (let i = indexStart; i < indexEnd; i++) {
    newArray.push(
      Object.assign({}, bodyRow, {id: i})
    );
  }
  return newArray;
}

export default class GridExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bodyRows: generateRows(0, 30),
      isLoadingBodyRows: false,
      isLastPage: false,
    };
  }

  lazyLoadBodyRows() {
    if (this.state.isLoadingBodyRows || this.state.isLastPage) return;

    this.setState({
      isLoadingBodyRows: true,
    });

    // Fake request
    window.setTimeout(() => {
      const generatedRows = generateRows(this.state.bodyRows.length, 20);

      // If it returns an empty array, then last page reached
      if (generatedRows.length === 0) {
        this.setState({
          isLastPage: true,
          isLoadingBodyRows: false,
        });
      } else {
        this.setState({
          bodyRows: [...this.state.bodyRows, ...generatedRows],
          isLoadingBodyRows: false,
        });
      }
    }, 2000);
  }

  render() {
    const headerCells = [
      <CheckBox id="select-all" />,
      'Id',
      'Name',
      'Status',
      'Fuel',
      'Passengers',
      'Cylinders',
      'Fuel Economy',
      '# Sold',
      'Registered',
      null,
    ];

    const footerCells = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      '152.1m',
      'Registered',
      null,
    ];

    const bodyRenderer = [
      (item) => {
        return (
          <CheckBox id={item.id} />
        );
      },
      item => item.id,
      item => item.name,
      item => item.status,
      item => item.fuel,
      item => item.passengers,
      item => item.cylinders,
      item => item.fuelEconomy,
      item => item.sold,
      item => item.registered,
      () => (
        <span>
          <IconEllipsis />
          <IconCog />
        </span>
      ),
    ];

    const ROW_HEIGHT = 34;
    const BODY_HEIGHT = 500;

    return (
      <Grid
        classContainer="gridExample__container"
        classTable="gridExample__table"
        classHeader="gridExample__header"
        classHeaderRow="gridExample__headerRow"
        classHeaderCell="gridExample__headerCell"
        classBody="gridExample__body"
        classBodyRow="gridExample__bodyRow"
        classBodyCell="gridExample__bodyCell"
        classFooter="gridExample__footer"
        classFooterRow="gridExample__footerRow"
        classFooterCell="gridExample__footerCell"
        headerCells={headerCells}
        bodyRows={this.state.bodyRows}
        bodyRenderer={bodyRenderer}
        footerCells={footerCells}
        // Scroll
        // TODO: change to have a single source of truth.
        // Height should either be dynamically calculated or
        // the supplied value should be set as inline CSS to the cell.
        rowHeight={ROW_HEIGHT}
        bodyHeight={BODY_HEIGHT}
        overflowRecycledRowsCount={20}
        reverseZebraStripeClass="dataTable--reverseStriped"
        lazyLoadRows={this.lazyLoadBodyRows.bind(this)}
        loadingRow={this.state.isLoadingBodyRows ? <GridLoadingRow /> : null}
        loadDistanceFromBottom={1000}
      />
    );
  }

}
