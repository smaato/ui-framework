
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CheckBox,
  Grid,
  GridBodyEditableCell,
  GridEmptyRow,
  GridKpi,
  GridLoadingRow,
  IconCog,
  IconEllipsis,
} from '../../../framework/framework.js';

export default class GridExample extends Component {

  constructor(props) {
    super(props);
    this.initializeState();
  }

  componentDidMount() {
    this.lazyLoadBodyRows();
  }

  // It is extracted to a function to easily reset to initial state
  initializeState() {
    const bodyRowsMax = 80;
    this.state = {
      bodyRows: [],
      bodyRowsMax,
      // bodyRowsMax can be set to zero temporarily to demo empty state,
      // so this is needed to revert that
      bodyRowsMaxInitial: bodyRowsMax,
      isInitialLoad: true,
      isLoadingBodyRows: false,
      isLastPage: false,
      isEmpty: false,
      // Reference to fake server request, provides ability to cancel it
      lazyLoadingTimeoutId: null,
    };
  }

  lazyLoadBodyRows() {
    if (this.state.isLoadingBodyRows || this.state.isLastPage) return;

    this.setState({
      isLoadingBodyRows: true,
    });

    // Fake request
    const lazyLoadingTimeoutId = window.setTimeout(() => {
      // Current state
      const generatedRows = this.generateRows(this.state.bodyRows.length, 20);
      const isInitialLoad = this.state.isInitialLoad;
      const isResultEmpty = generatedRows.length === 0;

      // Next state
      const bodyRows = isResultEmpty ?
        this.state.bodyRows : [...this.state.bodyRows, ...generatedRows];
      const isLastPage = isResultEmpty;
      const isEmpty = isResultEmpty && isInitialLoad;

      this.setState({
        bodyRows,
        isInitialLoad: false,
        isLoadingBodyRows: false,
        isLastPage,
        isEmpty,
      });
    }, 2000);

    this.setState({
      lazyLoadingTimeoutId,
    });
  }

  generateRows(indexStart, numberOfItems) {
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
    const indexMax = this.state.bodyRowsMax;
    indexEnd = indexEnd >= indexMax ? indexMax : indexEnd;
    for (let i = indexStart; i < indexEnd; i++) {
      newArray.push(
        Object.assign({}, bodyRow, {id: i})
      );
    }
    return newArray;
  }

  toggleEmptyRows() {
    // Cancel fake ongoing request
    window.clearTimeout(this.state.lazyLoadingTimeoutId);

    // Toggle bodyRowsMax initial and 0
    const bodyRowsMax = this.state.bodyRowsMax === 0 ?
      this.state.bodyRowsMaxInitial : 0;

    // Reset to initial state to simulate initial load
    // with a different value of bodyRowsMax
    this.initializeState();

    this.setState(
      {
        bodyRowsMax,
      },
      // When we have the desired state we request server to load the new
      // data set.
      // Since setting state is batched and not sequential this
      // needs to be called as callback or else it won't work as expected.
      this.lazyLoadBodyRows
    );
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
      item => <GridBodyEditableCell
        content={item.passengers}
        onClick={() => {
          // Temp replacement for the edit modal
          let newValue = window.prompt(// eslint-disable-line no-alert
            'Edit this:',
            item.passengers
          );
          // Cancelled
          if (newValue === null) {
            return;
          }
          // If value deleted and empty string is rendered, there is nothing
          // to click in view to change it back, so it fixes that
          if (newValue === '') {
            newValue = 'deleted';
          }
          const newBodyRows = this.state.bodyRows.map((row) => {
            if (row.id === item.id) {
              row.passengers = newValue;
            }
            return row;
          });
          this.setState({
            bodyRows: newBodyRows,
          });
        }}
      />,
      item => item.cylinders,
      item => item.fuelEconomy,
      item => {
        return (
          <div>
            {item.sold}
            {String.fromCharCode(160)}
            <GridKpi
              className="up"
              content="+2%"
              title="+2%"
            />
          </div>
        );
      },
      item => {
        return (
          <div>
            {item.registered}
            {String.fromCharCode(160)}
            <GridKpi
              className="down"
              content="-2%"
              title="-2%"
            />
          </div>
        );
      },
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

    const isEmptyStateEnabled = this.state.bodyRowsMax === 0;

    let initialLoadingRow;
    let emptyRow;
    let loadingRow;
    if (this.state.isInitialLoad) {
      initialLoadingRow = <GridLoadingRow isInitial />;
    }
    if (this.state.isEmpty) {
      emptyRow = <GridEmptyRow />;
    }
    if (this.state.isLoadingBodyRows && !this.state.isInitialLoad && !this.state.isEmpty) {
      loadingRow = <GridLoadingRow />;
    }

    return (
      <Page title={this.props.route.name}>

        <Example isClear>

          <p>
            <button
              type="button"
              onClick={this.toggleEmptyRows.bind(this)}
            >
              {isEmptyStateEnabled ? 'Disable ' : 'Enable '}
              empty state
            </button>
          </p>

          <br/>

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
            // Initial loading indicator
            initialLoadingRow={initialLoadingRow}
            // Empty state indicator
            emptyRow={emptyRow}
            // Scroll
            // TODO: change to have a single source of truth.
            // Height should either be dynamically calculated or
            // the supplied value should be set as inline CSS to the cell.
            rowHeight={ROW_HEIGHT}
            bodyHeight={BODY_HEIGHT}
            overflowRecycledRowsCount={20}
            reverseZebraStripeClass="grid--reverseStriped"
            lazyLoadRows={this.lazyLoadBodyRows.bind(this)}
            loadingRow={loadingRow}
            loadDistanceFromBottom={1000}
          />

        </Example>

      </Page>
    );
  }

}
