
import ComparisonTypes from './ComparisonTypes';

export default class Filter {

  constructor(filterOption, comparisonType, comparisonValue) {
    this.filterOption = filterOption;
    this.comparisonType = comparisonType;
    this.comparisonValue = comparisonValue;
  }

  humanizeComparisonValue() {
    if (this.comparisonType === ComparisonTypes.ONE_OF) {
      return this.comparisonValue.join(', ');
    }
    return this.comparisonValue;
  }

  doesValuePass(itemValue) {
    function normalizeString(value) {
      return value.toString().trim().toLowerCase();
    }

    function normalizeInt(value) {
      return parseInt(value, 10);
    }

    switch (this.comparisonType) {
      case ComparisonTypes.MIN: {
        const normalizedComparisonValue = normalizeInt(this.comparisonValue);
        const normalizedItemValue = normalizeInt(itemValue);
        return normalizedItemValue >= normalizedComparisonValue;
      }
      case ComparisonTypes.MAX: {
        const normalizedComparisonValue = normalizeInt(this.comparisonValue);
        const normalizedItemValue = normalizeInt(itemValue);
        return normalizedItemValue <= normalizedComparisonValue;
      }
      case ComparisonTypes.CONTAINS: {
        const normalizedComparisonValue = normalizeString(this.comparisonValue);
        const normalizedItemValue = normalizeString(itemValue);
        const index = normalizedItemValue.indexOf(normalizedComparisonValue);
        return index !== -1;
      }
      case ComparisonTypes.ONE_OF: {
        return this.comparisonValue.indexOf(itemValue) !== -1;
      }
      default: {
        throw new Error(
          `Matching method doesn't exist: ${this.comparisonType}`
        );
      }
    }
  }

  doesItemPass(item) {
    const itemValue = this.filterOption.getValue(item);
    return this.doesValuePass(itemValue);
  }

}
