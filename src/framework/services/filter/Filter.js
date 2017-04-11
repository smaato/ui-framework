
import ComparisonTypes from './ComparisonTypes';

export default class Filter {

  constructor(filterOption, comparisonValue) {
    this.filterOption = filterOption;
    this.comparisonValue = comparisonValue;
  }

  humanizeComparisonValue() {
    if (this.filterOption.comparisonType === ComparisonTypes.ONE_OF) {
      return this.comparisonValue.map(option => option.label).join(', ');
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

    switch (this.filterOption.comparisonType) {
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
        const normalizedComparisonValues =
          this.comparisonValue.map(option => option.value);
        return normalizedComparisonValues.indexOf(itemValue) !== -1;
      }
      default: {
        throw new Error(
          `Matching method doesn't exist: ${this.filterOption.comparisonType}`
        );
      }
    }
  }

  doesItemPass(item) {
    const itemValue = this.filterOption.getValue(item);
    return this.doesValuePass(itemValue);
  }

}
