
// TODO: Create tests for this logic.

export default class GridRowRecycler {

  constructor(config) {
    this.rows = config.rows;
    this.recycledRowsOverflowDistance = config.recycledRowsOverflowDistance;
    this.recycledRowsCount = config.recycledRowsCount;
    this.getRowHeight = config.getItemHeight;
  }

  getFirstRecycledRowState(state, newScrollPosition) {
    const rowsCount = this.rows.length;

    // Calculate the index and offset of the first recycled row.
    const oldFirstRecycledRowIndex = state.firstRecycledRowIndex;
    const oldFirstRecycledRowOffset = state.firstRecycledRowOffset;

    // Measure scroll amount and direction.
    const distanceScrolled = newScrollPosition - state.scrollPosition;
    const isScrollingDown = distanceScrolled > 0;

    // Set scroll threshhold at which our recycled rows need to be updated.
    const offsetScrollPosition =
      newScrollPosition - this.recycledRowsOverflowDistance;

    // We'll mutate these values while deriving our new first recycled row.
    let firstRecycledRowIndex = oldFirstRecycledRowIndex;
    let firstRecycledRowOffset = oldFirstRecycledRowOffset;

    if (isScrollingDown) {
      // Calculate the position of the bottom edge of the first visible row.
      // This is relevant if we are scrolling down and items are disappearing at
      // the top egde of the grid.
      const firstRecycledRow = this.rows[oldFirstRecycledRowIndex];
      const firstRecycledRowBottomEdgePosition =
        oldFirstRecycledRowOffset + this.getRowHeight(firstRecycledRow);
      if (offsetScrollPosition > firstRecycledRowBottomEdgePosition) {
        // If we've scrolled the first visible row entirely out of the grid
        // then we need to increment the index.
        let rowDistanceScrolled = 0;
        while (
          rowDistanceScrolled < distanceScrolled &&
          firstRecycledRowIndex < rowsCount
        ) {
          const row = this.rows[firstRecycledRowIndex];
          rowDistanceScrolled += this.getRowHeight(row);
          firstRecycledRowIndex ++;
        }
        firstRecycledRowOffset += rowDistanceScrolled;
      }
    } else {
      // Calculate the position of the bottom edge of the first visible row.
      // This is relevant if we are scrolling up and items are appearing at the
      // top egde of the grid.
      const firstRecycledRowTopEdgePosition = oldFirstRecycledRowOffset;
      if (offsetScrollPosition < firstRecycledRowTopEdgePosition) {
        // If we've scrolled the frist visible row just a tiny bit below the
        // top edge of the grid, then we need to decrement the index.
        let rowDistanceScrolled = 0;
        while (
          rowDistanceScrolled > distanceScrolled &&
          firstRecycledRowIndex > 0
        ) {
          const row = this.rows[firstRecycledRowIndex - 1];
          rowDistanceScrolled -= this.getRowHeight(row);
          firstRecycledRowIndex --;
        }
        firstRecycledRowOffset += rowDistanceScrolled;
      }
    }

    return {
      scrollPosition: newScrollPosition,
      firstRecycledRowIndex,
      firstRecycledRowOffset,
    };
  }

  getLastRecycledRowState(state) {
    const rowsCount = this.rows.length;

    // Calculate the index and offset of the last recycled row.
    const recycledRowsCount = this.recycledRowsCount;
    const lastRecycledRowIndex =
      Math.min(state.firstRecycledRowIndex + recycledRowsCount, rowsCount);

    let lastRecycledRowOffset = 0;
    for (let i = lastRecycledRowIndex; i < rowsCount; i++) {
      const row = this.rows[i];
      lastRecycledRowOffset += this.getRowHeight(row);
    }

    return {
      lastRecycledRowIndex,
      lastRecycledRowOffset,
    };
  }

}
