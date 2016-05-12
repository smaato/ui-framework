let Sorter;

function normalizeValue(value) {
  if (value === undefined || value === null) {
    return value;
  }

  return value.toString().toLowerCase().trim();
}

function sort(
  originalItems,
  propertyNameOrValueProviderOrProviders,
  providerPropertyOrIndex,
  isDescending = false
) {
  const isPropertyName =
    typeof propertyNameOrValueProviderOrProviders === 'string';

  const isSingleValueProvider =
    typeof propertyNameOrValueProviderOrProviders === 'function';

  if (!isPropertyName) {
    // If we've received an array of value providers, then we need to make sure
    // an acceptable providerPropertyOrIndex has been provided.
    if (!isSingleValueProvider) {
      const typeOfProviderPropertyOrIndex = typeof providerPropertyOrIndex;
      if (typeOfProviderPropertyOrIndex !== 'string' &&
        typeOfProviderPropertyOrIndex !== 'number') {
        throw new Error(
          `providerPropertyOrIndex must be a string or number.
          Got ${providerPropertyOrIndex}.`
        );
      }
    }
  }

  const items = originalItems.slice();

  return items.sort((a, b) => {
    let providedValueA;
    let providedValueB;

    if (isPropertyName) {
      providedValueA = a[propertyNameOrValueProviderOrProviders];
      providedValueB = b[propertyNameOrValueProviderOrProviders];
    } else if (isSingleValueProvider) {
      providedValueA = propertyNameOrValueProviderOrProviders(a);
      providedValueB = propertyNameOrValueProviderOrProviders(b);
    } else {
      // Default to assuming there are multiple value providers.
      providedValueA =
        propertyNameOrValueProviderOrProviders[providerPropertyOrIndex](a);
      providedValueB =
        propertyNameOrValueProviderOrProviders[providerPropertyOrIndex](b);
    }

    let valueA;
    let valueB;

    // Coerce values to the same type, so that they are comparable,
    // and therefore sortable.
    if (
      typeof providedValueA === 'number' &&
      typeof providedValueB === 'number'
    ) {
      // Compare values as numbers.
      valueA = providedValueA;
      valueB = providedValueB;
    } else {
      // Compare values as strings.
      valueA = normalizeValue(providedValueA);
      valueB = normalizeValue(providedValueB);
    }

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

    if (valueA < valueB) {
      return isDescending ? 1 : -1;
    }

    if (valueA > valueB) {
      return isDescending ? -1 : 1;
    }

    // This shouldn't happen since we're converting all incoming values to
    // comparable types, so something has gone terribly wrong.
    throw new Error(`Could not sort ${providedValueA} and ${providedValueB}.`);
  });
}

function sortBy(
  originalItems,
  propertyNameOrValueProvider,
  isDescending
) {
  return Sorter.sort(
    originalItems,
    propertyNameOrValueProvider,
    undefined,
    isDescending
  );
}

Sorter = {
  normalizeValue,
  sort,
  sortBy,
};

export default Sorter;
