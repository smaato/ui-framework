
import { TestCaseFactory } from 'react-test-kit';
import Panel from './Panel.jsx';

describe('Panel', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(Panel, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('title', () => {
      it('is rendered', () => {
        const props = {
          title: 'test',
        };
        const testCase = TestCaseFactory.create(Panel, props);
        expect(testCase.dom.textContent).toBe(props.title);
      });
    });

    describe('actions', () => {
      it('is rendered', () => {
        const props = {
          actions: 'test',
        };
        const testCase = TestCaseFactory.create(Panel, props);
        expect(testCase.dom.textContent).toBe(props.actions);
      });
    });
  });
});
