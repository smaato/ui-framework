
import { TestCaseFactory } from 'react-test-kit';

function assertDataId(Component, props, selector) {
  describe('dataId', () => {
    const elementName = selector ? `${selector}` : 'root element';
    it(`is added to ${elementName}`, () => {
      const extendedProps = Object.assign({}, props, {
        dataId: 'dataId',
      });
      const testCase = TestCaseFactory.create(Component, extendedProps);
      const element = selector ? testCase.first(selector) : testCase.dom;
      expect(element.getAttribute('data-id')).toBe(extendedProps.dataId);
    });
  });
}

const CommonAssertions = {
  assertDataId,
};

export default CommonAssertions;
