export function isValidValue(value) {
  if (value === undefined || value === null || value === '') {
    return false;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return true;
}

export function getType(oldValue, newValue) {
  if (isValidValue(oldValue) && !isValidValue(newValue)) {
    return 'D';
  }
  if (!isValidValue(oldValue) && isValidValue(newValue)) {
    return 'I';
  }
  return 'U';
}
