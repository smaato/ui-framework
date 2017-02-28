
export default class FilterOption {

  constructor(config) {
    this.comparisonParameters = config.comparisonParameters;
    this.comparisonTypes = config.comparisonTypes;
    this.getValue = config.getValue;
    this.name = config.name;
  }

}
