
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import GridBodyRow from './GridBodyRow.jsx';

export default class GridBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    for (const key in nextState) {
      if (nextState.hasOwnProperty(key)) {
        // If the nextState has different values, then we should update.
        if (nextState[key] !== this.state[key]) {
          return true;
        }
      }
    }
    // We will be provided a new props obeject whenever it changes, so we can
    // compare by reference instead of doing a deep comparison.
    return nextProps !== this.props;
  }

  onScroll() {
    // Update state when the user scrolls the table.
    const scrollableNode = this.refs.scrollable;
    const scrollPosition = scrollableNode.scrollTop;
    this.setState({
      scrollPosition: scrollPosition,
    });
    // Lazily load rows as the user scrolls.
    if (this.props.lazyLoadRows) {
      // If scroll position is a certain distance from the bottom, invoke callback.
      const distanceFromBottom = (scrollableNode.scrollHeight - scrollableNode.offsetHeight) - scrollPosition;
      if (distanceFromBottom <= this.props.loadDistanceFromBottom) {
        this.props.lazyLoadRows();
      }
    }
  }

  render() {
    // We have to do a ton of logic here to derive recycled rows state from
    // props and state.
    const {
      rowHeight,
      bodyHeight,
      overflowRecycledRowsCount,
    } = this.props;
    const rowsInBodyCount = Math.ceil(bodyHeight / rowHeight);
    const rowCount = this.props.rows.length;

    // Figure out which rows are visible in the table body as well as
    // how to position the recycled rows within the table body so
    // that they are visible and so that the scroll bar state is accurate.
    const precedingRowsCount = Math.floor(this.state.scrollPosition / rowHeight);
    const firstVisibleItemIndex = Math.max(precedingRowsCount - overflowRecycledRowsCount, 0);
    const precedingRowsHeight = firstVisibleItemIndex * rowHeight;

    const followingRowsCount = firstVisibleItemIndex + rowsInBodyCount + overflowRecycledRowsCount;
    const lastVisibleItemIndex = Math.min(followingRowsCount + overflowRecycledRowsCount, rowCount - 1);
    // Subtract a row to remove gap from appearing when scrolled to the bottom.
    const followingRowsHeight = (rowCount - lastVisibleItemIndex - 1) * rowHeight;

    // Create recycled rows.
    const rows = [];
    for (let index = firstVisibleItemIndex, key = 0; index <= lastVisibleItemIndex; index++, key++) {
      const row = this.props.rows[index];
      // NOTE: We deliberately use static keys in order to bypass React's DOM
      // reconciliation process, which interferes with scrolling.
      rows.push(
        <GridBodyRow
          classBodyRow={this.props.classBodyRow}
          classBodyCell={this.props.classBodyCell}
          key={key}
          cells={row}
          rowHeight={this.props.rowHeight}
        />
      );
    }

    // Create table body classes.
    const optionalClasses = {};
    if (this.props.reverseZebraStripeClass) {
      // If rows are zebra-striped, we need to alternate between striping the odd
      // and even rows as we scroll.
      const isZebraStripingReversed = firstVisibleItemIndex % 2 !== 0;
      optionalClasses[this.props.reverseZebraStripeClass] =
        isZebraStripingReversed;
    }
    const sectionClass = classNames(
      'dataTable__tbody',
      this.props.classBody,
      optionalClasses
    );

    const {
      initialLoadingRow,
      loadingRow,
      emptyRow,
    } = this.props;

    return (
      <div
        className={sectionClass}
        ref="scrollable"
        onScroll={this.onScroll.bind(this)}
        style={{height: bodyHeight}}
      >
        {/* A row to indicate initial loading progress */}
        {initialLoadingRow}

        {/* A row to indicate empty state */}
        {emptyRow}

        {/* Fake the preceding rows */}
        <div style={{minHeight: `${precedingRowsHeight}px`}}></div>

        {/* Recycled rows */}
        {rows}

        {/* Fake the following rows */}
        <div style={{minHeight: `${followingRowsHeight}px`}}></div>

        {/* A row to indicate loading progress */}
        {loadingRow}
      </div>
    );
  }

}

GridBody.propTypes = {
  classBody: PropTypes.string,
  classBodyRow: PropTypes.string,
  classBodyCell: PropTypes.string,
  rows: PropTypes.array.isRequired,
  // Initial loading state
  initialLoadingRow: PropTypes.element,
  // Empty state
  emptyRow: PropTypes.element,
  // Scroll
  rowHeight: PropTypes.number.isRequired,
  bodyHeight: PropTypes.number.isRequired,
  lazyLoadRows: PropTypes.func,
  overflowRecycledRowsCount: PropTypes.number,
  reverseZebraStripeClass: PropTypes.string,
  loadingRow: PropTypes.element,
  loadDistanceFromBottom: PropTypes.number,
};
