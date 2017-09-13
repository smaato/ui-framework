
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';

import GridEmptyRow from './GridEmptyRow.jsx';

describe('GridEmptyRow', () => {
  const wrap = content => (
    <table>
      <tbody>
        {content}
      </tbody>
    </table>
  );

  const defaultProps = {
    columnsCount: 1,
  };

  it('is rendered', () => {
    const testCase = TestCaseFactory.createFromElement(
      wrap(<GridEmptyRow {...defaultProps} />)
    );
    expect(testCase.first('.gridEmptyRow')).toBeDefined();
  });

  describe('Props', () => {
    describe('height', () => {
      it('when not specified isn\'t being set', () => {
        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridEmptyRow {...defaultProps} />)
        );
        expect(testCase.first('.gridEmptyRow').style.height).toBe('');
      });

      it('when specified is being set', () => {
        const height = 100;
        const props = Object.assign({}, defaultProps, {
          height,
        });
        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridEmptyRow {...props} />)
        );
        expect(
          testCase.first('.gridEmptyRow').style.height
        ).toBe(`${height}px`);
      });
    });

    describe('message', () => {
      it('when not specified writes "No data."', () => {
        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridEmptyRow {...defaultProps} />)
        );
        expect(testCase.dom.textContent).toContain('No data.');
      });

      it('when specified writes its content', () => {
        const props = Object.assign({}, defaultProps, {
          message: 'message',
        });
        const testCase = TestCaseFactory.createFromElement(
          wrap(<GridEmptyRow {...props} />)
        );
        expect(testCase.dom.textContent).not.toContain('No data.');
        expect(testCase.dom.textContent).toContain(props.message);
      });
    });
  });
});
