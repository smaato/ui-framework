
export default class FilterOption {

  constructor(config) {
    this.comparisonParameters = config.comparisonParameters;
    this.comparisonType = config.comparisonType;
    this.getValue = config.getValue;
    this.name = config.name;
    // eslint-disable-next-line
    this.isRemovable = config.isRemovable === false ? false : true;
  }

}
