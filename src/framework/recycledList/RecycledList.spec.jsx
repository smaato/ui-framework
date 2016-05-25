
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import RecycledList from './RecycledList.jsx';
import ScrollPosition from '../services/scroll/ScrollPosition';

describe('RecycledList', () => {
  describe('Props', () => {
    describe('rootElement', () => {
      it('is rendered as the root element', () => {
        const props = {
          rootElement: <div />,
          items: [],
          overflowDistance: 0,
          recycledItemsCount: 0,
          itemHeightProvider: () => undefined,
          scrollPosition: new ScrollPosition(),
        };

        const testCase = TestCaseFactory.create(RecycledList, props);

        expect(testCase.dom.tagName).toBe('DIV');
      });
    });

    describe('fakeItemElement', () => {
      it('is rendered twice', () => {
        const className = 'fakeItemElement';

        const props = {
          rootElement: <div />,
          fakeItemElement: <span className={className} />,
          items: [],
          overflowDistance: 0,
          recycledItemsCount: 0,
          itemHeightProvider: () => undefined,
          scrollPosition: new ScrollPosition(),
        };

        const testCase = TestCaseFactory.create(RecycledList, props);

        expect(testCase.find(`.${className}`).length).toBe(2);
      });

      it('is rendered at the top and bottom of the list', () => {
        const className = 'fakeItemElement';

        const props = {
          rootElement: <div />,
          fakeItemElement: <span className={className} />,
          items: [<div key="item" />],
          overflowDistance: 0,
          recycledItemsCount: 0,
          itemHeightProvider: () => 0,
          scrollPosition: new ScrollPosition(),
        };

        const testCase = TestCaseFactory.create(RecycledList, props);

        expect(testCase.dom.firstChild.className).toBe(className);
        expect(testCase.dom.lastChild.className).toBe(className);
      });

      it('defaults to a div', () => {
        const props = {
          rootElement: <div />,
          items: [<span key="item" />],
          overflowDistance: 0,
          recycledItemsCount: 0,
          itemHeightProvider: () => 0,
          scrollPosition: new ScrollPosition(),
        };

        const testCase = TestCaseFactory.create(RecycledList, props);

        expect(testCase.dom.firstChild.tagName).toBe('DIV');
        expect(testCase.dom.lastChild.tagName).toBe('DIV');
      });
    });

    describe('items', () => {
      it('are rendered', () => {
        const props = {
          rootElement: <div />,
          items: [<span key="item" className="item" />],
          overflowDistance: 0,
          recycledItemsCount: 0,
          itemHeightProvider: () => 0,
          scrollPosition: new ScrollPosition(),
        };

        const testCase = TestCaseFactory.create(RecycledList, props);

        expect(testCase.find('.item')).toBeDefined();
      });
    });

    describe('itemHeightProvider', () => {
      it('is called', () => {
        const props = {
          rootElement: <div />,
          items: [<span key="item" className="item" />],
          overflowDistance: 0,
          recycledItemsCount: 0,
          itemHeightProvider:
            jasmine.createSpy('itemHeightProvider').and.returnValue(0),
          scrollPosition: new ScrollPosition(),
        };

        TestCaseFactory.create(RecycledList, props);

        expect(props.itemHeightProvider).toHaveBeenCalled();
      });
    });

    describe('scrollPosition', () => {
      it('is expected to be an instance of ScrollPosition', () => {
        const props = {
          rootElement: <div />,
          items: [],
          overflowDistance: 0,
          recycledItemsCount: 0,
          itemHeightProvider: () => 0,
          scrollPosition: new ScrollPosition(),
        };

        spyOn(props.scrollPosition, 'addListener');

        TestCaseFactory.create(RecycledList, props);

        expect(props.scrollPosition.addListener).toHaveBeenCalled();
      });
    });
  });
});
