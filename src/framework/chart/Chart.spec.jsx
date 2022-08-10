
import { TestCaseFactory } from 'react-test-kit';

import Chart from './Chart.jsx';
import LineChart from './LineChart.jsx';

describe('Chart', () => {
  const requiredProps = {
    data: [],
    legendLabelProvider: () => undefined,
    title: '',
  };

  describe('Structure', () => {
    it('uses LineChart', () => {
      const testCase = TestCaseFactory.create(Chart, requiredProps);
      expect(testCase.findComponents(LineChart).length).toBe(1);
    });
  });

  describe('Props', () => {
    describe('data', () => {
      const props = Object.assign({}, requiredProps, {
        data: [[{
          date: 1460757600000,
          value: 1,
        }], [{
          date: 1460844000000,
          value: 2,
        }]],
      });
      const testCase = TestCaseFactory.create(Chart, props);

      it('is used to compute this.data', () => {
        const data = testCase.element.state.data;

        expect(data.length).toBe(2);

        expect(data[0].color).toBe('#2799C4');
        expect(data[0].values.length).toBe(1);
        expect(data[0].values[0].date).toBe(props.data[0][0].date);
        expect(data[0].values[0].yValue).toBe(props.data[0][0].value);

        expect(data[1].color).toBe('#35D0A0');
        expect(data[1].values.length).toBe(1);
        expect(data[1].values[0].date).toBe(props.data[1][0].date);
        expect(data[1].values[0].yValue).toBe(props.data[1][0].value);
      });

      it('is used to compute this.minDate', () => {
        const minDate = testCase.element.minDate;

        expect(minDate).toBe(props.data[0][0].date);
      });

      it('is used to compute this.maxDate', () => {
        const maxDate = testCase.element.maxDate;

        expect(maxDate).toBe(props.data[1][0].date);
      });

      it('is used to compute this.minY', () => {
        const minY = testCase.element.minY;

        expect(minY).toBe(props.data[0][0].value);
      });

      it('is used to compute this.maxY', () => {
        const maxY = testCase.element.maxY;

        expect(maxY).toBe(props.data[1][0].value);
      });
    });

    describe('description', () => {
      it('is rendered', () => {
        const props = Object.assign({}, requiredProps, {
          data: [[]],
          description: 'description',
        });

        const testCase = TestCaseFactory.create(Chart, props);
        expect(testCase.dom.textContent).toContain(props.description);
      });
    });

    describe('isLoading', () => {
      const progressSelector = '.progress';

      it('when false progress isn\'t rendered', () => {
        const props = Object.assign({}, requiredProps, {
          isLoading: false,
        });
        const testCase = TestCaseFactory.create(Chart, props);

        expect(testCase.find(progressSelector).length).toBe(0);
      });

      it('when true progress is rendered', () => {
        const props = Object.assign({}, requiredProps, {
          isLoading: true,
        });
        const testCase = TestCaseFactory.create(Chart, props);

        expect(testCase.find(progressSelector).length).toBe(1);
      });
    });

    describe('legendLabelProvider', () => {
      it('is used to set name of data sets', () => {
        const props = Object.assign({}, requiredProps, {
          data: [[]],
          legendLabelProvider: jasmine.createSpy().and.returnValue('label'),
        });

        const testCase = TestCaseFactory.create(Chart, props);
        const data = testCase.element.state.data;

        expect(props.legendLabelProvider).toHaveBeenCalledWith(props.data[0]);
        expect(data[0].name).toBe('label');
      });
    });

    describe('title', () => {
      it('is rendered', () => {
        const props = Object.assign({}, requiredProps, {
          data: [[]],
          title: 'title',
        });

        const testCase = TestCaseFactory.create(Chart, props);
        expect(testCase.dom.textContent).toContain(props.title);
      });
    });
  });
});
