let Sorter;

/**
 * Use the item's property to get a sort value.
 */
class PropertyValueProvider {
  constructor(propertyName) {
    this.propertyName = propertyName;
  }

  getValueFor(item) {
    return item[this.propertyName];
  }
}

/**
 * Use a single function to get an item's sort value.
 */
class FunctionValueProvider {
  constructor(provider) {
    this.provider = provider;
  }

  getValueFor(item) {
    return this.provider(item);
  }
}

/**
 * Use an index or key to identify a function in an object or array of
 * multiple functions. Use this function to get an item's sort value.
 */
class MultiAxisValueProvider {
  constructor(providers, providerKeyOrIndex) {
    this.providers = providers;
    this.providerKeyOrIndex = providerKeyOrIndex;

    // We need to make sure an acceptable providerKeyOrIndex has been provided.
    const providerKeyOrIndexType = typeof providerKeyOrIndex;
    if (
      providerKeyOrIndexType !== 'string' &&
      providerKeyOrIndexType !== 'number'
    ) {
      throw new Error(
        `providerKeyOrIndex must be a string or number.
        Got ${providerKeyOrIndex}.`
      );
    }
  }

  getValueFor(item) {
    // NOTE: For now (for the sake of simplicity), we're assuming the providers
    // are functions, not property names.
    return this.providers[this.providerKeyOrIndex](item);
  }
}

function normalizeValue(value) {
  if (value === undefined || value === null) {
    return value;
  }

  return value.toString().toLowerCase().trim();
}

/**
 * Sort an array of items along either a single axis or multiple axes.
 */
function sort(
  originalItems,
  keyOrValueProviderOrProviders,
  providerKeyOrIndex,
  isDescending = false
) {
  // Figure out whether we're using a value provider function or just a property
  // name, and if we're sorting along a single axis or multiple axes.
  const ValueProvider = (() => {
    const valueProviderType = typeof keyOrValueProviderOrProviders;

    switch (valueProviderType) {
      case 'string': {
        // If the provider is a string, then it's a property name.
        return PropertyValueProvider;
      }

      case 'function': {
        // A single function means it's a single provider function.
        return FunctionValueProvider;
      }

      default: {
        // Otherwise we'll assume it's an array or object of providers,
        // which means we can sort along multiple axes.
        return MultiAxisValueProvider;
      }
    }
  })();

  const valueProvider =
    new ValueProvider(keyOrValueProviderOrProviders, providerKeyOrIndex);

  const items = originalItems.slice();

  return items.sort((a, b) => {
    const providedValueA = valueProvider.getValueFor(a);
    const providedValueB = valueProvider.getValueFor(b);

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

/**
 * Convenience function for sorting an array of items ONLY along a single axis.
 */
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
