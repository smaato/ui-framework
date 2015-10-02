
import React, {
  Component,
} from 'react';
import Grid from '../../../framework/grid/Grid.jsx';

export default class GridExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
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

    const bodyRows = [];
    for (let i = 0; i < 20; i++) {
      bodyRows.push(
        Object.assign(bodyRow, {id: i})
      );
    }

    const headerCells = [
      'Name',
      'Status',
      'Fuel',
      'Passengers',
      'Cylinders',
      'Fuel Economy',
      '# Sold',
      'Registered',
    ];

    const footerCells = [
      null,
      null,
      null,
      null,
      null,
      null,
      '152.1m',
      'Registered',
    ];

    const bodyRenderer = [
      (item) => { return item.name; },
      (item) => { return item.status; },
      (item) => { return item.fuel; },
      (item) => { return item.passengers; },
      (item) => { return item.cylinders; },
      (item) => { return item.fuelEconomy; },
      (item) => { return item.sold; },
      (item) => { return item.registered; },
    ];

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
        bodyRows={bodyRows}
        bodyRenderer={bodyRenderer}
        footerCells={footerCells}
      />
    );
  }

}
