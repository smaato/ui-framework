
import React, {
  Component,
} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {
  CheckBox,
  Grid,
  GridBodyEditableCell,
  GridEmptyRow,
  GridHeader,
  GridHeaderSortableCell,
  GridIcon,
  GridLoadingRow,
  GridRow,
  KpiNegative,
  KpiPositive,
  StickyGrid,
} from '../../../framework/framework';

import {
  Entity,
  FilterableItems,
  GridRowRecycler,
  Sorter,
  SortState,
  GridStencil,
  ThrottledEventDispatcher,
} from '../../../framework/services';

import numeral from 'numeral';

import createRows from '../grid/createRows';

const defaultState = {
  bodyRows: [],
  isEmptyStateDemonstration: false,
  isInitialLoad: true,
  isLoadingBodyRows: false,
  isLastPage: false,
  isEmpty: false,
  // Reference to fake server request, provides ability to cancel it
  lazyLoadingTimeoutId: null,
  // Search
  searchTerm: '',
  // Selection state
  selectionMap: {},
  areAllRowsSelected: false,
  // Filters
  conditionCheckers: [],
};

export default class GridExample extends Component {

  constructor(props) {
    super(props);

    this.hasColumnWidths = false;

    this.onResizeHandler = this.onResize.bind(this);
    this.onScrollHandler = this.onScroll.bind(this);

    this.GRID_ID = 'gridExample';
    this.STICKY_THRESHOLD = 155;
    this.ROW_HEIGHT = 34;
    this.BODY_HEIGHT = 500;
    this.COLUMNS_COUNT = 11;
    this.ROWS_PER_PAGE = 200;

    // Prioritize the order in which our columns should disappear, ascending.
    this.COLUMN_PRIORITIES = [
      8,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1,
      0,
      8,
    ];

    // State.
    this.sortState = new SortState({
      descendingProperty: 'isSortDescending',
      indexProperty: 'sortedColumnIndex',
      isDescending: false,
      index: 1,
    });

    this.state = Object.assign(
      {},
      defaultState,
      this.sortState.getState()
    );

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

    this.headerCellPropsProviders = [
      () => ({
        children: (
          <CheckBox
            id="select-all"
            checked={this.state.areAllRowsSelected}
            onClick={this.toggleAllRowsSelected}
          />
        ),
      }), index => ({
        children: (
          <GridHeaderSortableCell
            onSort={this.onSort}
            index={index}
            isSelected={this.state.sortedColumnIndex === index}
            isSortDescending={this.state.isSortDescending}
          >
            Id
          </GridHeaderSortableCell>
        ),
      }), index => ({
        children: (
          <GridHeaderSortableCell
            onSort={this.onSort}
            index={index}
            isSelected={this.state.sortedColumnIndex === index}
            isSortDescending={this.state.isSortDescending}
          >
            Name
          </GridHeaderSortableCell>
        ),
      }), index => ({
        children: (
          <GridHeaderSortableCell
            onSort={this.onSort}
            index={index}
            isSelected={this.state.sortedColumnIndex === index}
            isSortDescending={this.state.isSortDescending}
          >
            Status
          </GridHeaderSortableCell>
        ),
      }), index => ({
        children: (
          <GridHeaderSortableCell
            onSort={this.onSort}
            index={index}
            isSelected={this.state.sortedColumnIndex === index}
            isSortDescending={this.state.isSortDescending}
          >
            Fuel
          </GridHeaderSortableCell>
        ),
      }), index => ({
        children: (
          <GridHeaderSortableCell
            onSort={this.onSort}
            index={index}
            isSelected={this.state.sortedColumnIndex === index}
            isSortDescending={this.state.isSortDescending}
          >
            Passengers
          </GridHeaderSortableCell>
        ),
      }), index => ({
        children: (
          <GridHeaderSortableCell
            onSort={this.onSort}
            index={index}
            isSelected={this.state.sortedColumnIndex === index}
            isSortDescending={this.state.isSortDescending}
          >
            Cylinders
          </GridHeaderSortableCell>
        ),
      }), index => ({
        children: (
          <GridHeaderSortableCell
            onSort={this.onSort}
            index={index}
            isSelected={this.state.sortedColumnIndex === index}
            isSortDescending={this.state.isSortDescending}
          >
            Fuel Economy
          </GridHeaderSortableCell>
        ),
      }), index => ({
        children: (
          <GridHeaderSortableCell
            onSort={this.onSort}
            index={index}
            isSelected={this.state.sortedColumnIndex === index}
            isSortDescending={this.state.isSortDescending}
          >
            # Sold
          </GridHeaderSortableCell>
        ),
      }), () => ({
        children: 'Registered',
      }), () => undefined,
    ];

    this.footerCellPropsProviders = [
      () => undefined,
      () => undefined,
      () => undefined,
      () => undefined,
      () => undefined,
      () => undefined,
      () => undefined,
      () => undefined,
      () => ({
        children: '152.1m',
      }), () => ({
        children: 'Registered',
      }), () => undefined,
    ];

    this.cellValueProviders = [
      () => undefined,
      item => item.id,
      item => item.name,
      item => item.status,
      item => item.fuel,
      item => item.passengers,
      item => item.cylinders,
      item => item.fuelEconomy,
      item => item.sold,
      item => item.registered,
      () => undefined,
    ];

    // Provide the properties that should belong to each row cell, reflecting
    // the state of the row's item.
    this.rowCellPropsProviders = [
      item => ({
        // Let the user click on the contact ID to select it.
        children: (
          <CheckBox
            id={item.id}
            checked={this.state.selectionMap[item.id]}
            onClick={this.toggleRowSelected}
          />
        ),
      }), item => ({
        children: item.id,
      }), item => ({
        children: item.name,
      }), item => ({
        children: item.status,
      }), item => ({
        children: item.fuel,
      }), item => ({
        children: (
          <GridBodyEditableCell
            onClick={event => { // eslint-disable-line react/jsx-no-bind
              event.stopPropagation();

              // Temp replacement for the edit modal
              let newValue = window.prompt( // eslint-disable-line no-alert
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
                  row.passengers = newValue; // eslint-disable-line no-param-reassign
                }
                return row;
              });
              this.setState({
                bodyRows: newBodyRows,
              });
            }}
          >
            {item.passengers}
          </GridBodyEditableCell>
        ),
      }), item => ({
        children: item.cylinders,
      }), item => ({
        children: `${item.fuelEconomy}mpg`,
      }), item => ({
        children: (
          <div>
            {numeral(item.sold).format('0.[00]a')}
            {Entity.nbsp}
            <KpiPositive
              title={`+${item.kpiSold}%`}
            >
              {`+${item.kpiSold}%`}
            </KpiPositive>
          </div>
        ),
      }), item => ({
        children: (
          <div>
            {numeral(item.registered).format('0.[00]a')}
            {Entity.nbsp}
            <KpiNegative
              title={`-${item.kpiRegistered}%`}
            >
              {`-${item.kpiRegistered}%`}
            </KpiNegative>
          </div>
        ),
      }), item => ({
        /* eslint-disable react/jsx-no-bind */
        children: (
          <div>
            <GridIcon
              type={GridIcon.TYPE.OPTIONS}
              data={item}
              onClick={this.onClickRowOptions}
            />
            <GridIcon
              type={GridIcon.TYPE.EDIT}
              data={item}
              onClick={this.onClickRowEdit}
            />
          </div>
        ),
        /* eslint-ensable react/jsx-no-bind */
      }),
    ];

    this.toggleEmptyRows = this.toggleEmptyRows.bind(this);
    this.onRemoveConditionChecker = this.onRemoveConditionChecker.bind(this);
    this.onAddConditionChecker = this.onAddConditionChecker.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSort = this.onSort.bind(this);
    this.lazyLoadBodyRows = this.lazyLoadBodyRows.bind(this);
    this.onClickRow = this.onClickRow.bind(this);
    this.toggleAllRowsSelected = this.toggleAllRowsSelected.bind(this);
    this.toggleRowSelected = this.toggleRowSelected.bind(this);
  }

  componentDidMount() {
    // Throttle resize event handling, in an attempt to improve performance.
    this.resizeEventDispatcher = new ThrottledEventDispatcher(
      'resize', 'optimizedResize', window, this.onResizeHandler
    );

    // Throttle scroll event handling, in an attempt to improve performance.
    this.scrollEventDispatcher = new ThrottledEventDispatcher(
      'scroll', 'optimizedScroll', window, this.onScrollHandler
    );

    // Cache references to DOM elements.
    this.gridElement = $(`#${this.GRID_ID}`);
    this.refreshHeaderColumnElementReferences();

    // Update the sticky header with column widths.
    this.updateStickyHeaderColumnWidths();

    // Load initial data.
    this.lazyLoadBodyRows();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // If we already measured the columns, then we don't need to do
    // anything in response to a change in the props/state.
    if (!this.hasColumnWidths) {
      // If the incoming props/state let us measure the columns, then do so.
      if (nextState.bodyRows.length !== 0) {
        this.hasColumnWidths = true;
        this.measureColumnWidths(nextState.bodyRows);
      }
    }
    return true;
  }

  componentDidUpdate() {
    // New props may have caused the table to re-render, so we need to refresh
    // our references to DOM elements.
    this.refreshHeaderColumnElementReferences();
    this.updateStickyHeaderColumnWidths();
  }

  componentWillUnmount() {
    this.resizeEventDispatcher.teardown();
    this.scrollEventDispatcher.teardown();

    // Clean up the DOM element we've created.
    if (this.$stylesContainer) {
      this.$stylesContainer.remove();
    }

    window.clearTimeout(this.state.lazyLoadingTimeoutId);
  }

  onResize() {
    this.updateStickyHeaderColumnWidths();
  }

  onScroll() {
    this.updateStickyHeaderColumnWidths();

    // Get our current scroll position. Compare between values useful in Chrome
    // and Firefox, respectively.
    const scrollPosition = Math.max(
      document.body.scrollTop, document.documentElement.scrollTop);

    // Set header's fixed state manually, for better performance.
    const isHeaderFixed = scrollPosition >= this.STICKY_THRESHOLD;
    if (isHeaderFixed !== this.isHeaderFixed) {
      this.isHeaderFixed = isHeaderFixed;
      if (isHeaderFixed) {
        this.gridElement.addClass('is-grid-header-stuck');
      } else {
        this.gridElement.removeClass('is-grid-header-stuck');
      }
    }
  }

  onSearch(term) {
    this.setState({
      searchTerm: term,
    });
    // In the case of existing API, when lazy loading is enabled, we need to
    // purge bodyRows and request sorted data from the server.
    //
    // ```
    // if (isLazyLoadEnabled) {
    //  this.setState(defaultState);
    //  this.lazyLoadBodyRows();
    // }
    // ```
  }

  onClickRow(item) {
    window.alert(`Clicked row with ID: ${item.id}`); // eslint-disable-line no-alert
  }

  onClickRowEdit(item, event) {
    event.stopPropagation();
    window.alert(`Clicked edit for row with ID: ${item.id}`); // eslint-disable-line no-alert
  }

  onClickRowOptions(item, event) {
    event.stopPropagation();
    window.alert(`Clicked options for row with ID: ${item.id}`); // eslint-disable-line no-alert
  }

  onSort(cellIndex) {
    // In the case of existing API, when lazy loading is enabled, we need to
    // purge bodyRows and request sorted data from the server.
    //
    // ```
    // if (isLazyLoadEnabled) {
    //  this.setState(defaultState);
    //  this.lazyLoadBodyRows();
    // }
    // ```

    this.sortState.sortOn(cellIndex);
    this.setState(this.sortState.getState());
  }

  onRemoveConditionChecker(conditionCheckerToRemove) {
    const conditionCheckers = this.state.conditionCheckers
      .filter(conditionChecker => (
        conditionChecker !== conditionCheckerToRemove
      ));

    this.setState({
      conditionCheckers,
    });
  }

  onAddConditionChecker(conditionChecker) {
    const conditionCheckers = this.state.conditionCheckers.slice();
    conditionCheckers.push(conditionChecker);
    this.setState({
      conditionCheckers,
    });
  }

  getBodyRows() {
    function filterRows(rows, filters) {
      return new FilterableItems(rows).applyFilters(filters);
    }

    const filteredBodyRows =
      filterRows(this.state.bodyRows, this.state.conditionCheckers);

    const foundBodyRows = this.search(filteredBodyRows, this.state.searchTerm);
    return Sorter.sort(
      foundBodyRows,
      this.cellValueProviders,
      this.state.sortedColumnIndex,
      this.state.isSortDescending
    );
  }

  refreshHeaderColumnElementReferences() {
    // Cache references to DOM elements.
    this.headerColumnElements = $(`#${this.GRID_ID} thead th`);
    this.stickyHeaderColumnElements =
      $(`#${this.GRID_ID} .stickyGridHeaderCell`);
  }

  updateStickyHeaderColumnWidths() {
    // Set sticky header column widths to match whatever they currently are
    // in the real table.
    const columnWidths = this.headerColumnElements.map((index, column) => (
      $(column).innerWidth()
    ));

    this.stickyHeaderColumnElements.each((index, element) => {
      $(element).css('width', `${columnWidths[index]}px`);
    });
  }

  measureColumnWidths(items) {
    // This is the container we'll store the styles in.
    this.$stylesContainer = $('<style />').appendTo($('body'));
    // Create and store media queries and column widths.
    const gridStencil = new GridStencil({
      gridId: this.GRID_ID,
      items,
      rowCellPropsProviders: this.rowCellPropsProviders,
      headerCellPropsProviders: this.headerCellPropsProviders,
      rowHeight: this.ROW_HEIGHT,
      columnPriorities: this.COLUMN_PRIORITIES,
      spaceToBothSidesOfGrid: 0,
    });
    const node = ReactDOM.findDOMNode(this);
    const {
      mediaQueries,
      columnWidths,
    } = gridStencil.createWithNode(node);
    this.$stylesContainer.append(mediaQueries.join('\n'));
    this.$stylesContainer.append(columnWidths.join('\n'));
  }

  lazyLoadBodyRows() {
    if (this.state.isLoadingBodyRows || this.state.isLastPage) return;

    this.setState({
      isLoadingBodyRows: true,
    });

    // Fake request
    const lazyLoadingTimeoutId = window.setTimeout(() => {
      if (this.state.isEmptyStateDemonstration) {
        return this.setState({
          bodyRows: [],
          isInitialLoad: false,
          isLoadingBodyRows: false,
          isLastPage: true,
          isEmpty: true,
        });
      }

      // Current state
      const newRows = createRows(
        this.state.bodyRows.length,
        this.ROWS_PER_PAGE
      );

      // Update selection state
      const selectionMap = Object.assign({}, this.state.selectionMap);
      if (this.state.areAllRowsSelected) {
        newRows.forEach(row => {
          selectionMap[row.id] = true;
        });
      }

      const isInitialLoad = this.state.isInitialLoad;
      const isResultEmpty = newRows.length === 0;

      // Next state
      const bodyRows = isResultEmpty ?
        this.state.bodyRows : [...this.state.bodyRows, ...newRows];
      const isLastPage = isResultEmpty;
      const isEmpty = isResultEmpty && isInitialLoad;

      this.setState({
        bodyRows,
        isInitialLoad: false,
        isLoadingBodyRows: false,
        isLastPage,
        isEmpty,
        selectionMap,
      });
    }, 2000);

    this.setState({
      lazyLoadingTimeoutId,
    });
  }

  search(rows, term) {
    if (!term) {
      return rows;
    }
    const normalizedTerm = term.trim().toLowerCase();
    return rows.filter(row => (
      // It will return true when 1st match is found, otherwise false
      this.cellValueProviders.some(provider => {
        const cellValue = provider(row);
        if (cellValue === undefined || cellValue === null) {
          return false;
        }
        const normalizedCellValue = cellValue.toString().trim().toLowerCase();
        return normalizedCellValue.indexOf(normalizedTerm) !== -1;
      })
    ));
  }

  toggleEmptyRows() {
    // Cancel fake ongoing request
    window.clearTimeout(this.state.lazyLoadingTimeoutId);

    // When we have the desired state we request server to load the new
    // data set. Since setting state is batched and not sequential we
    // need to call `lazyLoadBodyRows` or else it won't work as expected.
    this.setState({
      bodyRows: [],
      isEmptyStateDemonstration: !this.state.isEmptyStateDemonstration,
      isLoadingBodyRows: false,
      isLastPage: false,
      isEmpty: false,
      isInitialLoad: true,
    }, this.lazyLoadBodyRows);
  }

  toggleAllRowsSelected(areAllRowsSelected) {
    const selectionMap = {};

    this.state.bodyRows.forEach(item => {
      selectionMap[item.id] = areAllRowsSelected;
    });

    this.setState({
      selectionMap,
      areAllRowsSelected,
    });
  }

  toggleRowSelected(isRowSelected, id) {
    const selectionMap = Object.assign({}, this.state.selectionMap);
    selectionMap[id] = isRowSelected;

    const areAllRowsSelected = this.state.bodyRows.every(
      item => selectionMap[item.id]
    );

    this.setState({
      selectionMap,
      areAllRowsSelected,
    });
  }

  renderInitialLoadingRow() {
    if (this.state.isInitialLoad) {
      return <GridLoadingRow columnsCount={this.COLUMNS_COUNT} isInitial />;
    }
  }

  renderEmptyRow() {
    if (this.state.isEmpty) {
      return <GridEmptyRow columnsCount={this.COLUMNS_COUNT} />;
    }
  }

  renderLoadingRow() {
    if (
      this.state.isLoadingBodyRows &&
      !this.state.isInitialLoad &&
      !this.state.isEmpty
    ) {
      return <GridLoadingRow columnsCount={this.COLUMNS_COUNT} />;
    }
  }

  renderGridHeader() {
    return (
      <GridHeader
        headerCellPropsProviders={this.headerCellPropsProviders}
      />
    );
  }

  render() {
    const rows = [];
    const items = this.getBodyRows();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // Add items, in order.
      const stripedClass = (i % 2 === 0) ? 'gridRow--even' : 'gridRow--odd';
      rows.push(
        <GridRow
          key={item.id}
          data={item}
          rowCellPropsProviders={this.rowCellPropsProviders}
          onClick={this.onClickRow}
          height={this.ROW_HEIGHT}
          classBodyRow={stripedClass}
        />
      );
    }

    const rowRecycler = new GridRowRecycler({
      rows,
      recycledRowsOverflowDistance: 1300,
      recycledRowsCount: 120,
      getItemHeight: item => item.props.height,
    });

    return (
      <StickyGrid
        id={this.GRID_ID}
        headerCellPropsProviders={this.headerCellPropsProviders}
      >
        <Grid
          columnsCount={this.COLUMNS_COUNT}
          header={this.renderGridHeader()}
          rows={rows}
          lazyLoadRows={this.lazyLoadBodyRows}
          // Initial loading state
          initialLoadingRow={this.renderInitialLoadingRow()}
          // Empty state
          emptyRow={this.renderEmptyRow()}
          // Loading state
          loadingRow={this.renderLoadingRow()}
          onClickRow={this.onClickRow}
          rowRecycler={rowRecycler}
        />
      </StickyGrid>
    );
  }

}
