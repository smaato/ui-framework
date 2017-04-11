
import OneOfOption from './OneOfOption';

describe('OneOfOption', () => {
  describe('interface', () => {
    describe('constructor method', () => {
      it(
        'label is same as value when is not given',
        () => {
          const oneOfOption = new OneOfOption('active');
          expect(oneOfOption.label).toBe(oneOfOption.value);
        }
      );
    });
  });
});
