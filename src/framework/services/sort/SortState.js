
export default class SortState {

  constructor(config) {
    this.descendingProperty = config.descendingProperty;
    this.indexProperty = config.indexProperty;

    this.state = {
      [this.descendingProperty]: config.isDescending,
      [this.indexProperty]: config.index,
    };
  }

  sortOn(index) {
    const currentIndex = this.state[this.indexProperty];
    const isCurrentlyDescending = this.state[this.descendingProperty];

    const isDescending =
      currentIndex === index
      ? !isCurrentlyDescending
      : isCurrentlyDescending;

    this.state[this.indexProperty] = index;
    this.state[this.descendingProperty] = isDescending;
  }

  getState() {
    return this.state;
  }

}
