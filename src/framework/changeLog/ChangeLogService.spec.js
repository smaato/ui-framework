import * as ChangeLog from './ChangeLogService';

describe('ChangeLog', () => {
  describe('ListFieldChangeLog', () => {
    const fieldName = 'fieldName';
    const fieldLabel = 'fieldLabel';
    const listFieldChangeLog =
      new ChangeLog.ListFieldChangeLog(fieldName, fieldLabel);

    describe('normalize', () => {
      it('handles insert', () => {
        const latestState = {};
        const state = { [fieldName]: [1, 2] };

        expect(
          listFieldChangeLog.normalize(latestState, state)
        ).toEqual([jasmine.objectContaining({
          oldValue: undefined,
          newValue: state[fieldName].join(', '),
          type: 'I',
        })]);
      });

      it('handles update', () => {
        const latestState = { [fieldName]: [0, 1] };
        const state = { [fieldName]: [1, 2] };

        expect(
          listFieldChangeLog.normalize(latestState, state)
        ).toEqual([jasmine.objectContaining({
          oldValue: latestState[fieldName].join(', '),
          newValue: state[fieldName].join(', '),
          type: 'U',
        })]);
      });

      it('handles delete', () => {
        const latestState = { [fieldName]: [0, 1] };
        const state = {};

        expect(
          listFieldChangeLog.normalize(latestState, state)
        ).toEqual([jasmine.objectContaining({
          oldValue: latestState[fieldName].join(', '),
          newValue: undefined,
          type: 'D',
        })]);
      });

      it('handles empty arrays as invalid values', () => {
        const latestState = { [fieldName]: [0, 1] };
        const state = { [fieldName]: [] };

        expect(
          listFieldChangeLog.normalize(latestState, state)
        ).toEqual([jasmine.objectContaining({
          oldValue: latestState[fieldName].join(', '),
          newValue: undefined,
          type: 'D',
        })]);
      });

      it('handles different order', () => {
        const latestState = { [fieldName]: [0, 1] };
        const state = { [fieldName]: [1, 0] };

        expect(
          listFieldChangeLog.normalize(latestState, state)
        ).toEqual([]);
      });

      it('always sets field, time and user', () => {
        const latestState = { [fieldName]: [0, 1] };
        const actionDate = 'action_date';
        const actionUser = 'action_user';
        const state = {
          action_date: actionDate,
          action_user: actionUser,
        };

        expect(
          listFieldChangeLog.normalize(latestState, state)
        ).toEqual([jasmine.objectContaining({
          field: fieldLabel,
          time: actionDate,
          user: actionUser,
        })]);
      });
    });
  });

  describe('SimpleFieldChangeLog', () => {
    const fieldName = 'fieldName';
    const fieldLabel = 'fieldLabel';
    const simpleFieldChangeLog =
      new ChangeLog.SimpleFieldChangeLog(fieldName, fieldLabel);

    describe('normalize', () => {
      describe('handles string', () => {
        it('insert', () => {
          const latestState = {};
          const state = { [fieldName]: 'state' };

          expect(
            simpleFieldChangeLog.normalize(latestState, state)
          ).toEqual([jasmine.objectContaining({
            oldValue: undefined,
            newValue: state[fieldName],
            type: 'I',
          })]);
        });

        it('update', () => {
          const latestState = { [fieldName]: 'latestState' };
          const state = { [fieldName]: 'state' };

          expect(
            simpleFieldChangeLog.normalize(latestState, state)
          ).toEqual([jasmine.objectContaining({
            oldValue: latestState[fieldName],
            newValue: state[fieldName],
            type: 'U',
          })]);
        });

        it('delete', () => {
          const latestState = { [fieldName]: 'latestState' };
          const state = {};

          expect(
            simpleFieldChangeLog.normalize(latestState, state)
          ).toEqual([jasmine.objectContaining({
            oldValue: latestState[fieldName],
            newValue: undefined,
            type: 'D',
          })]);
        });
      });

      describe('handles number', () => {
        it('insert', () => {
          const latestState = {};
          const state = { [fieldName]: 1 };

          expect(
            simpleFieldChangeLog.normalize(latestState, state)
          ).toEqual([jasmine.objectContaining({
            oldValue: undefined,
            newValue: state[fieldName],
            type: 'I',
          })]);
        });

        it('update', () => {
          const latestState = { [fieldName]: 0 };
          const state = { [fieldName]: 1 };

          expect(
            simpleFieldChangeLog.normalize(latestState, state)
          ).toEqual([jasmine.objectContaining({
            oldValue: latestState[fieldName],
            newValue: state[fieldName],
            type: 'U',
          })]);
        });

        it('delete', () => {
          const latestState = { [fieldName]: 0 };
          const state = {};

          expect(
            simpleFieldChangeLog.normalize(latestState, state)
          ).toEqual([jasmine.objectContaining({
            oldValue: latestState[fieldName],
            newValue: undefined,
            type: 'D',
          })]);
        });
      });

      describe('handles boolean', () => {
        it('insert', () => {
          const latestState = {};
          const state = { [fieldName]: true };

          expect(
            simpleFieldChangeLog.normalize(latestState, state)
          ).toEqual([jasmine.objectContaining({
            oldValue: undefined,
            newValue: state[fieldName],
            type: 'I',
          })]);
        });

        it('update', () => {
          const latestState = { [fieldName]: false };
          const state = { [fieldName]: true };

          expect(
            simpleFieldChangeLog.normalize(latestState, state)
          ).toEqual([jasmine.objectContaining({
            oldValue: latestState[fieldName],
            newValue: state[fieldName],
            type: 'U',
          })]);
        });

        it('delete', () => {
          const latestState = { [fieldName]: false };
          const state = {};

          expect(
            simpleFieldChangeLog.normalize(latestState, state)
          ).toEqual([jasmine.objectContaining({
            oldValue: latestState[fieldName],
            newValue: undefined,
            type: 'D',
          })]);
        });
      });

      it('always always sets field, time and user', () => {
        const latestState = { [fieldName]: false };
        const actionDate = 'action_date';
        const actionUser = 'action_user';
        const state = {
          action_date: actionDate,
          action_user: actionUser,
        };

        expect(
          simpleFieldChangeLog.normalize(latestState, state)
        ).toEqual([jasmine.objectContaining({
          field: fieldLabel,
          time: actionDate,
          user: actionUser,
        })]);
      });
    });
  });

  describe('normalizeChangeLog', () => {
    it('uses given states and normalizers to compute changes', () => {
      const states = [{}];
      const normalizer = new ChangeLog.SimpleFieldChangeLog();
      const normalizers = [normalizer];
      const expectedChanges = [{}];

      spyOn(normalizer, 'normalize').and.returnValue(expectedChanges);

      expect(
        ChangeLog.normalizeChangeLog(states, normalizers)
      ).toEqual(expectedChanges);
      expect(normalizer.normalize).toHaveBeenCalledWith(undefined, states[0]);
    });

    it('prepends changes per state', () => {
      const states = [{}, {}];
      const normalizerOne = new ChangeLog.SimpleFieldChangeLog();
      const normalizerTwo = new ChangeLog.SimpleFieldChangeLog();
      const normalizers = [normalizerOne, normalizerTwo];
      const stateOneChangesOne = [{ s1: 'c1' }];
      const stateOneChangesTwo = [{ s1: 'c2' }];
      const stateTwoChangesOne = [{ s2: 'c1' }];
      const stateTwoChangesTwo = [{ s2: 'c2' }];

      spyOn(normalizerOne, 'normalize')
        .and.returnValues(stateOneChangesOne, stateTwoChangesOne);
      spyOn(normalizerTwo, 'normalize')
        .and.returnValues(stateOneChangesTwo, stateTwoChangesTwo);

      expect(
        ChangeLog.normalizeChangeLog(states, normalizers)
      ).toEqual([
        stateTwoChangesOne[0],
        stateTwoChangesTwo[0],
        stateOneChangesOne[0],
        stateOneChangesTwo[0],
      ]);
    });
  });
});
