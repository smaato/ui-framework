
/**
 * This component can be used to optimally-render the children of a list-type
 * component (e.g. Grid, Menu).

 * You just configure it with the root list component and the array of list
 * items, and it will recycle a finite number of DOM elements to render the
 * list items as the user scrolls.
 */

import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

export default class RecycledList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstItemIndex: 0,
      firstItemOffset: 0,
      lastItemIndex: 0,
      lastItemOffset: 0,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    this.updateItemPositions();
  }

  componentDidMount() {
    this.props.scrollPosition.addListener(this.onScroll);
  }

  componentWillReceiveProps(nextProps) {
    // When we receive more items, we need to update the recycled rows.
    if (nextProps.items !== this.props.items) {
      this.updateItemPositions(nextProps.items);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // This state will change when the scrollPosition changes. We only need
    // to update if the scroll has had an effect on the recycled items'
    // positions.
    if (nextState.firstItemOffset !== this.state.firstItemOffset) {
      return true;
    }

    // If we have new props then we should update.
    if (nextProps !== this.props) {
      return true;
    }

    return false;
  }

  componentWillUnmount() {
    this.props.scrollPosition.removeListener(this.onScroll);
  }

  onScroll() {
    this.updateItemPositions();
  }

  /**
   * Calculate the index and offset of the first recycled item.
   */
  getFirstItemState(items, oldFirstItemIndex, oldFirstItemOffset) {
    const itemsCount = items.length;

    // Measure scroll amount and direction.
    const distanceScrolled =
     this.props.scrollPosition.current - this.props.scrollPosition.previous;
    const isScrollingDown = distanceScrolled > 0;

    // Set scroll threshhold at which our recycled items need to be updated.
    const offsetScrollPosition =
      this.props.scrollPosition.current - this.props.overflowDistance;

    // We'll mutate these values while deriving our new first recycled item.
    let firstItemIndex = oldFirstItemIndex;
    let firstItemOffset = oldFirstItemOffset;

    if (isScrollingDown) {
      // Calculate the position of the bottom edge of the first visible item.
      // This is relevant if we are scrolling down and items are disappearing at
      // the top egde of the grid.
      const firstItem = items[oldFirstItemIndex];
      const firstItemBottomEdgePosition =
        oldFirstItemOffset + this.props.itemHeightProvider(firstItem);

      if (offsetScrollPosition > firstItemBottomEdgePosition) {
        // If we've scrolled the first visible item entirely out of the grid
        // then we need to increment the index.
        let itemDistanceScrolled = 0;

        while (
          itemDistanceScrolled < distanceScrolled &&
          firstItemIndex < itemsCount
        ) {
          const item = items[firstItemIndex];
          itemDistanceScrolled += this.props.itemHeightProvider(item);
          firstItemIndex += 1;
        }

        firstItemOffset += itemDistanceScrolled;
      }
    } else {
      // Calculate the position of the top edge of the first visible item.
      // This is relevant if we are scrolling up and items are appearing at the
      // top egde of the grid.
      const firstItemTopEdgePosition = oldFirstItemOffset;

      if (offsetScrollPosition < firstItemTopEdgePosition) {
        // If we've scrolled the first visible item just a tiny bit below the
        // top edge of the grid, then we need to decrement the index.
        let itemDistanceScrolled = 0;

        while (
          itemDistanceScrolled > distanceScrolled &&
          firstItemIndex > 0
        ) {
          const item = items[firstItemIndex - 1];
          itemDistanceScrolled -= this.props.itemHeightProvider(item);
          firstItemIndex -= 1;
        }

        firstItemOffset += itemDistanceScrolled;
      }
    }

    return {
      firstItemIndex,
      firstItemOffset,
    };
  }

  /**
   * Calculate the index and offset of the last recycled item. Note that this
   * depends on the new updated state of the first recycled item.
   */
  getLastItemState(items, newFirstItemIndex) {
    const itemsCount = items.length;

    // Calculate the index and offset of the last recycled item.
    const recycledItemsCount = this.props.recycledItemsCount;
    const lastItemIndex = Math.min(
      newFirstItemIndex + recycledItemsCount,
      itemsCount
    );

    let lastItemOffset = 0;
    for (let i = lastItemIndex; i < itemsCount; i += 1) {
      const item = items[i];
      lastItemOffset += this.props.itemHeightProvider(item);
    }

    return {
      lastItemIndex,
      lastItemOffset,
    };
  }

  createFakeItem(key, height) {
    // We clone the element in case it's been customized via props already.
    return React.cloneElement(this.props.fakeItemElement, {
      key,
      style: {
        minHeight: height,
      },
    });
  }

  updateItemPositions(items = this.props.items) {
    const firstItemState = this.getFirstItemState(
      items,
      this.state.firstItemIndex,
      this.state.firstItemOffset
    );

    const lastItemState = this.getLastItemState(
      items,
      firstItemState.firstItemIndex
    );

    this.setState(Object.assign(
      {},
      firstItemState,
      lastItemState
    ));
  }

  render() {
    const items = this.props.items;
    const itemsCount = items.length;

    // Create recycled items.
    const visibleItems = [
      // Prepend the top fake item first.
      this.createFakeItem('topFakeItem', this.state.firstItemOffset),
    ];

    for (
      let index = this.state.firstItemIndex;
      index <= this.state.lastItemIndex && index < itemsCount;
      index += 1
    ) {
      visibleItems.push(this.props.renderItem(items[index], index));
    }

    // Append the bottom fake item last.
    visibleItems.push(
      this.createFakeItem('bottomFakeItem', this.state.lastItemOffset)
    );

    const rootElement = React.cloneElement(
      this.props.rootElement,
      {},
      visibleItems
    );

    return rootElement;
  }

}

RecycledList.propTypes = {
  rootElement: PropTypes.element.isRequired,
  fakeItemElement: PropTypes.element,
  // NOTE: The render method of the owner component should provide an original
  // array, as expected by componentWillReceiveProps.
  items: PropTypes.array.isRequired,
  overflowDistance: PropTypes.number.isRequired,
  recycledItemsCount: PropTypes.number.isRequired,
  itemHeightProvider: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  // NOTE: Expects an instance of ScrollPosition.
  scrollPosition: PropTypes.object.isRequired,
};

RecycledList.defaultProps = {
  // NOTE: fakeItemElement needs to accept style as a prop.
  fakeItemElement: <div />,
  renderItem: item => item,
};
