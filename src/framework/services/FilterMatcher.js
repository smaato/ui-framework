
import FilterMethods from './FilterMethods';

export default class FilterMatcher {

  constructor(filter, filterMethod, valueToMatch) {
    this.filter = filter;
    this.filterMethod = filterMethod;
    this.valueToMatch = valueToMatch;
  }

  filterValue(itemValue) {
    function normalizeString(value) {
      return value.toString().trim().toLowerCase();
    }

    function normalizeInt(value) {
      return parseInt(value, 10);
    }

    let normalizedFilterValue;
    let normalizedItemValue;

    switch (this.filterMethod) {
      case FilterMethods.MIN:
        normalizedFilterValue = normalizeInt(this.valueToMatch);
        normalizedItemValue = normalizeInt(itemValue);
        return normalizedItemValue >= normalizedFilterValue;

      case FilterMethods.MAX:
        normalizedFilterValue = normalizeInt(this.valueToMatch);
        normalizedItemValue = normalizeInt(itemValue);
        return normalizedItemValue <= normalizedFilterValue;

      case FilterMethods.CONTAINS:
        normalizedFilterValue = normalizeString(this.valueToMatch);
        normalizedItemValue = normalizeString(itemValue);
        const index = normalizedItemValue.indexOf(normalizedFilterValue);
        return index !== -1;

      default:
        throw new Error(`Matching method doesn\'t exist: ${this.filterMethod}`);
    }
  }

  filterItem(item) {
    const itemValue = this.filter.getValue(item);
    const isMatch = this.filterValue(itemValue);
    return isMatch;
  }

}
