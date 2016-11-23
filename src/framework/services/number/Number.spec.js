
import Number from './Number';

describe('Number', () => {
  describe('formatBigNumber', () => {
    it('doesn\'t format a number smaller than 1,000', () => {
      expect(Number.formatBigNumber(123)).toEqual('123');
    });

    it('shortens a number between 1,000 and 1,000,000', () => {
      expect(Number.formatBigNumber(123456)).toEqual('123k');
    });

    it('shortens a number between 1,000,000 and 1,000,000,000', () => {
      expect(Number.formatBigNumber(123456789)).toEqual('123m');
    });

    it('shortens a number between 1,000,000,000 and 1,000,000,000,000', () => {
      expect(Number.formatBigNumber(123456789012)).toEqual('123b');
    });

    it('doesn\'t format a number bigger than 1,000,000,000,000', () => {
      expect(Number.formatBigNumber(1234567890123)).toEqual('1234567890123');
    });
  });
});
