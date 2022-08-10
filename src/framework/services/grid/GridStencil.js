
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import GridBody from '../../grid/body/GridBody.jsx';
import GridRow from '../../grid/body/GridRow.jsx';
import GridHeader from '../../grid/header/GridHeader.jsx';

export default class GridStencil {

  constructor(initialConfig) {
    const config = Object.assign({}, {
      sampleSize: 200,
    }, initialConfig);

    // Config properties.
    this.gridId = config.gridId;
    this.items = config.items;
    this.rowCellPropsProviders = config.rowCellPropsProviders;
    this.headerCellPropsProviders = config.headerCellPropsProviders;
    this.rowHeight = config.rowHeight;
    this.columnPriorities = config.columnPriorities;
    this.spaceToBothSidesOfGrid = config.spaceToBothSidesOfGrid;
    this.sampleCount = Math.min(config.sampleSize, config.items.length);

    // Derived properties.
    this.columnCount = config.columnPriorities.length;
  }

  createWithNode(originalNode) {
    // We're going to jump outside of the React life cycle for a bit, do a bunch of
    // DOM manipulation on our own, and then jump back in. What we're doing is:
    //
    // 1. Rendering a non-React version of the grid.
    // 2. Iteratively removing each column in order of priority.
    // 3. At each iteration we:
    //    * Measure the grid width...
    //    * ...and create a media query which will hide this column at the
    //      measured width.
    //
    // When we've created the media queries, we destroy this non-React grid,
    // and put back the original React grid, and React carries on as if nothing
    // happened.

    // First we remove the original node and re-create it so we can
    // manipulate DOM without disturbing any external references to child nodes.
    const parentNode = originalNode.parentNode;
    const nodeIndex =
      Array.prototype.indexOf.call(parentNode.childNodes, originalNode);
    const workingNode = originalNode.cloneNode();
    parentNode.removeChild(originalNode);
    // We insert at an index instead of simply appending, in order to preserve
    // the original structure of the DOM. Otherwise React will throw an
    // invariant violation error.
    parentNode.insertBefore(workingNode, parentNode.childNodes[nodeIndex]);

    // Now let's build our temporary non-React grid.
    const rows = [];

    for (let i = 0; i < this.sampleCount; i += 1) {
      const item = this.items[i];

      // Add rows, in order.
      rows.push(
        <GridRow
          data={item}
          rowCellPropsProviders={this.rowCellPropsProviders}
          height={this.rowHeight}
          key={i}
        />
      );
    }

    // Replace React node tree for our own node tree.
    workingNode.innerHTML = ReactDOMServer.renderToStaticMarkup(
      <table data-testid="GridStencil" id="gridStencil" className="gridStencil">
        <GridHeader headerCellPropsProviders={this.headerCellPropsProviders} />
        <GridBody
          columnsCount={this.columnCount}
          firstRecycledRowOffset={0}
          lastRecycledRowOffset={0}
        >
          {rows}
        </GridBody>
      </table>
    );

    // Before we get started, we should store the widths of the columns, because
    // we'll have to hide them when we build our media queries.
    const headerCells = [].slice.call(workingNode.querySelectorAll('thead th'));
    const columnWidths = headerCells.map((cell, index) => {
      // CSS children are 1-indexed.
      const childNumber = index + 1;
      // We set max-widths in case a row gets loaded with an extremely larger
      // amount of content than that of our original sample. This max-width
      // will truncate the content, allowing for text with ellipsis.
      const columnWidth = cell.offsetWidth;
      return (
        `#${this.gridId} thead th:nth-child(${childNumber}) {
          max-width: ${columnWidth}px;
        }
        #${this.gridId} tbody td:nth-child(${childNumber}) {
          max-width: ${columnWidth}px;
        }`
      );
    });

    // Sort the columns in the order in which they'll be removed, so we can
    // iterate through them and remove them one by one (simulating a browser
    // becoming gradually narrower).
    const columnsByPriority = this.columnPriorities.map((priority, index) => ({
      index,
      priority,
    })).sort((a, b) => a.priority - b.priority);

    // We'll use this convenience function for building media queries.
    function createMediaQuery(browserWidth, gridId, childNumber) {
      return (
        `@media all and (max-width: ${browserWidth}px) {
          #${gridId} .stickyGridHeaderCell:nth-child(${childNumber}) {
            display: none !important;
          }
          #${gridId} thead th:nth-child(${childNumber}) {
            display: none !important;
          }
          #${gridId} tbody td:nth-child(${childNumber}) {
            display: none !important;
          }
          #${gridId} tfoot th:nth-child(${childNumber}) {
            display: none !important;
          }
        }`
      );
    }

    // This is the container we'll store the media queries in.
    const grid = workingNode.querySelector('#gridStencil');

    // Now we iterate through our columns, in the order in which they'll be hidden,
    // and measure the width at which the grid requires the column to be hidden.
    const mediaQueries = [];
    for (let i = 0; i < columnsByPriority.length; i += 1) {
      // We care about browser width, not grid width, so we need to take into
      // account the space between the grid and the browser's left and right sides.
      const browserWidth = grid.style.width + this.spaceToBothSidesOfGrid;

      // CSS children are 1-indexed.
      const childNumber = columnsByPriority[i].index + 1;

      // Hide the column's header cells.
      const hiddenHeaderCells =
        [].slice.call(
          workingNode.querySelectorAll(`thead th:nth-child(${childNumber})`)
        );

      hiddenHeaderCells.forEach((headerCell) => { // eslint-disable-line no-loop-func
        headerCell.style.display = 'none'; // eslint-disable-line no-param-reassign
      });

      // Hide the column's body row cells.
      const hiddenRowCells =
        [].slice.call(
          workingNode.querySelectorAll(`tr td:nth-child(${childNumber})`)
        );

      hiddenRowCells.forEach((rowCell) => { // eslint-disable-line no-loop-func
        rowCell.style.display = 'none'; // eslint-disable-line no-param-reassign
      });

      // Store media query.
      mediaQueries.push(
        createMediaQuery(browserWidth, this.gridId, childNumber)
      );
    }

    // All done! Remove our working node and put back the original.
    parentNode.removeChild(workingNode);
    parentNode.insertBefore(originalNode, parentNode.childNodes[nodeIndex]);

    return {
      mediaQueries,
      columnWidths,
    };
  }

}
