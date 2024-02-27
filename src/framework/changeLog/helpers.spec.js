import { isValidValue, getType } from './helpers';

describe('isValidValue', () => {
  it('should return false if value is empty', () => {
    expect(isValidValue()).toEqual(false);
    expect(isValidValue(null)).toEqual(false);
    expect(isValidValue('')).toEqual(false);
  });

  it('should return length if value is array', () => {
    expect(isValidValue([])).toEqual(0);
    expect(isValidValue(['arrayItem'])).toEqual(1);
  });

  it('should return true if value is not array and not empty', () => {
    expect(isValidValue('validString')).toEqual(true);
    expect(isValidValue(1)).toEqual(true);
    expect(isValidValue(true)).toEqual(true);
    expect(isValidValue(false)).toEqual(true);
    expect(isValidValue({})).toEqual(true);
  });
});

describe('getType', () => {
  it('should return "D" if oldValue is present and newValue is empty', () => {
    expect(getType('someValue', '')).toEqual('D');
  });

  it('should return "I" if oldValue is empty and newValue is present', () => {
    expect(getType('', 'someValue')).toEqual('I');
  });

  it('should return "U" if both oldValue newValue are present', () => {
    expect(getType('oldValue', 'newValue')).toEqual('U');
  });
});
