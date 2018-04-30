import { TestCaseFactory } from 'react-test-kit';
import Card from './Card.jsx';

describe('Card', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(Card, {
        title: 'Bla Bla',
        imageSrc: '/bam/bam',
      });
      expect(testCase.dom.getAttribute('class')).toContain('card');
    });
  });

  describe('Props', () => {
    describe('Height and width', () => {
      it('has proper values when passed as props', () => {
        const testCase = TestCaseFactory.create(Card, {
          title: 'Bla Bla',
          imageSrc: '/bam/bam',
          height: '200px',
          width: '150px',
        });
        const wrapperDiv = testCase.dom.querySelectorAll('div.card-wrapper')[0];

        expect(wrapperDiv.style.height).toEqual('200px');
        expect(wrapperDiv.style.width).toEqual('150px');
      });

      it('has default values when not provided', () => {
        const testCase = TestCaseFactory.create(Card, {
          title: 'Bla Bla',
          imageSrc: '/bam/bam',
        });
        const wrapperDiv = testCase.dom.querySelectorAll('div.card-wrapper')[0];

        expect(wrapperDiv.style.height).toEqual('250px');
        expect(wrapperDiv.style.width).toEqual('210px');
      });
    });

    describe('the image div', () => {
      it('has proper background image style', () => {
        const testCase = TestCaseFactory.create(Card, {
          title: 'Bla Bla',
          imageSrc: '/bam/bam',
        });

        const imageDiv = testCase.dom.querySelectorAll('div.card-image')[0];

        expect(imageDiv.style.backgroundImage).toEqual('url(http://localhost:9876/bam/bam)');
      });
    });
  });
});
