
import { Link } from 'react-router';
import { TestCaseFactory } from 'react-test-kit';
import AppNav from './AppNav.jsx';

describe('AppNav', () => {
  describe('Props', () => {
    describe('linkType', () => {
      it('can be a native DOM component', () => {
        const props = {
          linkType: 'a',
          links: [{}],
        };
        const testCase = TestCaseFactory.create(AppNav, props);
        const children = testCase.find('a');
        expect(children.length).toBe(1);
      });

      it('can be a composite component', () => {
        const props = {
          linkType: Link,
          links: [{
            to: '',
          }],
        };
        const testCase = TestCaseFactory.create(AppNav, props);
        const children = testCase.findComponents(Link);
        expect(children.length).toBe(1);
      });
    });

    describe('links', () => {
      it('renders an array of children', () => {
        const props = {
          linkType: 'div',
          links: [{
            className: 'child child1',
          }, {
            className: 'child child2',
          }],
        };
        const testCase = TestCaseFactory.create(AppNav, props);
        const children = testCase.find('.child');
        expect(children.length).toBe(2);
        expect(children[0].getAttribute('class')).toContain('child1');
        expect(children[1].getAttribute('class')).toContain('child2');
      });
    });
  });
});
