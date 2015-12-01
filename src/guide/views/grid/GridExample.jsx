
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CheckBox,
  Entity,
  Filters,
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

import numeral from 'numeral';

export default class GridExample extends Component {

  constructor(props) {
    super(props);
    this.initializeState();

    // Because we need custom abbreviations, we need to overwrite the entire
    // English language definition.
    // TODO: Submit PR to numeral.js allowing customization of a language
    // definition so we won't have to overwrite the entire thing.
    numeral.language('en', {
      delimiters: {
        thousands: ',',
        decimal: '.',
      },
      abbreviations: {
        thousand: 'k',
        million: 'M',
        billion: 'B',
        trillion: 'T',
      },
      ordinal: (number) => {
        const b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' : // eslint-disable-line no-nested-ternary
          (b === 1) ? 'st' : // eslint-disable-line no-nested-ternary
          (b === 2) ? 'nd' : // eslint-disable-line no-nested-ternary
          (b === 3) ? 'rd' : 'th';
      },
      currency: {
        symbol: '$',
      },
    });
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

  onFilterRemove(name) {
    const addedFilters = this.state.addedFilters
      .filter(filter => filter.name !== name);

    this.setState({
      addedFilters,
    });
  }

  onFilterAdd(name, label, value) {
    const addedFilters = this.state.addedFilters.slice();
    addedFilters.push({
      name,
      label,
      value,
    });
    this.setState({
      addedFilters,
    });
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
      // Select all
      areAllRowsSelected: false,
      // Filters
      addedFilters: [],
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
          sold: numeral(this.getRandomInt(0, 2000000000)).format('0.[00]a'),
          registered: numeral(this.getRandomInt(0, 2000000000)).format('0.[00]a'),
          kpiSold: `+${this.getRandomInt(0, 100)}%`,
          kpiRegistered: `-${this.getRandomInt(0, 100)}%`,
          // TODO: In the case of requesting data from server this
          // could be a more distinct step when state is mixed in
          isSelected: this.state.areAllRowsSelected,
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

  toggleAllRowsSelected(areAllRowsSelected) {
    const bodyRows = this.state.bodyRows.map(row => {
      row.isSelected = areAllRowsSelected;
      return row;
    });
    this.setState({
      bodyRows,
      areAllRowsSelected,
    });
  }

  toggleRowSelected(id, isRowSelected) {
    let areAllRowsSelected = true;
    const bodyRows = this.state.bodyRows.map(row => {
      if (row.id === id) {
        row.isSelected = isRowSelected;
      }
      if (!row.isSelected) {
        areAllRowsSelected = false;
      }
      return row;
    });

    this.setState({
      bodyRows,
      areAllRowsSelected,
    });
  }

  render() {
    const headerCells = [
      <CheckBox
        id="select-all"
        checked={this.state.areAllRowsSelected}
        onClick={event =>
          this.toggleAllRowsSelected.bind(this)(event.target.checked)
        }
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
      item => <CheckBox
        id={item.id}
        checked={item.isSelected}
        onClick={event =>
          this.toggleRowSelected.bind(this)(item.id, event.target.checked)
        }
      />,
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
          {Entity.nbsp}
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
          {Entity.nbsp}
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

    function normalizeValue(value) {
      return value.toString().trim().toLowerCase();
    }

    function camelToSpaceCase(value) {
      const addedSpaces = value.replace( /([A-Z])/g, ' $1');
      return addedSpaces.charAt(0).toUpperCase() + addedSpaces.slice(1);
    }

    const availableFilters = this.state.bodyRows.length ?
      Object.keys(this.state.bodyRows[0]) :
      [];

    const availableFilterLabels = availableFilters.map(
      filter => camelToSpaceCase(filter)
    );

    function filterRows(rows, filters) {
      return rows.filter(row =>
        filters.every(filter => {
          const normalizedRowValue = normalizeValue(row[filter.name]);
          const normalizedFilterValue = normalizeValue(filter.value);
          return normalizedRowValue.indexOf(normalizedFilterValue) !== -1;
        })
      );
    }

    const filteredBodyRows = filterRows(this.state.bodyRows, this.state.addedFilters);

    function search(rows, term) {
      const normalizedTerm = normalizeValue(term);
      return rows.filter(row =>
        // It will return true when 1st match is found, otherwise false
        Object.keys(row).some(key => {
          const cellValue = normalizeValue(row[key]);
          const isTermFound = cellValue.indexOf(normalizedTerm) !== -1;
          return isTermFound;
        })
      );
    }

    const foundBodyRows = search(filteredBodyRows, this.state.searchTerm);

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
            <Filters
              addedFilters={this.state.addedFilters}
              availableFilters={availableFilters}
              availableFilterLabels={availableFilterLabels}
              onRemove={this.onFilterRemove.bind(this)}
              onAdd={this.onFilterAdd.bind(this)}
            />
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
