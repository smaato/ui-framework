
import { TestCaseFactory } from 'react-test-kit';
import SubLabel from './SubLabel.jsx';

describe('SubLabel', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is set as the sub-label\'s text', () => {
        const props = {
          children: 'Sub-label text',
        };
        const testCase = TestCaseFactory.create(SubLabel, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('className', () => {
      describe('when set', () => {
        it('should propagate to the subLabel div', () => {
          const props = {
            children: 'Sub-label text',
            className: 'class-oh-yeah',
          };
          const testCase = TestCaseFactory.create(SubLabel, props);
          expect(testCase.dom.getAttribute('class'))
            .toEqual('subLabel class-oh-yeah');
        });
      });

      describe('when unset', () => {
        it('should have only subLabel class', () => {
          const props = {
            children: 'Sub-label text',
          };
          const testCase = TestCaseFactory.create(SubLabel, props);
          expect(testCase.dom.getAttribute('class'))
            .toEqual('subLabel ');
        });
      });
    });
  });
});
