
import React, {
  Component,
} from 'react';
import Grid from '../../../framework/grid/Grid.jsx';
import CheckBox from '../../../framework/checkBox/CheckBox.jsx';
import GridLoadingRow from '../../../framework/grid/rows/GridLoadingRow.jsx';

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
    };
  }

  lazyLoadContacts() {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        const generatedRows = generateRows(this.state.bodyRows.length, 20);
        this.setState({
          bodyRows: [...this.state.bodyRows, ...generatedRows],
        });
        // It is only needed to determine if last page is reached
        resolve(generatedRows);
      }, 2000);
    });
  }

  render() {
    const headerCells = [
      <CheckBox
        id="select-all"
        classWrapper="checkBoxExample__wrapper"
        classInput="checkBoxExample__input"
        classLabel="checkBoxExample__label"
      />,
      'Id',
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
      null,
      null,
      '152.1m',
      'Registered',
    ];

    const bodyRenderer = [
      (item) => {
        return (
          <CheckBox id={item.id} />
        );
      },
      (item) => { return item.id; },
      (item) => { return item.name; },
      (item) => { return item.status; },
      (item) => { return item.fuel; },
      (item) => { return item.passengers; },
      (item) => { return item.cylinders; },
      (item) => { return item.fuelEconomy; },
      (item) => { return item.sold; },
      (item) => { return item.registered; },
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
        lazyLoadRows={this.lazyLoadContacts.bind(this)}
        loadingRow={(
          <GridLoadingRow />
        )}
        loadDistanceFromBottom={1000}
      />
    );
  }

}
