
import React, {
  Component,
} from 'react';
import Grid from '../../../framework/grid/Grid.jsx';
import CheckBox from '../../../framework/checkBox/CheckBox.jsx';
import GridLoadingRow from '../../../framework/grid/rows/GridLoadingRow.jsx';

function generateRows(prevArray, numberOfItemsToGenerate) {
  const newArray = prevArray.slice(0);
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
  const indexStart = prevArray.length;
  let indexEnd = prevArray.length + numberOfItemsToGenerate;
  const indexMax = 200;
  let isLastPage;
  if (indexEnd >= indexMax) {
    indexEnd = indexMax;
    isLastPage = true;
  } else {
    isLastPage = false;
  }
  for (let i = indexStart; i < indexEnd; i++) {
    newArray.push(
      Object.assign({}, bodyRow, {id: i})
    );
  }
  return {
    newArray,
    isLastPage,
  };
}

export default class GridExample extends Component {

  constructor(props) {
    super(props);
    const generatedRows = generateRows([], 30);
    this.state = {
      bodyRows: generatedRows.newArray,
      isLastPage: generatedRows.isLastPage,
      isLoadingBodyRows: false,
    };
  }

  lazyLoadContacts() {
    if (this.state.isLoadingBodyRows) return;
    this.setState({
      isLoadingBodyRows: true,
    });
    return new Promise((resolve) => {
      window.setTimeout(() => {
        const generatedRows = generateRows(this.state.bodyRows, 20);
        this.setState({
          bodyRows: generatedRows.newArray,
          isLastPage: generatedRows.isLastPage,
        });
        resolve(generatedRows.newArray);
        this.setState({
          isLoadingBodyRows: false,
        });
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

    const ROW_HEIGHT = 39;
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
        rowHeight={ROW_HEIGHT}
        bodyHeight={BODY_HEIGHT}
        overflowRecycledRowsCount={20}
        reverseZebraStripeClass="dataTable--reverseStriped"
        lazyLoadRows={this.lazyLoadContacts.bind(this)}
        loadingRow={(
          <GridLoadingRow />
        )}
      />
    );
  }

}
