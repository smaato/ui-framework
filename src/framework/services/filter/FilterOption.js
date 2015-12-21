
export default class FilterOption {

  constructor(config) {
    this.name = config.name;
    this.getValue = config.getValue;
    this.comparisonTypes = config.comparisonTypes;
  }

}
