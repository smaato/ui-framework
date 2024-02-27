import { ObjectUtil, Sorter } from '../services';
import { isValidValue, getType } from './helpers';

export class BaseChangeLog {
  constructor(
    fieldName,
    fieldLabel,
    outputProvider
  ) {
    this.fieldName = fieldName;
    this.fieldLabel = fieldLabel;
    this.outputProvider = outputProvider;
  }

  didValueChange(oldValue, newValue) {
    return oldValue !== newValue;
  }

  normalize(oldState = {}, newState = {}) {
    const changes = [];

    const flattenedOldState = ObjectUtil.flattenNestedObject(oldState);
    const flattenedNewState = ObjectUtil.flattenNestedObject(newState);

    const oldValue = isValidValue(flattenedOldState[this.fieldName]) ?
      flattenedOldState[this.fieldName] :
      undefined;
    const newValue = isValidValue(flattenedNewState[this.fieldName]) ?
      flattenedNewState[this.fieldName] :
      undefined;

    if (this.didValueChange(oldValue, newValue)) {
      changes.push({
        field: this.fieldLabel,
        newValue: newValue && this.outputProvider(newValue),
        oldValue: oldValue && this.outputProvider(oldValue),
        time: newState.action_date,
        type: getType(oldValue, newValue),
        user: newState.action_user,
      });
    }

    return changes;
  }
}

export class ListFieldChangeLog extends BaseChangeLog {
  constructor(
    fieldName,
    fieldLabel,
    outputProvider = output => output && output.join(', '),
    sortValueProvider = item => item
  ) {
    super(fieldName, fieldLabel, outputProvider);
    this.sortValueProvider = sortValueProvider;
  }

  didValueChange(oldValue, newValue) {
    if (oldValue === undefined || newValue === undefined) {
      return oldValue !== newValue;
    }

    const sortedOldValueList = Sorter.sortBy(oldValue, this.sortValueProvider);
    const sortedNewValueList = Sorter.sortBy(newValue, this.sortValueProvider);

    return (
      JSON.stringify(sortedOldValueList) !== JSON.stringify(sortedNewValueList)
    );
  }
}

export class SimpleFieldChangeLog extends BaseChangeLog {
  constructor(
    fieldName,
    fieldLabel,
    outputProvider = output => output
  ) {
    super(fieldName, fieldLabel, outputProvider);
  }
}

export function normalizeChangeLog(states, normalizers) {
  let changes = [];
  let latestState;

  states.forEach((state) => {
    let normalizedStateChanges = [];

    normalizers.forEach((normalizer) => {
      const normalizedChanges = normalizer.normalize(latestState, state);

      if (normalizedChanges.length) {
        normalizedStateChanges =
          normalizedStateChanges.concat(normalizedChanges);
      }
    });

    if (normalizedStateChanges.length) {
      changes = normalizedStateChanges.concat(changes);
    }

    latestState = state;
  });

  return changes;
}
