
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import GridBody from './body/GridBody.jsx';
import GridRowRecycler from '../services/grid/GridRowRecycler';
import ThrottledEventDispatcher from '../services/event/ThrottledEventDispatcher';

export {
  default as GridHeader,
} from './header/GridHeader.jsx';

export {
  default as GridFooter,
} from './footer/GridFooter.jsx';

export {
  default as GridRow,
} from './body/GridRow.jsx';

export {
  default as GridHeaderSortableCell,
} from './header/GridHeaderSortableCell.jsx';

export {
  default as GridBodyEditableCell,
} from './body/GridBodyEditableCell.jsx';

export {
  default as GridLoadingRow,
} from './loading/GridLoadingRow.jsx';

export {
  default as GridEmptyRow,
} from './empty/GridEmptyRow.jsx';

export {
  default as GridIcon,
} from './icon/GridIcon.jsx';

export {
  default as GridIconEdit,
} from './icon/GridIconEdit.jsx';

export {
  default as GridIconOptions,
} from './icon/GridIconOptions.jsx';

export {
  default as GridControls,
} from './controls/GridControls.jsx';

export {
  default as StickyGrid,
} from './stickyGrid/StickyGrid.jsx';

export default class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0, // Used and set by rowRecycler
      firstRecycledRowIndex: 0,
      firstRecycledRowOffset: 0,
    };

    this.onScrollHandler = this.onScroll.bind(this);
  }

  componentDidMount() {
    // Throttle scroll event handling, in an attempt to improve performance.
    this.scrollEventDispatcher = new ThrottledEventDispatcher(
      'scroll', 'optimizedScroll', window, this.onScrollHandler
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Returning false here seems to greatly improve performance a lot
    // (based on how the view and table headers become fixed with less latency).

    // So we'll only return true when this state property changes.
    if (nextState.firstRecycledRowOffset !== this.state.firstRecycledRowOffset) {
      return true;
    }

    // We will be provided a new props obeject whenever it changes, so we can
    // compare by reference instead of doing a deep comparison.
    if (nextProps !== this.props) {
      return true;
    }

    return false;
  }

  componentWillUnmount() {
    this.scrollEventDispatcher.teardown();
  }

  onScroll() {
    // Get our current scroll position. Compare between values useful in Chrome
    // and Firefox, respectively.
    const scrollPosition = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

    // Update state of recycled rows when the user scrolls the table.
    const rowRecycler = this.props.rowRecycler;
    if (rowRecycler) {
      this.setState(rowRecycler.getFirstRecycledRowState(this.state, scrollPosition));
    }

    // Lazily load rows as the user scrolls.
    if (this.props.lazyLoadRows) {
      // If scroll position is a certain distance from the bottom, invoke callback.
      const distanceFromBottom = (document.documentElement.scrollHeight - window.innerHeight) - scrollPosition;
      if (distanceFromBottom <= 1000) {
        this.props.lazyLoadRows();
      }
    }
  }

  render() {
    const {
      firstRecycledRowIndex,
      firstRecycledRowOffset,
    } = this.state;

    const rowsCount = this.props.rows.length;
    // Set this to the rowsCount - 1 so that we can populate the table when
    // there is no row recycler.
    let lastRecycledRowIndex = rowsCount - 1;
    let lastRecycledRowOffset = 0;

    if (this.props.rowRecycler) {
      const lastRecycledRowState =
        this.props.rowRecycler.getLastRecycledRowState(this.state);
      lastRecycledRowIndex = lastRecycledRowState.lastRecycledRowIndex;
      lastRecycledRowOffset = lastRecycledRowState.lastRecycledRowOffset;
    }

    // Create recycled rows.
    const rows = [];
    if (Array.isArray(this.props.rows)) {
      for (let index = firstRecycledRowIndex; index <= lastRecycledRowIndex && index < rowsCount; index++) {
        const row = this.props.rows[index];
        rows.push(row);
      }
    } else {
      // We have one row, for some reason.
      rows.push(this.props.rows);
    }

    // Style classes
    const containerClass = classNames('grid__container', this.props.classContainer);
    const tableClass = classNames('grid__table', this.props.classTable);

    return (
      <div
        data-id={this.props.dataId}
        className={containerClass}
      >
        <table className={tableClass}>

          {this.props.header}

          <GridBody
            columnsCount={this.props.columnsCount}
            firstRecycledRowOffset={firstRecycledRowOffset}
            lastRecycledRowOffset={lastRecycledRowOffset}
            // Initial loading state
            initialLoadingRow={this.props.initialLoadingRow}
            // Loading state
            loadingRow={this.props.loadingRow}
            // Empty state
            emptyRow={this.props.emptyRow}
            // Classes
            classBody={this.props.classBody}
          >
            {rows}
          </GridBody>

          {this.props.footer}

        </table>
      </div>
    );
  }

}

Grid.propTypes = {
  dataId: PropTypes.string,
  columnsCount: GridBody.propTypes.columnsCount,
  header: PropTypes.element,
  footer: PropTypes.element,
  rows: GridBody.propTypes.children,
  lazyLoadRows: PropTypes.func,
  // Initial loading state
  initialLoadingRow: PropTypes.element,
  // Empty state
  emptyRow: PropTypes.element,
  // Loading state
  loadingRow: GridBody.propTypes.loadingRow,
  rowRecycler: PropTypes.instanceOf(GridRowRecycler),
  // Classes
  classContainer: PropTypes.string,
  classTable: PropTypes.string,
  classBody: PropTypes.string,
};

Grid.defaultProps = {
  rows: [],
};
