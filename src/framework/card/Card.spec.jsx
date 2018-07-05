
import { TestCaseFactory } from 'react-test-kit';
import Card from './Card.jsx';

describe('Card', () => {
  const defaultProps = {
    imageSrc: './image.jpg',
    title: 'title',
  };

  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(Card, defaultProps);
      expect(testCase.dom.className).toContain('card');
    });

    it('card image is rendered', () => {
      const testCase = TestCaseFactory.create(Card, defaultProps);
      expect(testCase.first('.card__image')).toBeDefined();
    });

    it('card info is rendered', () => {
      const testCase = TestCaseFactory.create(Card, defaultProps);
      expect(testCase.first('.card__info')).toBeDefined();
    });

    describe('footer', () => {
      it('is rendered', () => {
        const testCase = TestCaseFactory.create(Card, defaultProps);
        expect(testCase.first('.card__footer')).toBeDefined();
      });

      it('contains a Tooltip', () => {
        const testCase = TestCaseFactory.create(Card, defaultProps);
        expect(testCase.first('.card__footer .tooltip')).toBeDefined();
      });
    });
  });

  describe('actions', () => {
    it('upon clicking should call ' +
    'the click handler thats passed on', () => {
      const clickSpy = jasmine.createSpy();
      const propsWithClickHandler = Object.assign({}, defaultProps, {
        onClick: clickSpy,
      });
      const testCase = TestCaseFactory.create(Card, propsWithClickHandler);
      const cardWrapperDiv = testCase.first('.card__wrapper');
      testCase.trigger('click', cardWrapperDiv);
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  describe('props', () => {
    describe('height', () => {
      it('is set as inline style height', () => {
        const props = Object.assign({}, defaultProps, {
          height: '200px',
        });
        const testCase = TestCaseFactory.create(Card, props);
        const wrapperDiv = testCase.first('.card__wrapper');

        expect(wrapperDiv.style.height).toEqual('200px');
      });
    });

    describe('width', () => {
      it('is set as inline style width', () => {
        const props = Object.assign({}, defaultProps, {
          width: '200px',
        });
        const testCase = TestCaseFactory.create(Card, props);
        const wrapperDiv = testCase.first('.card__wrapper');

        expect(wrapperDiv.style.width).toEqual('200px');
      });
    });

    describe('the image div', () => {
      it('has proper background image style', () => {
        const testCase = TestCaseFactory.create(Card, {
          imageSrc: './image.jpg',
          title: 'title',
        });

        const imageDiv = testCase.dom.querySelectorAll('div.card__image')[0];

        expect(imageDiv.style.backgroundImage).toEqual('url(http://localhost:9876/image.jpg)');
      });
    });
  });
});
