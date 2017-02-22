import FilterTypes from './FilterTypes';

export default class FilterOption {

  constructor(config) {
    this.name = config.name;
    this.getValue = config.getValue;
    this.type = config.type;
    if (this.type === FilterTypes.MULTIPLE_SELECT) {
      this.options = config.options;
    }
    this.comparisonTypes = config.comparisonTypes;
  }
}
