
import ComparisonTypes from './ComparisonTypes';

export default class ConditionChecker {

  constructor(filter, comparisonType, comparisonValue) {
    this.filter = filter;
    this.comparisonType = comparisonType;
    this.comparisonValue = comparisonValue;
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
      default: {
        throw new Error(
          `Matching method doesn't exist: ${this.comparisonType}`
        );
      }
    }
  }

  doesItemPass(item) {
    const itemValue = this.filter.getValue(item);
    const isMatch = this.doesValuePass(itemValue);
    return isMatch;
  }

}
