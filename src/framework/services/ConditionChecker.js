
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

    let normalizedComparisonValue;
    let normalizedItemValue;

    switch (this.comparisonType) {
      case ComparisonTypes.MIN:
        normalizedComparisonValue = normalizeInt(this.comparisonValue);
        normalizedItemValue = normalizeInt(itemValue);
        return normalizedItemValue >= normalizedComparisonValue;

      case ComparisonTypes.MAX:
        normalizedComparisonValue = normalizeInt(this.comparisonValue);
        normalizedItemValue = normalizeInt(itemValue);
        return normalizedItemValue <= normalizedComparisonValue;

      case ComparisonTypes.CONTAINS:
        normalizedComparisonValue = normalizeString(this.comparisonValue);
        normalizedItemValue = normalizeString(itemValue);
        const index = normalizedItemValue.indexOf(normalizedComparisonValue);
        return index !== -1;

      default:
        throw new Error(`Matching method doesn\'t exist: ${this.comparisonType}`);
    }
  }

  doesItemPass(item) {
    const itemValue = this.filter.getValue(item);
    const isMatch = this.doesValuePass(itemValue);
    return isMatch;
  }

}
