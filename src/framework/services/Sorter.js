
function normalizeValue(value) {
  if (value === undefined || value === null) {
    return value;
  }

  if (typeof value === 'number') {
    return value;
  }

  return value.toString().toLowerCase().trim();
}

function sort(originalItems, valueProviders, providerPropertyOrIndex, isDescending) {
  if (providerPropertyOrIndex === undefined || providerPropertyOrIndex === null) {
    throw new Error('providerPropertyOrIndex must be defined.');
  }

  const items = originalItems.slice();

  return items.sort((a, b) => {
    const valueA =
      normalizeValue(valueProviders[providerPropertyOrIndex](a));

    const valueB =
      normalizeValue(valueProviders[providerPropertyOrIndex](b));

    // This ensures null and undefined values have a determinstic sort order.
    if (valueA === null || valueA === undefined) {
      return isDescending ? -1 : 1;
    }

    // This ensures null and undefined values have a determinstic sort order.
    if (valueB === null || valueB === undefined) {
      return isDescending ? 1 : -1;
    }

    if (valueA === valueB) {
      return 0;
    }

    // Ascending
    if (valueA < valueB) {
      return isDescending ? 1 : -1;
    }

    // Descending
    if (valueA > valueB) {
      return isDescending ? -1 : 1;
    }
  });
}

export default {
  normalizeValue,
  sort,
};
