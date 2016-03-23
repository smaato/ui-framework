
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import PickedList from './PickedList.jsx';

describe('PickedList', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(PickedList, undefined, '.pickedList');

    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(PickedList, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('title', () => {
      it('is rendered', () => {
        const props = {
          title: 'test',
        };
        const testCase = TestCaseFactory.create(PickedList, props);
        expect(testCase.dom.textContent).toBe(props.title);
      });
    });
  });
});
