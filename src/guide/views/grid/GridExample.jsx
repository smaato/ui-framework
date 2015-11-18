
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CheckBox,
  EntityService,
  Grid,
  GridBodyEditableCell,
  GridControls,
  GridEmptyRow,
  GridKpiNegative,
  GridKpiPositive,
  GridLoadingRow,
  GridSearch,
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

  onSearch(term) {
    this.setState({
      searchTerm: term,
    });
    // In the case of existing API and enabled lazy loading
    // purge bodyRows and request filtered data from the server.
    // Would be something like the code below
    /*
    // Reset state, but not sorting and searchTerm state
    this.initializeState();
    this.lazyLoadBodyRows();
    */
  }

  // Returns a random integer between min (inclusive) and max (inclusive)
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // It is extracted to a function to easily reset to initial state
  initializeState() {
    const bodyRowsMax = 80;
    // In the app that uses Grid this state should be inside reducer
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
      // Sorting
      // Array of col indexes to enable sorting for.
      // I disabled those whose render function output DOM elements, unlike
      // those outputting string or number it is not clear how to sort them.
      sortColumnIndexes: [1, 2, 3, 4, 6, 7],
      isSortDescending: true,
      // Index of column to sort by
      sortedColumnIndex: 1,
      // Search
      searchTerm: '',
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
    let indexEnd = indexStart + numberOfItems;
    const indexMax = this.state.bodyRowsMax;
    indexEnd = indexEnd >= indexMax ? indexMax : indexEnd;
    for (let i = indexStart; i < indexEnd; i++) {
      newArray.push(
        {
          id: i,
          name: `Ford F${this.getRandomInt(0, 50000)}`,
          status: 'In Production',
          fuel: 'Diesel, Unleaded',
          passengers: this.getRandomInt(0, 100),
          cylinders: this.getRandomInt(0, 8),
          fuelEconomy: `${this.getRandomInt(0, 200000)}mpg`,
          sold: `${this.getRandomInt(0, 200000)}k`,
          registered: `${this.getRandomInt(0, 200000)}B`,
          kpiSold: `+${this.getRandomInt(0, 100)}%`,
          kpiRegistered: `-${this.getRandomInt(0, 100)}%`,
        }
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

  sortFunc(bodyRows, bodyRenderer, cellIndex, isSortDesc) {
    return bodyRows.sort((a, b) => {
      // We have the data for the row as an object and
      // renderer for the cell/column, which in theory can output
      // anything.
      const cellRenderA = bodyRenderer[cellIndex](a);
      const cellRenderB = bodyRenderer[cellIndex](b);
      const isNumber = typeof cellRenderA === 'number';
      let cellContentA;
      let cellContentB;
      if (isNumber) {
        cellContentA = cellRenderA;
        cellContentB = cellRenderB;
      } else {
        cellContentA = cellRenderA.toString().toLowerCase();
        cellContentB = cellRenderB.toString().toLowerCase();
      }
      // Ascending
      if (cellContentA < cellContentB) {
        return isSortDesc ? -1 : 1;
      }
      // Descending
      if (cellContentA > cellContentB) {
        return isSortDesc ? 1 : -1;
      }
      // No sorting
      return 0;
    });
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
      item => <CheckBox id={item.id} />,
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
      item => (
        <div>
          {item.sold}
          {EntityService.nbsp}
          <GridKpiPositive
            title={item.kpiSold}
          >
            {item.kpiSold}
          </GridKpiPositive>
        </div>
      ),
      item => (
        <div>
          {item.registered}
          {EntityService.nbsp}
          <GridKpiNegative
            title={item.kpiRegistered}
          >
            {item.kpiRegistered}
          </GridKpiNegative>
        </div>
      ),
      () => (
        <span>
          <IconEllipsis />
          <IconCog />
        </span>
      ),
    ];

    function search(rows, term) {
      const normalizedTerm = term.trim().toLowerCase();
      return rows.filter(row =>
        // It will return true when 1st match is found, otherwise false
        Object.keys(row).some(key => {
          const cellValue = row[key].toString().trim().toLowerCase();
          const isTermFound = cellValue.indexOf(normalizedTerm) !== -1;
          return isTermFound;
        })
      );
    }

    const foundBodyRows = search(this.state.bodyRows, this.state.searchTerm);

    function onSort(cellIndex) {
      const isSortDesc = this.state.sortedColumnIndex === cellIndex ?
        !this.state.isSortDescending : true;

      // In the case of existing API, when lazy loading is enabled, we need to
      // purge bodyRows and request sorted data from the server.
      /*
      if (isLazyLoadEnabled) {
        this.initializeState();
        this.lazyLoadBodyRows();
      }
      */

      this.setState({
        sortedColumnIndex: cellIndex,
        isSortDescending: isSortDesc,
      });
    }

    const sortedBodyRows = this.sortFunc(
      foundBodyRows,
      bodyRenderer,
      this.state.sortedColumnIndex,
      this.state.isSortDescending
    );

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

          <GridControls>
            <GridSearch
              onSearch={this.onSearch.bind(this)}
            />
          </GridControls>

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
            bodyRows={sortedBodyRows}
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
            // Sorting
            sortColumnIndexes={this.state.sortColumnIndexes}
            isSortDescending={this.state.isSortDescending}
            sortedColumnIndex={this.state.sortedColumnIndex}
            onSort={onSort.bind(this)}
          />

        </Example>

      </Page>
    );
  }

}
