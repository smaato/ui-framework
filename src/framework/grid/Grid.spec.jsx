
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import Grid from './Grid.jsx';

describe('Grid', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(Grid, {
      columnsCount: 1,
    });

    describe('header', () => {
      it('is rendered inside the table element', () => {
        const props = {
          columnsCount: 1,
          header: <thead />,
        };

        const testCase = TestCaseFactory.create(Grid, props);
        expect(testCase.first('thead')).toBeDefined();
      });
    });

    describe('footer', () => {
      it('is rendered inside the table element', () => {
        const props = {
          columnsCount: 1,
          footer: <tfoot />,
        };

        const testCase = TestCaseFactory.create(Grid, props);
        expect(testCase.first('tfoot')).toBeDefined();
      });
    });

    describe('children', () => {
      it('is rendered inside the table element', () => {
        const props = {
          columnsCount: 1,
          children: <tbody />,
        };

        const testCase = TestCaseFactory.create(Grid, props);
        expect(testCase.first('tbody')).toBeDefined();
      });
    });

    describe('classContainer', () => {
      it('is applied as a class of the root element', () => {
        const props = {
          columnsCount: 1,
          classContainer: 'test',
        };

        const testCase = TestCaseFactory.create(Grid, props);
        expect(testCase.dom.getAttribute('class')
          .indexOf(props.classContainer) !== -1).toBe(true);
      });
    });

    describe('classTable', () => {
      it('is applied as a class of the table element', () => {
        const props = {
          columnsCount: 1,
          classTable: 'test',
        };

        const testCase = TestCaseFactory.create(Grid, props);
        expect(testCase.first('table').className).toContain(props.classTable);
      });
    });
  });
});
