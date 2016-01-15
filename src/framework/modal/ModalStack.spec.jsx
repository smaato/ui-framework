
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import ModalStack from './ModalStack.jsx';

const children = [
  <div className="modal1" key="0"></div>,
  <div className="modal2" key="1"></div>,
  <div className="modal3" key="2"></div>,
  <div className="modal4" key="3"></div>,
  <div className="modal5" key="4"></div>,
];

describe('ModalStack', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          children,
        };
        const testCase = TestCaseFactory.createFromElement(<ModalStack {...props} />);
        expect(testCase.first('.modal1')).toBeDefined();
        expect(testCase.first('.modal2')).toBeDefined();
        expect(testCase.first('.modal3')).toBeDefined();
        expect(testCase.first('.modal4')).toBeDefined();
        expect(testCase.first('.modal5')).toBeDefined();
      });
    });
  });

  describe('stacking logic', () => {
    it('places the last elements on top of the first elements', () => {
      const props = {
        children,
      };
      const testCase = TestCaseFactory.createFromElement(<ModalStack {...props} />);
      expect(testCase.first('.stackedModal--depth1 .modal5')).toBeDefined();
      expect(testCase.first('.stackedModal--depth2 .modal4')).toBeDefined();
      expect(testCase.first('.stackedModal--depth3 .modal3')).toBeDefined();
    });

    it('assigns depth-specific classes for up to 3 levels of depth', () => {
      const props = {
        children,
      };
      const testCase = TestCaseFactory.createFromElement(<ModalStack {...props} />);
      const stackedModals = testCase.find('.stackedModal');
      expect(stackedModals[0].className).not.toContain('stackedModal--depth5');
      expect(stackedModals[1].className).not.toContain('stackedModal--depth4');
      expect(stackedModals[2].className).toContain('stackedModal--depth3');
      expect(stackedModals[3].className).toContain('stackedModal--depth2');
      expect(stackedModals[4].className).toContain('stackedModal--depth1');
    });

    it('assigns a depthMax class to levels of depth after 3', () => {
      const props = {
        children,
      };
      const testCase = TestCaseFactory.createFromElement(<ModalStack {...props} />);
      const stackedModals = testCase.find('.stackedModal');
      expect(stackedModals[0].className).toContain('stackedModal--depthMax');
      expect(stackedModals[1].className).toContain('stackedModal--depthMax');
      expect(stackedModals[2].className).not.toContain('stackedModal--depthMax');
      expect(stackedModals[3].className).not.toContain('stackedModal--depthMax');
      expect(stackedModals[4].className).not.toContain('stackedModal--depthMax');
    });
  });
});
